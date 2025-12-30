import { format, parseISO } from "date-fns";
import { Link } from "lucide-react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TechName } from "@/shared/components/tech/tech-config";
import TechBadge from "@/shared/components/tech/TechBadge";
import { cn } from "@/shared/utils";

import "swiper/css";
import "swiper/css/pagination";

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrlAry: string[];
  projectLink?: string;
  periodStart: string;
  periodEnd?: string;
  stack: TechName[];
  client: string;
  className?: string;
}

const ProjectCard = ({ title, category, description, imageUrlAry, projectLink, periodStart, periodEnd, stack, client, className }: ProjectCardProps) => {
  const formattedStart = format(parseISO(periodStart), "yyyy.MM");
  const formattedEnd = periodEnd ? format(parseISO(periodEnd), "yyyy.MM") : "진행 중";
  return (
    <Card className={cn(className)}>
      <CardContent>
        <div className="relative">
          <Badge variant={"secondary"} className="absolute top-2 right-2 z-10">{category}</Badge>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {
              imageUrlAry.map((url, index) => (
                <SwiperSlide key={index}>
                  <AspectRatio ratio={16/9} className="w-full overflow-hidden rounded-lg bg-muted">
                    {/* 로컬 이미지로 변경 시 next/image 사용 */}
                    <Image src={url} alt={title} fill />
                  </AspectRatio>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="mt-4 flex flex-col">
          <p className="text-xl font-bold">
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
          </p>
          <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{client}</span>
            <span>·</span>
            <span>{formattedStart} - {formattedEnd}</span>
          </div>
        </div>
        <p className="mt-3 leading-tight">{description}</p>
        <div className="mt-4 flex flex-wrap gap-1">
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
