"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import TechBadge from "@/shared/components/tech/TechBadge";
import ImagePlaceholder from "@/shared/components/ui/ImagePlaceholder";
import { cn, formatPeriod } from "@/shared/utils";
import type { ProjectCardProps } from "@/types";

export type { ProjectCardProps };

const ProjectCard = ({ title, category, description, imageUrlAry, projectLink, slug, periodStart, periodEnd, stack, client, className, priority }: ProjectCardProps) => {
  const { start: formattedStart, end: formattedEnd } = formatPeriod(periodStart, periodEnd, "진행 중");

  const cardContent = (
    <Card className={cn(className, "group flex cursor-pointer flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-black/40")}>
      <CardContent className="flex h-full flex-col">
        <div className="relative">
          <Badge variant={"secondary"} className="absolute top-2 right-2 z-10">{category}</Badge>
          {
            imageUrlAry ? (
              <AspectRatio ratio={16/9} className="w-full overflow-hidden rounded-lg bg-muted">
                <Image
                  src={imageUrlAry[0]}
                  alt={title}
                  fill
                  className="object-cover"
                  loading={priority ? undefined : "eager"}
                  priority={priority}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </AspectRatio>
            ) : (
              <AspectRatio ratio={16/9} className="w-full overflow-hidden rounded-lg bg-muted">
                <ImagePlaceholder />
              </AspectRatio>
            )
          }

        </div>
        <div className="mt-4 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl leading-tight font-bold break-keep">
              {title}
            </h3>
            {projectLink && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(projectLink, "_blank", "noopener,noreferrer");
                }}
                title="사이트 방문"
                className="relative z-10 mt-1 cursor-pointer text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink className="size-4" />
              </button>
            )}
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/80">{client}</span>
            <span>·</span>
            <span>{formattedStart} ~ {formattedEnd}</span>
          </div>

          <p className="mt-3 mb-5 min-h-[calc(1.375em*2)] text-sm leading-snug break-keep text-muted-foreground">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {
              stack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))
            }
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Link href={`/projects/${slug}`} className="block h-full">
      {cardContent}
    </Link>
  );
};
export default ProjectCard;
