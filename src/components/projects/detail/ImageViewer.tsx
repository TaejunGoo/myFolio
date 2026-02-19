"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "./ImageViewer.css";

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
      <DialogContent className="h-screen w-screen max-w-none! border-none bg-background/80 p-0 gap-0 shadow-none w-full! lg:h-auto lg:w-auto lg:max-w-[1000px]!" showCloseButton={false}>
        <DialogHeader className="absolute left-0 top-0 z-10 w-full p-0">
          <DialogTitle className="sr-only">자세히 보기</DialogTitle>
          <DialogDescription className="sr-only">이미지를 확대하거나 슬라이드하여 볼 수 있습니다</DialogDescription>
          <DialogClose className="absolute right-4 top-4 cursor-pointer rounded-full bg-background/80 shadow-md p-2 transition-colors hover:bg-background hover:shadow-lg">
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
            className="image-viewer-swiper h-full w-full md:h-auto"
          >
            {images.map((url, index) => ( 
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img
                    src={url}
                    alt={`${title} - ${index + 1}`}
                    className="h-auto max-h-[85vh]! w-auto max-w-full object-contain md:max-h-[85vh]"
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
