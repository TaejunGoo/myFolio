"use client";

import { startTransition, useEffect, useRef, useState } from "react";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { LoaderCircle, MessageCircle, SendHorizontal, Square, X } from "lucide-react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CHAT_USER_INPUT_MAX_LENGTH } from "@/lib/chatbot/constants";
import { useFloatingChat } from "@/lib/chatbot/FloatingChatContext";
import { cn } from "@/shared/utils";

const CHAT_CLIENT_ID_STORAGE_KEY = "portfolio-chat-client-id";

const NUDGE_PROMPT_POOL = [
  // 기술/역량
  "어떤 기술 스택을 주로 사용하나요?",
  "신기술을 팀에 도입한 경험이 있나요?",
  "기억에 남는 기술적 문제를 해결한 경험이 있나요?",
  // 프로젝트
  "대표 프로젝트를 소개해 주세요.",
  "브라우저나 디바이스 호환성 이슈를 다뤄본 적 있나요?",
  "팀의 개발 생산성을 높이기 위해 시도한 것이 있나요?",
  // 커리어
  "어떤 계기로 웹 퍼블리셔가 됐나요?",
  "에이전시 경험이 어떤 역량을 키워줬나요?",
  "앞으로 어떤 개발자로 성장하고 싶나요?",
];

const NUDGE_DISPLAY_COUNT = 3;

const pickRandomNudgePrompts = () => {
  const shuffled = [...NUDGE_PROMPT_POOL].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, NUDGE_DISPLAY_COUNT);
};

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
  table: ({ children, ...props }) => (
    <div className="my-3 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="border-b border-white/20 dark:border-white/15" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody className="divide-y divide-white/10 dark:divide-white/8" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => (
    <tr className="transition-colors hover:bg-black/4 dark:hover:bg-white/4" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th
      className="px-3 py-2 text-left text-xs font-semibold text-muted-foreground"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-3 py-2 align-top text-sm" {...props}>
      {children}
    </td>
  ),
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
  if (!path || path.length === 0) return "request";
  return path.reduce<string>((formattedPath, segment) => {
    const key = String(segment);
    if (typeof segment === "number") return `${formattedPath}[${key}]`;
    return formattedPath ? `${formattedPath}.${key}` : key;
  }, "");
};

const formatIssueDetail = (issue: ChatErrorIssue) => {
  const issuePath = formatErrorPath(issue.path);
  const issueMessage = issue.message ?? "알 수 없는 검증 오류가 발생했습니다.";
  return `${issuePath}: ${issueMessage}`;
};

const getReadableErrorMessage = (message: string | undefined) => {
  if (!message) return "챗봇 요청에 실패했습니다.";
  if (message.startsWith("Invalid chat request.")) return "채팅 요청 형식이 올바르지 않습니다.";
  if (message === "Rate limit exceeded.") return "요청이 너무 많습니다.";
  if (message === "OPENROUTER_API_KEY is not configured.") return "챗봇 설정이 아직 완료되지 않았습니다.";
  return message;
};

const sanitizeOutgoingMessages = (messages: UIMessage[]): ChatRequestMessage[] => {
  return messages.reduce<ChatRequestMessage[]>((sanitizedMessages, message) => {
    const text = getMessageText(message);
    if (!text) return sanitizedMessages;
    sanitizedMessages.push({
      id: message.id,
      role: message.role,
      parts: [{ type: "text", text }],
    });
    return sanitizedMessages;
  }, []);
};

const parseChatError = (error: Error | undefined): ParsedChatError | null => {
  if (!error) return null;
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
    return { message: getReadableErrorMessage(error.message) };
  }
};

