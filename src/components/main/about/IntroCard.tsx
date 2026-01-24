"use client";

import { ExternalLink, Mail } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn, copyEmailToClipboard } from "@/shared/utils";

import PointItem from "./PointItem";

interface IntroCardProps {
  className?: string;
}
const IntroCard = ({ className }: IntroCardProps) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="space-y-6">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            <Avatar className="size-20 border-4 border-background shadow-xl md:size-24">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
                구태준
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">구태준</h2>
              <p className="mt-1 text-sm text-muted-foreground md:text-base">
                퍼블리셔 &middot; UI Engineer
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            다양한 환경에서 검증된 기술력과 협업 능력으로 프로젝트를 성공으로 이끕니다.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <PointItem text="React, Next.js 등 최신 프론트엔드 환경부터 Table기반의 레거시 웹까지 폭넓은 경험" />
          <PointItem text="이커머스, 관리 시스템, 미디어 등 다양한 도메인에서 UI 구축" />
          <PointItem text="팀 내 기술 도입과 스터디 운영 등 주도적인 성장과 팀 기여" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-2 sm:flex-row">
          <Button className="flex-1">
            <ExternalLink className="size-4" />
            이력서 보기
          </Button>
          <Button variant="outline" className="flex-1" onClick={copyEmailToClipboard}>
            <Mail className="size-4" />
            이메일 복사
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default IntroCard;
