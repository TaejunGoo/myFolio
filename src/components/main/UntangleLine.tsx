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
  isUntangled = false, // 기본값 false (꼬인 상태 유지)
}: UntangleLineProps) => {
  // Generate random values once on mount
  const [randomSeed] = useState(() =>
    Array.from({ length: 60 }).map(() => ({
      xOffset: (Math.random() - 0.5) * 50,
      yRandom: Math.random(),
    })),
  );

  const paths = useMemo(() => {
    const POINTS = 60;
    const SVG_SIZE = 100; // 가로/세로 100으로 통일하여 계산
    const CENTER = SVG_SIZE / 2;

    // 2. 직선 경로 데이터 생성 (목표 상태)
    const straightPoints = Array.from({ length: POINTS }).map((_, i) => {
      let mainVal; // 주축 값 (Horizontal: x, Vertical: y)
      let isAnchor = false;

      if (i === 0) {
        mainVal = 0; // 전체 시작점
        isAnchor = true;
      } else if (i === 1) {
        mainVal = tangleStart * SVG_SIZE; // 꼬임 시작 경계점
        isAnchor = true;
      } else if (i === POINTS - 2) {
        mainVal = tangleEnd * SVG_SIZE; // 꼬임 끝 경계점
        isAnchor = true;
      } else if (i === POINTS - 1) {
        mainVal = SVG_SIZE; // 전체 끝점
        isAnchor = true;
      } else {
        // 나머지 점들은 tangleStart ~ tangleEnd 구간에 집중 배치
        const innerIndex = i - 2;
        const innerTotal = POINTS - 4;
        const step = innerIndex / (innerTotal - 1); // 0 ~ 1
        const range = tangleEnd - tangleStart;
        
        mainVal = (tangleStart + step * range) * SVG_SIZE;
      }

      // 교차축 값 (중앙 정렬 + 미세 오차)
      const crossVal = CENTER + (i % 2 === 0 ? 0.001 : -0.001);

      return {
        x: direction === "horizontal" ? mainVal : crossVal,
        y: direction === "horizontal" ? crossVal : mainVal,
        isAnchor,
      };
    });

    // 3. 꼬인 경로 데이터 생성 (초기 상태)
    const tangledPoints = straightPoints.map((p, i) => {
      if (p.isAnchor) {
        return { x: p.x, y: p.y };
      }

      if (direction === "horizontal") {
        return {
          x: p.x + randomSeed[i].xOffset, // 진행 방향으로 약간의 떨림
          y: randomSeed[i].yRandom * SVG_SIZE, // 수직 방향으로 랜덤 확산
        };
      } else {
        return {
          x: randomSeed[i].yRandom * SVG_SIZE, // 수평 방향으로 랜덤 확산
          y: p.y + randomSeed[i].xOffset, // 진행 방향으로 약간의 떨림
        };
      }
    });

    // 4. 점들을 SVG Path 문자열로 변환하는 함수 (부드러운 곡선 - Quadratic Bezier)
    const pointsToPath = (points: { x: number; y: number }[]) => {
      if (points.length === 0) return "";

      // 첫 번째 점으로 이동
      let d = `M ${points[0].x} ${points[0].y}`;

      // 점들을 부드럽게 연결 (중간점을 제어점으로 사용)
      for (let i = 1; i < points.length - 1; i++) {
        const p1 = points[i];
        const nextPoint = points[i + 1];

        // 현재 점(p1)을 제어점으로 사용하고,
        // (p1)과 (다음 점)의 중간을 도착점으로 설정
        const midX = (p1.x + nextPoint.x) / 2;
        const midY = (p1.y + nextPoint.y) / 2;

        d += ` Q ${p1.x} ${p1.y} ${midX} ${midY}`;
      }

      // 마지막 점 연결
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
          strokeWidth="1.1"
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
