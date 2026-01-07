import { Card, CardContent } from "@/components/ui/card";
import { TechName } from "@/shared/components/tech/tech-config";
import TechBadge from "@/shared/components/tech/TechBadge";
import { cn, getCareerDurationText } from "@/shared/utils";

import ProfileItem from "./ProfileItem";
import { maintenanceData } from "../projects/maintenanceData";
import { projectsData } from "../projects/projectsData";

interface ProfileCardProps {
  className?: string;
}

const mainStack: TechName[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];
const subStack: TechName[] = [
  "Recoil",
  "Storybook",
  "Figma",
  "Git",
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
    value: `${maintenanceData.length}개`,
  },
];

const ProfileCard = ({ className }: ProfileCardProps) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 rounded-lg border bg-muted/50 p-4 text-center"
              >
                <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
          <ProfileItem title="Main Stack">
            <div className="flex justify-start gap-1">
              {mainStack.map((tech, index) => (
                <TechBadge name={tech} key={tech + index} />
              ))}
            </div>
          </ProfileItem>
          <ProfileItem title="Sub Stack">
            <div className="flex justify-start gap-1">
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
