"use client";

import * as React from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import Image from "next/image";

import { cn } from "@/shared/utils/index";

const Avatar = ({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
};

const AvatarImage = ({
  className,
  alt = "프로필 이미지",
  sizes,
  ...props
}: Omit<React.ComponentProps<typeof Image>, "width" | "height" | "fill"> & {
  alt?: string;
  sizes?: string;
}) => {
  return (
    <Image
      fill
      data-slot="avatar-image"
      className={cn("object-cover", className)}
      alt={alt}
      sizes={sizes}
      {...props}
    />
  );
};

const AvatarFallback = ({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted",
        className,
      )}
      {...props}
    />
  );
};

export { Avatar, AvatarImage, AvatarFallback };
