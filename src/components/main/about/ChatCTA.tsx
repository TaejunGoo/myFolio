"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useFloatingChat } from "@/lib/chatbot/FloatingChatContext";

const ChatCTA = () => {
  const { open } = useFloatingChat();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  };

  return (
    <div
      id="chat"
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={handleKeyDown}
      className="flex cursor-pointer select-none items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/60 px-5 py-4 shadow-xl backdrop-blur-lg transition-all duration-200 hover:border-primary/30 hover:bg-white/80 active:scale-[0.99] dark:border-white/10 dark:bg-black/40 dark:hover:border-primary/30 dark:hover:bg-black/50"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15">
          <MessageCircle className="size-4" />
        </div>
        <div>
          <p className="text-sm font-semibold">AI 어시스턴트에게 물어보세요</p>
          <p className="text-xs text-muted-foreground">경력, 프로젝트, 기술 스택 등 궁금한 점을 바로 확인해 보세요.</p>
        </div>
      </div>
      <Button
        size="sm"
        variant="outline"
        className="pointer-events-none shrink-0 gap-1.5"
        aria-label="챗봇 열기"
      >
        <MessageCircle className="size-3.5" />
        질문하기
      </Button>
    </div>
  );
};

export default ChatCTA;
