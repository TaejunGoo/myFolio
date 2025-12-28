import { Link } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { TechName } from "@/shared/components/tech/tech-config";
import TechBadge from "@/shared/components/tech/TechBadge";
import { cn } from "@/shared/utils";

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  period: string;
  stack: TechName[];
  className?: string;
}

const ProjectCard = ({ title, category, description, imageUrl, projectLink, period, stack, className }: ProjectCardProps) => {
  return (
    <Card className={cn(className)}>
      <CardContent>
        <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg bg-muted">
          {/* 로컬 이미지로 변경 시 next/image 사용 */}
          <img src={imageUrl} alt={title} className="block size-full object-cover" />
        </AspectRatio>
        <div className="mt-4 flex flex-col">
          <h3 className="text-xl font-bold">
            {
              projectLink ? (
                <a href={projectLink} title="링크 이동" className="inline-flex items-center gap-1 hover:underline">
                  <span>{title}</span>
                  <Link className="size-4" />
                </a>
              ) : (
                title
              )
            }
          </h3>
          <p className="text-sm text-muted-foreground">{category}</p>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <p className="mt-2">{description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {
            stack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
