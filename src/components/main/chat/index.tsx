"use client";

import { startTransition, useEffect, useState } from "react";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { LoaderCircle, SendHorizontal, Square } from "lucide-react";
import ReactMarkdown, { type Components } from "react-markdown";
import { toast } from "sonner";

import Container from "@/components/layout/header/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { CHAT_USER_INPUT_MAX_LENGTH } from "@/lib/chatbot/constants";
import FadeInView from "@/shared/components/motion/FadeInView";
import { cn } from "@/shared/utils";

const CHAT_CLIENT_ID_STORAGE_KEY = "portfolio-chat-client-id";

const NUDGE_PROMPTS = [
  "어떤 프로젝트 경험이 가장 강점으로 보이나요?",
  "주요 기술 스택을 빠르게 요약해줘.",
  "협업 역량을 보여주는 포인트를 알려줘.",
];

interface ParsedChatError {
  message: string;
  details?: string[];
  retryAfter?: number;
}

interface ChatErrorIssue {
  path?: PropertyKey[];
  message?: string;
}

interface ChatRequestMessage {
  id: string;
  role: UIMessage["role"];
  parts: {
    type: "text";
    text: string;
  }[];
}

const assistantMarkdownComponents: Components = {
  h1: ({ children, ...props }) => (
    <h1 className="mb-3 text-base font-semibold last:mb-0 md:text-lg" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="mb-3 text-[15px] font-semibold last:mb-0 md:text-base" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mb-2 text-sm font-semibold last:mb-0 md:text-[15px]" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="break-keep whitespace-pre-wrap not-last:mb-3" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc space-y-1.5 pl-5 not-last:mb-3" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal space-y-1.5 pl-5 not-last:mb-3" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="pl-1 break-keep" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-3 border-l-2 border-primary/25 pl-4 text-muted-foreground italic dark:border-primary/35"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ children, ...props }) => (
    <a
      className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-80 dark:text-primary-foreground"
      target="_blank"
      rel="noreferrer noopener"
      {...props}
    >
      {children}
    </a>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="my-3 overflow-x-auto rounded-2xl bg-black/5 px-4 py-3 text-[13px] leading-6 dark:bg-white/10"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, className, ...props }) => {
    const isInlineCode = !className;

    return (
      <code
        className={cn(
          "font-mono text-[0.9em]",
          isInlineCode
            ? "rounded-md bg-black/6 px-1.5 py-0.5 dark:bg-white/12"
            : "bg-transparent p-0",
          className,
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
  hr: (props) => <hr className="my-4 border-white/15 dark:border-white/10" {...props} />,
};

const createClientId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `chat-${Date.now()}`;
};

const getMessageText = (message: UIMessage) => {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();
};

const formatErrorPath = (path: readonly PropertyKey[] | undefined) => {
  if (!path || path.length === 0) {
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

const formatIssueDetail = (issue: ChatErrorIssue) => {
  const issuePath = formatErrorPath(issue.path);
  const issueMessage = issue.message ?? "알 수 없는 검증 오류가 발생했습니다.";

  return `${issuePath}: ${issueMessage}`;
};

const getReadableErrorMessage = (message: string | undefined) => {
  if (!message) {
    return "챗봇 요청에 실패했습니다.";
  }

  if (message.startsWith("Invalid chat request.")) {
    return "채팅 요청 형식이 올바르지 않습니다.";
  }

  if (message === "Rate limit exceeded.") {
    return "요청이 너무 많습니다.";
  }

  if (message === "OPENROUTER_API_KEY is not configured.") {
    return "챗봇 설정이 아직 완료되지 않았습니다.";
  }

  return message;
};

const sanitizeOutgoingMessages = (messages: UIMessage[]): ChatRequestMessage[] => {
  return messages.reduce<ChatRequestMessage[]>((sanitizedMessages, message) => {
    const text = getMessageText(message);

    if (!text) {
      return sanitizedMessages;
    }

    sanitizedMessages.push({
      id: message.id,
      role: message.role,
      parts: [{ type: "text", text }],
    });

    return sanitizedMessages;
  }, []);
};

const parseChatError = (error: Error | undefined): ParsedChatError | null => {
  if (!error) {
    return null;
  }

  try {
    const parsed = JSON.parse(error.message) as {
      error?: string;
      details?: ChatErrorIssue[];
      retryAfter?: number;
    };

    const detailMessages = parsed.details
      ?.map(formatIssueDetail)
      .filter((detail, index, details) => detail && details.indexOf(detail) === index)
      .slice(0, 3);

    return {
      message: getReadableErrorMessage(parsed.error),
      details: detailMessages && detailMessages.length > 0 ? detailMessages : undefined,
      retryAfter: parsed.retryAfter,
    };
  } catch {
    return {
      message: getReadableErrorMessage(error.message),
    };
  }
};

const ChatSection = () => {
  const [clientId, setClientId] = useState("");
  const [input, setInput] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);
  const chatInstanceId = clientId ? `portfolio-chat:${clientId}` : "portfolio-chat:pending";

  const { messages, sendMessage, status, stop, error, clearError } = useChat({
    id: chatInstanceId,
    transport: new DefaultChatTransport({
      api: "/api/chat",
      body: { clientId },
      prepareSendMessagesRequest: ({ body, messages }) => {
        return {
          body: {
            ...(body ?? {}),
            messages: sanitizeOutgoingMessages(messages),
          },
        };
      },
    }),
    onError: (chatError) => {
      const parsed = parseChatError(chatError);
      toast.error(parsed?.message ?? "챗봇 요청에 실패했습니다.");
    },
  });

  const parsedError = parseChatError(error);
  const isGenerating = status === "submitted" || status === "streaming";

  useEffect(() => {
    const storedClientId = window.localStorage.getItem(CHAT_CLIENT_ID_STORAGE_KEY);
    const nextClientId = storedClientId || createClientId();

    if (!storedClientId) {
      window.localStorage.setItem(CHAT_CLIENT_ID_STORAGE_KEY, nextClientId);
    }

    startTransition(() => {
      setClientId(nextClientId);
    });
  }, []);

  useEffect(() => {
    if (!clientId) {
      return;
    }

    startTransition(() => {
      setIsHydrated(true);
    });
  }, [clientId]);

  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput || isGenerating || !isHydrated) {
      return;
    }

    if (trimmedInput.length > CHAT_USER_INPUT_MAX_LENGTH) {
      toast.error(`질문은 ${CHAT_USER_INPUT_MAX_LENGTH}자까지 입력할 수 있습니다.`);
      return;
    }

    clearError();
    setInput("");
    await sendMessage({ text: trimmedInput });
  };

  const handleNudgeClick = async (prompt: string) => {
    if (isGenerating || !isHydrated) {
      return;
    }

    clearError();
    setInput("");
    await sendMessage({ text: prompt });
  };

  const handleInputKeyDown = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing) {
      return;
    }

    event.preventDefault();
    await handleSubmit();
  };

  return (
    <Container>
      <h2 className="sr-only">Portfolio Chat</h2>
      <FadeInView>
        <Card className="border-white/20 bg-white/60 shadow-xl backdrop-blur-lg dark:border-white/10 dark:bg-black/40">
          <CardHeader className="gap-3">
            <CardTitle className="text-xl md:text-2xl">
              포트폴리오 챗봇
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              {NUDGE_PROMPTS.map((prompt) => (
                <Button
                  key={prompt}
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full border-white/30 bg-white/60 text-xs shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                  onClick={() => void handleNudgeClick(prompt)}
                  disabled={!isHydrated || isGenerating}
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="rounded-3xl border border-white/15 bg-white/45 p-3 shadow-inner dark:border-white/10 dark:bg-black/20">
              <div className="flex max-h-[420px] min-h-80 flex-col gap-3 overflow-y-auto p-1">
                {messages.length === 0 ? (
                  <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-white/20 px-6 py-10 text-center text-sm text-muted-foreground dark:border-white/10">
                    질문 예시를 누르거나 직접 입력해 시작하세요.
                  </div>
                ) : null}

                {messages.map((message) => {
                  const text = getMessageText(message);

                  if (!text) {
                    return null;
                  }

                  const isUser = message.role === "user";

                  return (
                    <div
                      key={message.id}
                      className={cn("flex", isUser ? "justify-end" : "justify-start")}
                    >
                      <div
                        className={cn(
                          "max-w-[88%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm md:text-[15px]",
                          isUser
                            ? "rounded-br-md bg-primary text-primary-foreground"
                            : "rounded-bl-md border border-white/20 bg-white/80 text-foreground dark:border-white/10 dark:bg-white/8",
                        )}
                      >
                        {isUser ? (
                          <p className="break-keep whitespace-pre-wrap">{text}</p>
                        ) : (
                          <div className="wrap-break-word text-sm leading-relaxed md:text-[15px]">
                            <ReactMarkdown components={assistantMarkdownComponents}>{text}</ReactMarkdown>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {isGenerating ? (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2 rounded-3xl rounded-bl-md border border-white/20 bg-white/75 px-4 py-3 text-sm text-muted-foreground dark:border-white/10 dark:bg-white/8">
                      <LoaderCircle className="size-4 animate-spin" />
                      답변을 생성하는 중입니다.
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            {parsedError ? (
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
                <p className="font-medium">{parsedError.message}</p>
                {parsedError.details?.length ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-xs opacity-90">
                    {parsedError.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
                {parsedError.retryAfter ? (
                  <p className="mt-1 text-xs opacity-80">
                    약 {parsedError.retryAfter}초 후 다시 시도해 주세요.
                  </p>
                ) : null}
              </div>
            ) : null}
          </CardContent>
          <CardFooter className="flex-col items-stretch gap-3">
            <form className="grid gap-3" onSubmit={(event) => void handleSubmit(event)}>
              <Textarea
                autoResize
                value={input}
                onChange={(event) => setInput(event.currentTarget.value)}
                onKeyDown={(event) => void handleInputKeyDown(event)}
                placeholder="예: 어떤 프로젝트가 가장 UI 엔지니어 역량을 잘 보여주나요?"
                maxLength={CHAT_USER_INPUT_MAX_LENGTH}
                disabled={!isHydrated || isGenerating}
              />
              <div className="flex items-center justify-end gap-2">
                <p className="mr-auto text-xs text-muted-foreground">
                  {input.length}/{CHAT_USER_INPUT_MAX_LENGTH}
                </p>
                {isGenerating ? (
                  <Button type="button" variant="outline" onClick={stop}>
                    <Square className="size-4" />
                    중단
                  </Button>
                ) : null}
                <Button type="submit" disabled={!isHydrated || !input.trim() || isGenerating}>
                  <SendHorizontal className="size-4" />
                  보내기
                </Button>
              </div>
            </form>
          </CardFooter>
        </Card>
      </FadeInView>
    </Container>
  );
};

export default ChatSection;
