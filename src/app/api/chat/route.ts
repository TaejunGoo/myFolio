import { createHash } from "node:crypto";

import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { z } from "zod";

import {
  CHAT_MAX_OUTPUT_TOKENS,
  CHAT_MAX_REQUEST_MESSAGES,
  CHAT_MESSAGE_TEXT_MAX_LENGTH,
  CHAT_REQUEST_BODY_MAX_LENGTH,
  CHAT_TOTAL_INPUT_TEXT_MAX_LENGTH,
  CHAT_USER_INPUT_MAX_LENGTH,
} from "@/lib/chatbot/constants";
import { getPortfolioSystemPrompt } from "@/lib/chatbot/prompt";
import { enforceChatRateLimit } from "@/lib/chatbot/rate-limit";

export const maxDuration = 30;
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_MODEL = "deepseek/deepseek-v4-flash";
const GEMMA_FALLBACK_MODEL = "google/gemma-4-31b-it:free";
const FREE_ROUTER_MODEL = "openrouter/free";

const MODEL_DISPLAY_NAMES: Record<string, string> = {
  [DEFAULT_MODEL]: "DeepSeek V4 Flash",
  [GEMMA_FALLBACK_MODEL]: "Gemma 4 31B",
  [FREE_ROUTER_MODEL]: "OpenRouter Free Router",
};

const textPartSchema = z.object({
  type: z.literal("text"),
  text: z.string().trim().min(1).max(CHAT_MESSAGE_TEXT_MAX_LENGTH),
});

const messageSchema = z.object({
  id: z.string().optional(),
  role: z.enum(["user", "assistant", "system"]),
  parts: z.array(textPartSchema).min(1),
}).superRefine((message, context) => {
  if (message.role !== "user") {
    return;
  }

  message.parts.forEach((part, index) => {
    if (part.text.trim().length > CHAT_USER_INPUT_MAX_LENGTH) {
      context.addIssue({
        code: "too_big",
        maximum: CHAT_USER_INPUT_MAX_LENGTH,
        inclusive: true,
        origin: "string",
        path: ["parts", index, "text"],
        message: `사용자 입력은 ${CHAT_USER_INPUT_MAX_LENGTH}자까지 가능합니다.`,
      });
    }
  });
});

const requestSchema = z.object({
  clientId: z.string().trim().min(12).max(120),
  messages: z.array(messageSchema).min(1).max(CHAT_MAX_REQUEST_MESSAGES),
}).superRefine((request, context) => {
  const lastMessageIndex = request.messages.length - 1;
  const lastMessage = request.messages.at(lastMessageIndex);
  let totalInputTextLength = 0;

  request.messages.forEach((message, messageIndex) => {
    if (message.role === "system") {
      context.addIssue({
        code: "custom",
        path: ["messages", messageIndex, "role"],
        message: "system 역할 메시지는 클라이언트 요청에 포함할 수 없습니다.",
      });
    }

    totalInputTextLength += message.parts.reduce((totalLength, part) => {
      return totalLength + part.text.trim().length;
    }, 0);
  });

  if (!lastMessage) {
    return;
  }

  if (lastMessage.role !== "user") {
    context.addIssue({
      code: "custom",
      path: ["messages", lastMessageIndex, "role"],
      message: "마지막 메시지는 사용자 질문이어야 합니다.",
    });
  }

  if (totalInputTextLength > CHAT_TOTAL_INPUT_TEXT_MAX_LENGTH) {
    context.addIssue({
      code: "custom",
      path: ["messages"],
      message: `전체 대화 입력은 ${CHAT_TOTAL_INPUT_TEXT_MAX_LENGTH}자까지 가능합니다.`,
    });
  }
});

const formatIssuePath = (path: readonly PropertyKey[]): string => {
  if (path.length === 0) {
    return "request";
  }

  return path.reduce<string>((formattedPath, segment) => {
    const key = String(segment);

    if (typeof segment === "number") {
      return `${formattedPath}[${key}]`;
    }

    return formattedPath ? `${formattedPath}.${key}` : key;
  }, "");
};

const getValidationErrorMessage = (error: z.ZodError) => {
  const issueSummary = error.issues
    .slice(0, 3)
    .map((issue) => `${formatIssuePath(issue.path)}: ${issue.message}`)
    .join(" | ");

  return issueSummary ? `Invalid chat request. ${issueSummary}` : "Invalid chat request.";
};

