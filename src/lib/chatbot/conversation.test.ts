import { describe, expect, it } from "vitest";

import { isConversationLimitExceeded } from "./conversation";

const textMessage = (text: string) => ({ parts: [{ type: "text", text }] });

describe("conversation limits", () => {
  it("allows the last valid request and detects the next question", () => {
    const history = Array.from({ length: 24 }, () => textMessage("짧은 메시지"));
    expect(isConversationLimitExceeded(history)).toBe(false);
    expect(isConversationLimitExceeded([...history, textMessage("다음 질문")])).toBe(true);
  });

  it("counts text across messages and trims surrounding whitespace", () => {
    const history = Array.from({ length: 3 }, () => textMessage(` ${"a".repeat(4000)} `));
    expect(isConversationLimitExceeded(history)).toBe(false);
    expect(isConversationLimitExceeded([...history, textMessage("a")])).toBe(true);
  });

  it("detects an oversized individual response", () => {
    expect(isConversationLimitExceeded([textMessage("a".repeat(4001))])).toBe(true);
  });
});
