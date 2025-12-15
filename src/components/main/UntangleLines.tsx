"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/shared/utils/cn";

interface UntangleLinesProps {
  count?: number; // 라인 개수
  color?: string; // 라인 색상
  height?: string; // 전체 높이
  className?: string;
  duration?: number; // 애니메이션 지속 시간 (초)
  delayPerLine?: number; // 라인별 딜레이 (초)
}

const UntangleLines = ({
  count = 5,
  color = "currentColor",
  height = "200px",
  duration = 1.5,
  delayPerLine = 0.2,
  className,
}: UntangleLinesProps) => {
  const SVG_HEIGHT = 500;

  // 라인별 랜덤 값을 미리 생성 (안정적인 값 보장)
  const [randomValues] = useState(() =>
    Array.from({ length: count }).map(() => ({
      randomY1: Math.random() * 100 - 50,
      randomY2: Math.random() * 100 - 50,
    })),
  );

  return (
    <div className={cn("w-full overflow-hidden", className)} style={{ height }}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 100 ${SVG_HEIGHT}`}
        preserveAspectRatio="none"
      >
        {Array.from({ length: count }).map((_, i) => {
          // 각 라인의 Y 위치 (균등 분배)
          const y = (SVG_HEIGHT / (count + 1)) * (i + 1);

          // 1. 엉킨 상태 (곡선)
          // M(시작) C(제어점1) (제어점2) (끝)
          // 제어점의 Y값을 위아래로 크게 흔들어서 꼬인 느낌을 줌
          const randomY1 = y + randomValues[i].randomY1;
          const randomY2 = y + randomValues[i].randomY2;
          const tangledPath = `M 0 ${y} C 30 ${randomY1}, 70 ${randomY2}, 100 ${y}`;

          // 2. 정렬된 상태 (직선)
          // 제어점이 시작/끝 점과 같은 Y축에 있으면 직선이 됨
          const straightPath = `M 0 ${y} C 30 ${y}, 70 ${y}, 100 ${y}`;

          return (
            <motion.path
              key={i}
              d={straightPath} // 최종 상태
              initial={{ d: tangledPath }} // 초기 상태
              animate={{ d: straightPath }} // 애니메이션 목표
              transition={{
                duration: duration, // 애니메이션 지속 시간
                ease: "easeInOut", // 부드럽게
                delay: i * delayPerLine, // 윗줄부터 순차적으로 (라인별 딜레이)
              }}
              stroke={color}
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              fill="transparent"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default UntangleLines;
