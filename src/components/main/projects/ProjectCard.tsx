import { format, parseISO } from "date-fns";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { TechName } from "@/shared/components/tech/tech-config";
import TechBadge from "@/shared/components/tech/TechBadge";
import { cn } from "@/shared/utils";

import "swiper/css";
import "swiper/css/pagination";

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrlAry?: string[];
  projectLink?: string;
  slug?: string; // 상세 페이지 식별자 (폴더명)
  periodStart: string;
  periodEnd?: string;
  stack: TechName[];
  client: string;
  className?: string;
}

const ProjectCard = ({ title, category, description, imageUrlAry, projectLink, slug, periodStart, periodEnd, stack, client, className }: ProjectCardProps) => {
  const formattedStart = format(parseISO(periodStart), "yyyy.MM");
  const formattedEnd = periodEnd ? format(parseISO(periodEnd), "yyyy.MM") : "진행 중";
  
  return (
    <Card className={cn(className, "flex flex-col")}>
      <CardContent className="flex h-full flex-col">
        <div className="relative">
          <Badge variant={"secondary"} className="absolute top-2 right-2 z-10">{category}</Badge>
          {
            imageUrlAry ? (
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="rounded-lg"
              >
                {
                  imageUrlAry.map((url, index) => (
                    <SwiperSlide key={index}>
                      <AspectRatio ratio={16/9} className="w-full overflow-hidden bg-muted">
                        <Image src={url} alt={title} fill className="object-cover" />
                      </AspectRatio>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            ) : (
              <AspectRatio ratio={16/9} className="w-full overflow-hidden rounded-lg bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={"https://placehold.co/960x540?text=no-image"} alt={title} className="size-full object-cover" />
              </AspectRatio>
            )
          }
          
        </div>
        <div className="mt-4 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl leading-tight font-bold break-keep">
              {slug ? (
                <Link href={`/projects/${slug}`} className="decoration-2 underline-offset-4 hover:underline">
                  {title}
                </Link>
              ) : (
                title
              )}
            </h3>
            {projectLink && (
              <a 
                href={projectLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="사이트 방문" 
                className="mt-1 text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink className="size-4" />
              </a>
            )}
          </div>
          
          <div className="mt-1 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/80">{client}</span>
            <span>·</span>
            <span>{formattedStart} - {formattedEnd}</span>
          </div>
          
          <p className="mt-3 mb-5 min-h-[calc(1.375em*2)] text-sm leading-snug break-keep text-muted-foreground">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-1">
            {
              stack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))
            }
          </div>

          {slug && (
            <div className="mt-auto pt-4">
              <Button asChild variant="outline" className="w-full">
                <Link href={`/projects/${slug}`}>
                  자세히 보기
                </Link>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
