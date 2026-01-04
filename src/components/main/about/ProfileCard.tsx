import { Card, CardContent } from "@/components/ui/card";
import { TechName } from "@/shared/components/tech/tech-config";
import TechBadge from "@/shared/components/tech/TechBadge";
import { cn } from "@/shared/utils";

import ProfileItem from "./ProfileItem";

interface TimelineCardProps {
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

const ProfileCard = ({ className }: TimelineCardProps) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent>
        <div className="flex flex-col gap-4">
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
