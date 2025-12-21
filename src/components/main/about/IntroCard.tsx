import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, getCareerDurationText } from "@/shared/utils";

import PointItem from "./PointItem";

interface IntroCardProps {
  className?: string;
}
const IntroCard = ({ className }: IntroCardProps) => {
  const duration = getCareerDurationText();
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl">다양한 경험을 가진<br /> 퍼블리셔 구태준 입니다.</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <PointItem text={`${duration} 동안 Table 기반 레거시 웹부터 Next.js까지 폭넓은 경험`} />
          <PointItem text="팀 내 신기술 도입, 스터디 운영 등 주도적인 성장과 팀 기여" />
          <PointItem text="다양한 내/외부 조직과 협업 경험을 통한 원활한 커뮤니케이션 능력" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <Button><ExternalLink className="size-4" />이력서 보기</Button>
          <Button variant={"outline"}>이메일</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default IntroCard;
