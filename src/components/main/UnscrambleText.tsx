"use client";

import { useEffect, useState } from "react";

import { cn } from "@/shared/utils/cn";

interface UnscrambleTextProps {
  text: string;
  className?: string;
  duration?: number; // 전체 애니메이션 시간 (ms)
  delay?: number; // 시작 딜레이 (ms)
}

const UnscrambleText =  ({
  text,
  className,
  duration = 1000,
  delay = 0,
}: UnscrambleTextProps) => {
  const [isAnimated, setIsAnimated] = useState(false);

  // 각 글자의 랜덤 회전 각도를 미리 생성
  const [randomRotations] = useState(() =>
    text.split("").map(() => Math.floor(Math.random() * 180) - 90),
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={cn("flex overflow-visible", className)} aria-label={text}>
      {text.split("").map((char, index) => {
        // 공백은 회전해도 안 보이므로 그냥 렌더링
        if (char === " ") return <span key={index}>&nbsp;</span>;

        const randomRotate = randomRotations[index];

        return (
          <span
            key={index}
            className="inline-block transition-transform ease-out will-change-transform"
            style={{
              transform: isAnimated ? "rotate(0deg)" : `rotate(${randomRotate}deg)`,
              transitionDuration: `${duration}ms`,
              transitionDelay: `${index * 10}ms`,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};
export default UnscrambleText;
