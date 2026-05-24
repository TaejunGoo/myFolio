"use client";

import { useEffect, useState } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { formatPeriod } from "@/shared/utils";
import type { MaintenanceItemProps } from "@/types";

const MaintenanceItem = ({ name, logoUrl, periodStart, periodEnd, description }: MaintenanceItemProps) => {
  const [mounted, setMounted] = useState(false);
  const { start: formattedStart, end: formattedEnd } = formatPeriod(periodStart, periodEnd, "현재");

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <div className="flex items-center justify-center">
      {logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoUrl}
          alt={name}
          className="h-12 w-auto rounded-sm bg-white object-contain p-2"
          loading="lazy"
          width="96"
          height="48"
        />
      ) : (
        <div className="flex h-12 min-w-20 items-center justify-center rounded-md bg-muted px-4">
          <span className="text-sm font-medium text-muted-foreground">{name}</span>
        </div>
      )}
    </div>
  );

  // 하이드레이션 오류 방지: 마운트 전에는 툴팁 태그 없이 순수 텍스트/이미지만 렌더링
  if (!mounted) {
    return content;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {content}
      </TooltipTrigger>
      <TooltipContent>
        <div className="max-w-60 py-1">
          <div className="flex flex-col">
            <span className="text-lg font-bold">{name}</span>
            <span className="text-xs text-muted-foreground">{formattedStart} - {formattedEnd}</span>
          </div>
          <p className="mt-2 leading-relaxed text-wrap break-keep">{description}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default MaintenanceItem;
