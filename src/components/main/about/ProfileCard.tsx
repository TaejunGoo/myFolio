import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import TechBadge from "@/shared/components/tech/TechBadge";
import { cn, getCareerDurationText } from "@/shared/utils";

import ProfileItem from "./ProfileItem";

interface ProfileCardProps {
  className?: string;
  projectsCount: number;
  maintenanceCount: number;
}

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
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                {profile.jobDescription.map((desc) => (
                  <span key={desc} className="text-left break-keep">
                    <span className="mr-1 text-primary">#</span>
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
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
          <ProfileItem title="사용하는 기술">
            <div className="flex flex-wrap justify-start gap-2">
              {profile.mainStack.map((tech) => (
                <TechBadge name={tech} key={tech} />
              ))}
            </div>
          </ProfileItem>
          <ProfileItem title="도구 및 기타">
            <div className="flex flex-wrap justify-start gap-2">
              {profile.subStack.map((tech) => (
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
