"use client";

import { ExternalLink, Sparkles } from "lucide-react";
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

const ProjectCard = ({
  title,
  category,
  description,
  imageUrlAry,
  projectLink,
  slug,
  periodStart,
  periodEnd,
  participation,
  stack,
  client,
  className,
  priority,
}: ProjectCardProps) => {
  const { start: formattedStart, end: formattedEnd } = formatPeriod(periodStart, periodEnd, "진행 중");
  const isPersonalProject = category === "Personal";

  const cardContent = (
    <Card
      className={cn(
        "group relative flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        isPersonalProject
          ? "border-purple-500/30 bg-linear-to-br from-purple-500/10 via-card to-blue-500/10 shadow-purple-500/5 hover:border-purple-500/50 hover:shadow-purple-500/15 dark:from-purple-500/15 dark:via-black/40 dark:to-blue-500/10"
          : "dark:bg-black/40",
        className,
      )}
    >
      <CardContent className="flex h-full flex-col">
        <div className="relative">
          <Badge
            variant={isPersonalProject ? "outline" : "secondary"}
            className={cn(
              "pointer-events-none absolute top-2 right-2 z-10",
              isPersonalProject && "border-purple-500/30 bg-purple-500/15 text-purple-700 backdrop-blur-sm dark:text-purple-300",
            )}
          >
            {isPersonalProject && <Sparkles />}
            {isPersonalProject ? "Personal Project" : category}
          </Badge>
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
              {slug ? (
                <Link
                  href={`/projects/${slug}`}
                  className="after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-ring"
                >
                  {title}
                </Link>
              ) : title}
            </h3>
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} 웹사이트 열기 (새 탭)`}
                className="relative z-10 inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>

          <div className="mt-1 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/80">{client}</span>
            <span>·</span>
            <span>{formattedStart} ~ {formattedEnd}</span>
            {participation !== undefined ? (
              <Badge variant="outline" className="ml-1 px-1.5 py-0 text-[10px] font-medium">
                참여도 {participation}%
              </Badge>
            ) : null}
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

  return cardContent;
};
export default ProjectCard;
