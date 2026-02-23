"use client";

import { useEffect, useRef } from "react";

import { X } from "lucide-react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import type { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

interface ImageViewerProps {
  images: string[];
  initialIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

const ImageViewer = ({ images, initialIndex, open, onOpenChange, title }: ImageViewerProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Dialog가 열릴 때 초기 슬라이드로 이동
  useEffect(() => {
    if (open && swiperRef.current) {
      swiperRef.current.slideTo(initialIndex, 0);
    }
  }, [open, initialIndex]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-screen w-screen max-w-none! gap-0 border-none bg-background/80 p-0 shadow-none lg:size-auto lg:max-w-[1000px]!" showCloseButton={false}>
        <DialogHeader className="absolute top-0 left-0 z-10 w-full p-0">
          <DialogTitle className="sr-only">자세히 보기</DialogTitle>
          <DialogDescription className="sr-only">이미지를 확대하거나 슬라이드하여 볼 수 있습니다</DialogDescription>
          <DialogClose className="absolute top-4 right-4 cursor-pointer rounded-full bg-background/80 p-2 shadow-md transition-colors hover:bg-background hover:shadow-lg">
            <X className="size-4 text-foreground" />
            <span className="sr-only">닫기</span>
          </DialogClose>
        </DialogHeader>
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Zoom]}
          navigation
          pagination={{ type: "fraction" }}
          zoom={true}
          initialSlide={initialIndex}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="image-viewer-swiper size-full md:h-auto"
        >
          {images.map((url, index) => ( 
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={url}
                  alt={`${title} - ${index + 1}`}
                  className="size-auto max-h-[85vh]! max-w-full object-contain md:max-h-[85vh]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DialogContent>
    </Dialog>
  );
};

export default ImageViewer;
