"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ProjectHeroImageProps {
  imageUrlAry?: string[];
  title: string;
}

const ProjectHeroImage = ({ imageUrlAry, title }: ProjectHeroImageProps) => {
  if (!imageUrlAry || imageUrlAry.length === 0) {
    return (
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://placehold.co/1280x720?text=no-image"
          alt={title}
          className="size-full object-cover"
        />
      </AspectRatio>
    );
  }

  if (imageUrlAry.length === 1) {
    return (
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
        <Image
          src={imageUrlAry[0]}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </AspectRatio>
    );
  }

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      navigation={true}
      className="overflow-hidden rounded-lg"
    >
      {imageUrlAry.map((url, index) => (
        <SwiperSlide key={index}>
          <AspectRatio ratio={16 / 9} className="w-full overflow-hidden bg-muted">
            <Image
              src={url}
              alt={`${title} - ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </AspectRatio>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectHeroImage;
