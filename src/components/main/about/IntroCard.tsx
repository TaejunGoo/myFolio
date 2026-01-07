import { ExternalLink, Mail } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn, getCareerDurationText } from "@/shared/utils";

import PointItem from "./PointItem";

interface IntroCardProps {
  className?: string;
}
const IntroCard = ({ className }: IntroCardProps) => {
  const duration = getCareerDurationText();
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
            사용자 경험을 최우선으로 생각하며, 접근성과 성능을 고려한 웹을 만듭니다.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <PointItem text={`${duration} 동안 Table 기반 레거시 웹부터 Next.js까지 폭넓은 경험`} />
          <PointItem text="팀 내 신기술 도입, 스터디 운영 등 주도적인 성장과 팀 기여" />
          <PointItem text="다양한 내/외부 조직과 협업 경험을 통한 원활한 커뮤니케이션 능력" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-2 sm:flex-row">
          <Button className="flex-1">
            <ExternalLink className="size-4" />
            이력서 보기
          </Button>
          <Button variant="outline" className="flex-1">
            <Mail className="size-4" />
            이메일
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default IntroCard;
