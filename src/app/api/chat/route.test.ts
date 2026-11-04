import { streamText } from "ai";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { CHAT_CONVERSATION_LIMIT_CODE, CHAT_CONVERSATION_LIMIT_MESSAGE } from "@/lib/chatbot/constants";

import { POST } from "./route";

vi.mock("ai", () => ({ streamText: vi.fn(), convertToModelMessages: vi.fn() }));
vi.mock("@openrouter/ai-sdk-provider", () => ({ createOpenRouter: vi.fn() }));

beforeEach(() => {
  vi.stubEnv("OPENROUTER_API_KEY", "test-key");
  vi.clearAllMocks();
});

afterEach(() => {
  vi.unstubAllEnvs();
});

const createRequest = (messages: { role: string; parts: { type: string; text: string }[] }[]) => new Request("http://localhost/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ clientId: "test-conversation-client", messages }),
});

const message = (role: string, text: string) => ({ role, parts: [{ type: "text", text }] });

describe("conversation limit responses", () => {
  it("returns a useful limit message before calling the model for a 25-message request", async () => {
    const messages = Array.from({ length: 25 }, (_, index) => message(index % 2 === 0 ? "user" : "assistant", "테스트"));
    const response = await POST(createRequest(messages));

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: CHAT_CONVERSATION_LIMIT_MESSAGE, code: CHAT_CONVERSATION_LIMIT_CODE });
    expect(streamText).not.toHaveBeenCalled();
  });

  it("uses the same recovery message when the text budget is exhausted", async () => {
    const messages = Array.from({ length: 13 }, (_, index) => message(index % 2 === 0 ? "user" : "assistant", index % 2 === 0 ? "질문" : "a".repeat(2100)));
    const response = await POST(createRequest(messages));

    expect(response.status).toBe(400);
    expect((await response.json()).code).toBe(CHAT_CONVERSATION_LIMIT_CODE);
    expect(streamText).not.toHaveBeenCalled();
  });

  it("keeps malformed requests separate from conversation limits", async () => {
    const response = await POST(createRequest([message("user", "a".repeat(101))]));

    expect(response.status).toBe(400);
    expect((await response.json()).code).toBeUndefined();
    expect(streamText).not.toHaveBeenCalled();
  });
});
