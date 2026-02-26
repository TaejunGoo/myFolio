"use client";

import { Mail } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { cn, copyEmailToClipboard } from "@/shared/utils";

import PointItem from "./PointItem";

interface IntroCardProps {
  className?: string;
}
const IntroCard = ({ className }: IntroCardProps) => {
  return (
    <Card className={cn("w-full border-white/20 bg-white/60 shadow-xl backdrop-blur-lg dark:border-white/10 dark:bg-black/40", className)}>
      <CardHeader className="space-y-6">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="size-20 shadow-xl md:size-24">
              <AvatarImage src={profile.avatarUrl} alt={profile.avatarAlt} sizes="(max-width: 768px) 80px, 96px" />
              <AvatarFallback className="bg-linear-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
                {profile.name}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">{profile.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground md:text-base">
                {profile.title}
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed break-keep text-muted-foreground md:text-base">
            {profile.bio}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {profile.highlights.map((text) => (
            <PointItem key={text} text={text} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-2 sm:flex-row">
          {/* <Button className="flex-1">
            <ExternalLink className="size-4" />
            이력서 보기
          </Button> */}
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
