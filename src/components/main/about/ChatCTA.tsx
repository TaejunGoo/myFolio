"use client";

import { MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { useFloatingChat } from "@/lib/chatbot/FloatingChatContext";
import { cn } from "@/shared/utils";

const ChatCTA = () => {
  const { open } = useFloatingChat();

  return (
    <button
      id="chat"
      type="button"
      aria-haspopup="dialog"
      aria-label="AI 어시스턴트에게 질문하기"
      onClick={open}
      className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/60 px-5 py-4 text-left shadow-xl backdrop-blur-lg transition-all duration-200 select-none hover:border-primary/30 hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring active:scale-[0.99] dark:border-white/10 dark:bg-black/40 dark:hover:border-primary/30 dark:hover:bg-black/50"
    >
      <span className="flex min-w-0 items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15">
          <MessageCircle className="size-4" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-sm font-semibold">AI 어시스턴트에게 물어보세요</span>
          <span className="block text-xs text-muted-foreground">경력, 프로젝트, 기술 스택 등 궁금한 점을 바로 확인해 보세요.</span>
        </span>
      </span>
      <span className={cn(buttonVariants({ size: "sm", variant: "outline" }), "shrink-0 gap-1.5")}>
        <MessageCircle className="size-3.5" aria-hidden="true" />
        질문하기
      </span>
    </button>
  );
};

export default ChatCTA;
