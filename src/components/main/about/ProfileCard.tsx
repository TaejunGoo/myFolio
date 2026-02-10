import { Card, CardContent } from "@/components/ui/card";
import type { TechName } from "@/shared/components/tech/tech-config";
import TechBadge from "@/shared/components/tech/TechBadge";
import { cn, getCareerDurationText } from "@/shared/utils";

import ProfileItem from "./ProfileItem";

interface ProfileCardProps {
  className?: string;
  projectsCount: number;
  maintenanceCount: number;
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

const ProfileCard = ({ className, projectsCount, maintenanceCount }: ProfileCardProps) => {
  const stats = [
    {
      label: "경력",
      value: getCareerDurationText(),
    },
    {
      label: "프로젝트",
      value: `${projectsCount}개`,
    },
    {
      label: "유지보수",
      value: `${maintenanceCount}개+`,
    },
  ];
  return (
    <Card className={cn("w-full border-white/20 bg-white/60 shadow-xl backdrop-blur-lg dark:border-white/10 dark:bg-black/40", className)}>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div
            className="rounded-lg bg-white/40 p-4 text-center shadow-xs dark:bg-white/5"
          >
            <ProfileItem title="주요 업무 및 역할">
              <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {jobDescription.map((desc) => (
                  <span key={desc} className="text-left break-keep">
                    <span className="text-primary mr-1">#</span>
                    <span>{desc}</span>
                  </span>
                ))}
              </div>
            </ProfileItem>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="gap-1/2 flex flex-col items-center rounded-lg bg-white/40 p-4 text-center shadow-xs first:col-span-2 md:first:col-span-1 dark:bg-white/5"
              >
                <span className="text-xl font-bold tracking-tight md:text-2xl">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
          <ProfileItem title="사용하는 기술">
            <div className="flex flex-wrap justify-start gap-2">
              {mainStack.map((tech) => (
                <TechBadge name={tech} key={tech} />
              ))}
            </div>
          </ProfileItem>
          <ProfileItem title="도구 및 기타">
            <div className="flex flex-wrap justify-start gap-2">
              {subStack.map((tech) => (
                <TechBadge name={tech} key={tech} />
              ))}
            </div>
          </ProfileItem>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
