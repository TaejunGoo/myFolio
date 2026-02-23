"use client";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyEmailToClipboard } from "@/shared/utils";

import { ThemeToggleBtn } from "./ThemeToggleBtn";

export const HeaderActions = () => {
  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={copyEmailToClipboard}
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

      {/* <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-accent"
          >
            <a href="https://your-resume-link.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-5" />
              <span className="sr-only">이력서 보기</span>
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>이력서 보기</p>
        </TooltipContent>
      </Tooltip> */}

      <ThemeToggleBtn />
    </div>
  );
};

export default HeaderActions;
