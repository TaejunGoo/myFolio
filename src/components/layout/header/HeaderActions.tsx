"use client";

import Link from "next/link";
import { FiGithub, FiMail } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profile } from "@/data";
import { copyEmailToClipboard } from "@/shared/utils";

import { ThemeToggleBtn } from "./ThemeToggleBtn";

export const HeaderActions = () => {
  return (
    <div className="flex items-center gap-1">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent"
            >
              <FiGithub className="size-5" />
              <span className="sr-only">Github 방문</span>
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Github 방문</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={copyEmailToClipboard}
            className="hover:bg-accent"
          >
            <FiMail className="size-5" />
            <span className="sr-only">이메일 복사</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>이메일 복사</p>
        </TooltipContent>
      </Tooltip>

      <ThemeToggleBtn />
    </div>
  );
};

export default HeaderActions;
