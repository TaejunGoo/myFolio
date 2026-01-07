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
  { label: "경력", value: getCareerDurationText() },
  { label: "프로젝트", value: `${projectsData.length}개` },
  { label: "유지보수", value: `${maintenanceData.length}개` },
];

const ProfileCard = ({ className }: ProfileCardProps) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-2 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 rounded-lg bg-muted p-3">
                <span className="text-lg font-bold">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
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
