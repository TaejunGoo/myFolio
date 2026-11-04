"use client";

import { useRef, useState } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/shared/utils";
import type { ProjectImage } from "@/types";

const ImageViewer = dynamic(() => import("./ImageViewer"), { ssr: false });

interface ProjectGalleryProps {
  images: ProjectImage[];
  title: string;
  presentation?: "gallery" | "showcase";
}

const ProjectGallery = ({ images, title, presentation = "gallery" }: ProjectGalleryProps) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const hasPortraitImages = images.some((image) => image.width && image.height && image.width < image.height);

  if (images.length === 0) return null;

  return (
    <>
      <div className={cn(
        "grid gap-4",
        presentation === "gallery" && images.length > 1 && "sm:grid-cols-2",
        presentation === "showcase" && hasPortraitImages && "sm:grid-cols-3",
      )}>
        {images.map((image, index) => (
          <figure key={image.src} className={cn(
            "min-w-0 space-y-2",
            presentation === "showcase" && hasPortraitImages && image.width && image.height && image.width >= image.height && "sm:col-span-full",
          )}>
            <button
              type="button"
              className={cn(
                "block w-full cursor-zoom-in overflow-hidden transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-reduce:transition-none",
                presentation === "gallery" && "rounded-lg border bg-muted",
              )}
              aria-label={`${title}: ${image.alt} 확대 보기`}
              aria-haspopup="dialog"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelectedImageIndex(index);
                setIsViewerOpen(true);
              }}
            >
              <AspectRatio ratio={presentation === "showcase" && image.width && image.height ? image.width / image.height : 16 / 9}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={presentation === "showcase"
                    ? hasPortraitImages && image.width && image.height && image.width < image.height
                      ? "(max-width: 639px) 100vw, 256px"
                      : "(max-width: 768px) 100vw, 768px"
                    : images.length > 1
                      ? "(max-width: 640px) 100vw, 384px"
                      : "(max-width: 768px) 100vw, 768px"}
                  className="object-contain"
                />
              </AspectRatio>
            </button>
            {image.caption && (
              <figcaption className="text-sm leading-relaxed text-muted-foreground">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      {isViewerOpen && (
        <ImageViewer
          images={images}
          initialIndex={selectedImageIndex}
          open={isViewerOpen}
          onOpenChange={setIsViewerOpen}
          title={title}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            triggerRef.current?.focus();
          }}
        />
      )}
    </>
  );
};

export default ProjectGallery;
