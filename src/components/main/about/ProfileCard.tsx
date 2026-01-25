import { Card, CardContent } from "@/components/ui/card";
import type { TechName } from "@/shared/components/tech/tech-config";
import TechBadge from "@/shared/components/tech/TechBadge";
import { cn, getCareerDurationText } from "@/shared/utils";

import ProfileItem from "./ProfileItem";
import { maintenanceData } from "../maintenance/maintenanceData";
import { projectsData } from "../projects/projectsData";

interface ProfileCardProps {
  className?: string;
}

const jobDescription = [
  "재사용 가능한 UI 컴포넌트 개발",
  "반응형 및 크로스 브라우징 설계",
  "디자인·개발 파트 간 협업",
  "시멘틱 마크업 및 웹 접근성 준수",
  "요구사항에 따른 애니메이션 및 인터렉션 구현",
  "사용자 경험(UX) 향상",
];

const mainStack: TechName[] = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "jQuery",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Styled-Components",
  "Emotion",
];
const subStack: TechName[] = [
  "Git",
  "Figma",
  "Photoshop",
  "GitHub Copilot",
  "Claude Code",
];

const stats = [
  {
    label: "경력",
    value: getCareerDurationText(),
  },
  {
    label: "프로젝트",
    value: `${projectsData.length}개`,
  },
  {
    label: "유지보수",
    value: `${maintenanceData.length}개+`,
  },
];

const ProfileCard = ({ className }: ProfileCardProps) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div
            className="rounded-lg border bg-muted/50 p-4 text-center"
          >
            <ProfileItem title="주요 업무 및 역할">
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                {jobDescription.map((desc) => (
                  <span key={desc} className="inline-flex items-center gap-1">
                    <span className="text-primary">#</span>
                    <span>{desc}</span>
                  </span>
                ))}
              </div>
            </ProfileItem>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 rounded-lg border bg-muted/50 p-4 text-center"
              >
                <span className="text-lg font-bold tracking-tight md:text-2xl">{stat.value}</span>
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
          <ProfileItem title="사용하는 기술">
            <div className="flex flex-wrap justify-start gap-2">
              {mainStack.map((tech, index) => (
                <TechBadge name={tech} key={tech + index} />
              ))}
            </div>
          </ProfileItem>
          <ProfileItem title="도구 및 기타">
            <div className="flex flex-wrap justify-start gap-2">
              {subStack.map((tech, index) => (
                <TechBadge name={tech} key={tech + index} />
              ))}
            </div>
          </ProfileItem>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