const getModelName = () => {
  return process.env.OPENROUTER_MODEL ?? DEFAULT_MODEL;
};

const getFallbackModels = (primaryModel: string) => {
  return [DEFAULT_MODEL, GEMMA_FALLBACK_MODEL, FREE_ROUTER_MODEL]
    .filter((model) => model !== primaryModel);
};

const getReasoningOptions = (model: string) => {
  if (!model.startsWith("deepseek/deepseek-v4-")) {
    return {};
  }

  return {
    reasoning: {
      effort: "high" as const,
      exclude: true,
    },
  };
};

export async function GET() {
  const model = getModelName();

  return Response.json(
    {
      model,
      displayName: MODEL_DISPLAY_NAMES[model] ?? model,
      provider: "OpenRouter",
      fallbackEnabled: getFallbackModels(model).length > 0,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

const getAppUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  return vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000";
};

const getRequesterId = (request: Request, clientId: string) => {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const requesterIdentity = forwardedFor || request.headers.get("x-real-ip") || clientId;

  return createHash("sha256").update(requesterIdentity).digest("hex").slice(0, 32);
};

const escapeUserInput = (text: string) => {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
};

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "OPENROUTER_API_KEY is not configured." },
      { status: 503 },
    );
  }

  const requestBody = await request.text();

  if (requestBody.length > CHAT_REQUEST_BODY_MAX_LENGTH) {
    return Response.json(
      { error: "Chat request body is too large." },
      { status: 413 },
    );
  }

  let requestJson: unknown;

  try {
    requestJson = JSON.parse(requestBody);
  } catch {
    return Response.json(
      { error: "Invalid JSON request body." },
      { status: 400 },
    );
  }

  const parsed = requestSchema.safeParse(requestJson);

  if (!parsed.success) {
    return Response.json(
      {
        error: getValidationErrorMessage(parsed.error),
        ...(process.env.NODE_ENV === "development" && { details: parsed.error.issues }),
      },
      { status: 400 },
    );
  }

  const { clientId, messages } = parsed.data;
  const requesterId = getRequesterId(request, clientId);
  const rateLimit = await enforceChatRateLimit(requesterId);

  if (rateLimit.limited) {
    return Response.json(
      {
        error: "Rate limit exceeded.",
        retryAfter: rateLimit.retryAfter,
        limit: rateLimit.limit,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfter),
          "X-RateLimit-Limit": String(rateLimit.limit),
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      },
    );
  }

  let systemPrompt: string;

  try {
    systemPrompt = await getPortfolioSystemPrompt();
  } catch (error) {
    console.error("Failed to load portfolio chatbot context", error);
    return Response.json(
      { error: "Chatbot context is unavailable." },
      { status: 503 },
    );
  }

  const openrouter = createOpenRouter({
    apiKey,
    appName: "myFolio",
    appUrl: getAppUrl(),
  });
  const primaryModel = getModelName();

  const secureMessages = messages.map((msg) => {
    if (msg.role === "user") {
      return {
        ...msg,
        parts: msg.parts.map((part) => {
          return {
            ...part,
            text: `<user_input>${escapeUserInput(part.text)}</user_input>`,
          };
        }),
      };
    }
    return msg;
  });

  const result = streamText({
    model: openrouter(primaryModel),
    system: systemPrompt,
    messages: await convertToModelMessages(secureMessages as UIMessage[]),
    maxOutputTokens: CHAT_MAX_OUTPUT_TOKENS,
    temperature: 0.3,
    providerOptions: {
      openrouter: {
        user: requesterId,
        ...getReasoningOptions(primaryModel),
        usage: {
          include: true,
        },
        models: getFallbackModels(primaryModel),
      },
    },
    onError: ({ error }) => {
      console.error(
        "Chat streaming error",
        error instanceof Error ? error.message : "Unknown provider error",
      );
    },
  });

  return result.toUIMessageStreamResponse({
    headers: {
      "X-RateLimit-Limit": String(rateLimit.limit),
      "X-RateLimit-Remaining": String(rateLimit.remaining),
    },
    sendReasoning: false,
    sendSources: false,
    onError: () => "챗봇 답변을 생성하지 못했습니다. 잠시 후 다시 시도해 주세요.",
  });
}
