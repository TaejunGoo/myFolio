"use client";

import { useEffect, useRef } from "react";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import ImagePlaceholder from "@/shared/components/ui/ImagePlaceholder";

import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ProjectHeroImageProps {
  imageUrlAry?: string[];
  title: string;
}

const ProjectHeroImage = ({ imageUrlAry, title }: ProjectHeroImageProps) => {
  const shouldReduceMotion = useReducedMotion();
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed) return;
    if (shouldReduceMotion) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  }, [shouldReduceMotion]);

  if (!imageUrlAry || imageUrlAry.length === 0) {
    return (
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
        <ImagePlaceholder text={title} />
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
          sizes="(max-width: 808px) calc(100vw - 40px), 768px"
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
      autoplay={shouldReduceMotion ? false : { delay: 3000, disableOnInteraction: true }}
      speed={shouldReduceMotion ? 0 : 300}
      onSwiper={(swiper) => { swiperRef.current = swiper; }}
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
              loading={index === 0 ? undefined : "lazy"}
              sizes="(max-width: 808px) calc(100vw - 40px), 768px"
            />
          </AspectRatio>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectHeroImage;
