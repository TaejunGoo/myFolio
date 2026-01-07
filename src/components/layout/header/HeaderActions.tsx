"use client";

import { ExternalLink, Mail } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ThemeToggleBtn } from "./ThemeToggleBtn";

export const HeaderActions = () => {
  const email = "gtxggle2@gmail.com";
  const resumeUrl = "https://your-resume-link.com"; // 실제 이력서 링크로 변경 필요

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("이메일이 복사되었습니다!", {
        description: email,
      });
    } catch (err) {
      console.error("Failed to copy email:", err);
      toast.error("이메일 복사에 실패했습니다.");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleEmailCopy}
              className="hover:bg-accent"
            >
              <Mail className="size-5" />
              <span className="sr-only">이메일 복사</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>이메일 복사</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-accent"
            >
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-5" />
                <span className="sr-only">이력서 보기</span>
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>이력서 보기</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <ThemeToggleBtn />
    </div>
  );
};

export default HeaderActions;