const FloatingChat = () => {
  const { isOpen, close, toggle } = useFloatingChat();
  const [clientId, setClientId] = useState("");
  const [input, setInput] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);
  const [nudgePrompts, setNudgePrompts] = useState<string[]>(NUDGE_PROMPT_POOL.slice(0, NUDGE_DISPLAY_COUNT));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatInstanceId = clientId ? `portfolio-chat:${clientId}` : "portfolio-chat:pending";

  const { messages, sendMessage, status, stop, error, clearError } = useChat({
    id: chatInstanceId,
    transport: new DefaultChatTransport({
      api: "/api/chat",
      body: { clientId },
      prepareSendMessagesRequest: ({ body, messages }) => ({
        body: {
          ...(body ?? {}),
          messages: sanitizeOutgoingMessages(messages),
        },
      }),
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
    startTransition(() => setClientId(nextClientId));
  }, []);

  useEffect(() => {
    if (!clientId) return;
    startTransition(() => {
      setIsHydrated(true);
      setNudgePrompts(pickRandomNudgePrompts());
    });
  }, [clientId]);

  // 새 메시지 도착 시 스크롤 하단 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isGenerating || !isHydrated) return;
    if (trimmedInput.length > CHAT_USER_INPUT_MAX_LENGTH) {
      toast.error(`질문은 ${CHAT_USER_INPUT_MAX_LENGTH}자까지 입력할 수 있습니다.`);
      return;
    }
    clearError();
    setInput("");
    await sendMessage({ text: trimmedInput });
  };

  const handleNudgeClick = async (prompt: string) => {
    if (isGenerating || !isHydrated) return;
    clearError();
    setInput("");
    await sendMessage({ text: prompt });
  };

  const handleInputKeyDown = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing) return;
    event.preventDefault();
    await handleSubmit();
  };

  return (
    <>
      {/* 패널 */}
      <div
        className={cn(
          "fixed z-50 flex flex-col overflow-hidden border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-black/70",
          // 모바일: 전체화면, 모서리 없음
          "inset-0 rounded-none",
          // PC: 우하단 고정 패널
          "md:inset-auto md:bottom-24 md:right-4 md:h-[70vh] md:w-[420px] md:rounded-2xl",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between border-b border-white/15 px-4 py-3 dark:border-white/10">
          <div>
            <p className="text-sm font-semibold">무엇이든 물어보세요.</p>
            <p className="text-xs text-muted-foreground">포트폴리오에 대해 자유롭게 질문하세요.</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 shrink-0"
            onClick={close}
            aria-label="챗 닫기"
          >
            <X className="size-4" />
          </Button>
        </div>

        {/* 메시지 영역 */}
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <div className="flex flex-col gap-2">
              {nudgePrompts.map((prompt) => (
                <Button
                  key={prompt}
                  type="button"
                  variant="outline"
                  className="justify-start rounded-full border-white/30 bg-white/60 text-left text-xs shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                  onClick={() => void handleNudgeClick(prompt)}
                  disabled={!isHydrated || isGenerating}
                >
                  {prompt}
                </Button>
              ))}
            </div>
          ) : null}

          {messages.map((message) => {
            const text = getMessageText(message);
            if (!text) return null;
            const isUser = message.role === "user";
            return (
              <div key={message.id} className={cn("flex", isUser ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[88%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                    isUser
                      ? "rounded-br-md bg-primary text-primary-foreground"
                      : "rounded-bl-md border border-white/20 bg-white/80 text-foreground dark:border-white/10 dark:bg-white/8",
                  )}
                >
                  {isUser ? (
                    <p className="break-keep whitespace-pre-wrap">{text}</p>
                  ) : (
                    <div className="wrap-break-word text-sm leading-relaxed">
                      <ReactMarkdown components={assistantMarkdownComponents} remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
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

          <div ref={messagesEndRef} />
        </div>

        {/* 입력 영역 */}
        <div className="border-t border-white/15 p-3 dark:border-white/10">
          <form className="flex items-center gap-2" onSubmit={(event) => void handleSubmit(event)}>
            <div className="relative flex-1">
              <Textarea
                autoResize
                value={input}
                onChange={(event) => setInput(event.currentTarget.value)}
                onKeyDown={(event) => void handleInputKeyDown(event)}
                placeholder="질문을 입력해 주세요."
                maxLength={CHAT_USER_INPUT_MAX_LENGTH}
                disabled={!isHydrated || isGenerating}
                className="block min-h-[40px] max-h-[120px] resize-none py-2.5 pl-3 pr-14 text-sm"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground/60 select-none pointer-events-none">
                {input.length}/{CHAT_USER_INPUT_MAX_LENGTH}
              </span>
            </div>
            {isGenerating ? (
              <Button 
                type="button" 
                variant="outline" 
                size="icon" 
                className="size-10 flex-shrink-0 rounded-xl border-amber-500/30 text-amber-500 hover:bg-amber-500/10" 
                onClick={stop}
                aria-label="답변 생성 중단"
              >
                <Square className="size-4 fill-current" />
              </Button>
            ) : (
              <Button 
                type="submit" 
                size="icon" 
                className="size-10 flex-shrink-0 rounded-xl transition-all duration-200" 
                disabled={!isHydrated || !input.trim() || isGenerating}
                aria-label="메시지 전송"
              >
                <SendHorizontal className="size-4" />
              </Button>
            )}
          </form>
        </div>
      </div>

      {/* 플로팅 버튼: 모바일에서 패널이 열리면 숨김 (패널이 전체화면이므로) */}
      <Button
        id="floating-chat-button"
        onClick={toggle}
        size="icon"
        className={cn(
          "fixed bottom-6 right-4 z-50 size-14 rounded-full shadow-2xl transition-all duration-200",
          isOpen && "md:rotate-90",
          isOpen && "max-md:hidden",
        )}
        aria-label={isOpen ? "챗 닫기" : "챗 열기"}
      >
        {isOpen ? <X className="size-5" /> : <MessageCircle className="size-5" />}
      </Button>
    </>
  );
};

export default FloatingChat;
