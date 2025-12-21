"use client";

import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/shared/utils/cn";

interface UntangleLineProps {
  color?: string;
  height?: string;
  className?: string;
  duration?: number;
  tangleStart?: number; // 0 ~ 1 (꼬임 시작 지점 비율)
  tangleEnd?: number;   // 0 ~ 1 (꼬임 끝 지점 비율)
  direction?: "horizontal" | "vertical"; // 방향 설정 추가
  isUntangled?: boolean; // 외부 제어용 prop 추가
}

const UntangleLine = ({
  color = "currentColor",
  height = "100vh",
  className,
  duration = 2.5,
  tangleStart = 0,
  tangleEnd = 1,
  direction = "horizontal",
  isUntangled = false,
}: UntangleLineProps) => {
  // Generate random phases for sine waves to make each render unique
  const [randomSeed] = useState(() => ({
    phase1: Math.random() * Math.PI * 2,
    phase2: Math.random() * Math.PI * 2,
    phase3: Math.random() * Math.PI * 2,
    ampFactor: 0.8 + Math.random() * 0.4, // 0.8 ~ 1.2
  }));

  const paths = useMemo(() => {
    const POINTS = 100; // 점의 개수를 늘려 곡선을 더 부드럽게 만듦
    const SVG_SIZE = 100;
    const CENTER = SVG_SIZE / 2;

    // 2. 직선 경로 데이터 생성 (목표 상태)
    const straightPoints = Array.from({ length: POINTS }).map((_, i) => {
      let mainVal;
      let isAnchor = false;

      // 경계 인덱스 계산
      const startIndex = 1;
      const endIndex = POINTS - 2;
      
      if (i === 0) {
        mainVal = 0;
        isAnchor = true;
      } else if (i === startIndex) {
        mainVal = tangleStart * SVG_SIZE;
        isAnchor = true;
      } else if (i === endIndex) {
        mainVal = tangleEnd * SVG_SIZE;
        isAnchor = true;
      } else if (i === POINTS - 1) {
        mainVal = SVG_SIZE;
        isAnchor = true;
      } else {
        // 중간 점들 배치
        const innerIndex = i - 2;
        const innerTotal = POINTS - 4;
        const step = innerIndex / (innerTotal - 1);
        const range = tangleEnd - tangleStart;
        
        mainVal = (tangleStart + step * range) * SVG_SIZE;
      }

      const crossVal = CENTER + (i % 2 === 0 ? 0.001 : -0.001);

      return {
        x: direction === "horizontal" ? mainVal : crossVal,
        y: direction === "horizontal" ? crossVal : mainVal,
        isAnchor,
        progress: i / (POINTS - 1), // 전체 진행률 (0~1)
      };
    });

    // 3. 꼬인 경로 데이터 생성 (초기 상태)
    const tangledPoints = straightPoints.map((p, i) => {
      if (p.isAnchor) {
        return { x: p.x, y: p.y };
      }

      // 사인파를 이용한 유기적인 꼬임 생성
      // progress 값을 증폭시켜 파동의 빈도를 결정
      const t = p.progress * Math.PI * 8; // 4 cycles
      
      // 3개의 파동을 합성 (큰 파동 + 중간 파동 + 작은 떨림)
      const wave1 = Math.sin(t + randomSeed.phase1) * 15; 
      const wave2 = Math.cos(t * 2.5 + randomSeed.phase2) * 10;
      const wave3 = Math.sin(t * 5 + randomSeed.phase3) * 5;
      
      const totalNoise = (wave1 + wave2 + wave3) * randomSeed.ampFactor;

      // 주축(Main Axis)에도 약간의 왜곡을 주어 선이 앞뒤로 뭉치는 느낌 추가
      const mainAxisNoise = Math.cos(t * 3) * 5 * randomSeed.ampFactor;

      if (direction === "horizontal") {
        return {
          x: p.x + mainAxisNoise, 
          y: CENTER + totalNoise, // 중앙을 기준으로 파동 적용
        };
      } else {
        return {
          x: CENTER + totalNoise, // 중앙을 기준으로 파동 적용
          y: p.y + mainAxisNoise,
        };
      }
    });

    // 4. 점들을 SVG Path 문자열로 변환
    const pointsToPath = (points: { x: number; y: number }[]) => {
      if (points.length === 0) return "";

      let d = `M ${points[0].x} ${points[0].y}`;

      for (let i = 1; i < points.length - 1; i++) {
        const p1 = points[i];
        const nextPoint = points[i + 1];
        const midX = (p1.x + nextPoint.x) / 2;
        const midY = (p1.y + nextPoint.y) / 2;

        d += ` Q ${p1.x} ${p1.y} ${midX} ${midY}`;
      }

      d += ` L ${points[points.length - 1].x} ${points[points.length - 1].y}`;

      return d;
    };

    return {
      tangled: pointsToPath(tangledPoints),
      straight: pointsToPath(straightPoints),
    };
  }, [randomSeed, tangleStart, tangleEnd, direction]);

  return (
    <div className={cn("w-full overflow-visible", className)} style={{ height }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        <motion.path
          initial={{ d: paths.tangled }}
          animate={{ d: isUntangled ? paths.straight : paths.tangled }}
          transition={{
            duration: duration,
            ease: "backInOut",
          }}
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default UntangleLine;
