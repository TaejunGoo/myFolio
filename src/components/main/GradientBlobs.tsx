"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/shared/utils/cn";

interface GradientBlobsProps {
  isUntangled: boolean;
  className?: string;
}

export const GradientBlobs = ({ isUntangled, className }: GradientBlobsProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 뭉치들의 설정
  const blobs = [
    { color: "bg-primary/80 dark:bg-white/60", size: "w-[500px] h-[500px]" },
    { color: "bg-violet-500/80 dark:bg-zinc-200/60", size: "w-[400px] h-[400px]" },
    { color: "bg-blue-500/60 dark:bg-neutral-200/50", size: "w-[300px] h-[300px]" },
    { color: "bg-indigo-500/60 dark:bg-stone-200/50", size: "w-[450px] h-[450px]" },
    { color: "bg-purple-500/50 dark:bg-gray-200/40", size: "w-[350px] h-[350px]" },
    { color: "bg-pink-500/40 dark:bg-slate-200/30", size: "w-[300px] h-[300px]" },
    { color: "bg-cyan-500/40 dark:bg-zinc-100/30", size: "w-[400px] h-[400px]" },
    { color: "bg-emerald-500/30 dark:bg-neutral-100/20", size: "w-[350px] h-[350px]" },
    { color: "bg-orange-500/30 dark:bg-stone-100/20", size: "w-[250px] h-[250px]" },
  ];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* 1. 배경 블러 뭉치들 */}
      <div className="absolute inset-0 opacity-80 blur-[60px] md:blur-[100px] lg:blur-[140px] dark:opacity-50">
        {blobs.map((blob, i) => (
          <Blob
            key={i}
            isUntangled={isUntangled}
            className={blob.color}
            size={blob.size}
            index={i}
          />
        ))}
      </div>

      {/* Noise Overlay */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-10"
        animate={{ opacity: isUntangled ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-white opacity-25 [filter:url(#noiseFilter)] dark:opacity-20 dark:[filter:url(#noiseFilter2)]" />
      </motion.div>

      {/* 2. 부유하는 기하학적 심볼들 */}
      <FloatingParticles isUntangled={isUntangled} count={60} />

      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.6" 
            stitchTiles="stitch"/>
        </filter>
      </svg>

      <svg className="hidden">
        <filter id="noiseFilter2">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.6" 
            stitchTiles="stitch"/>
        </filter>
      </svg>
    </div>
  );
};

const Blob = ({ isUntangled, className, size, index }: any) => {
  // 각 Blob마다 랜덤한 움직임 경로 생성
  const [randomPath] = useState(() => ({
    x: Array.from({ length: 4 }).map(() => (Math.random() - 0.5) * 600),
    y: Array.from({ length: 4 }).map(() => (Math.random() - 0.5) * 400),
    scale: Array.from({ length: 4 }).map(() => 0.8 + Math.random() * 0.4),
  }));

  // 초기 위치 랜덤 설정
  const [initialPos] = useState(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  return (
    <motion.div
      className={cn("absolute rounded-full mix-blend-multiply dark:mix-blend-screen", className, size)}
      style={{
        left: initialPos.left,
        top: initialPos.top,
        x: "-50%",
        y: "-50%",
      }}
      animate={
        isUntangled
          ? { 
            left: "50%", // 화면 중앙으로 이동
            top: "50%",
            x: "-50%",
            y: "-50%",
            scale: 0,    // 크기 0으로 축소
            opacity: 0,
            rotate: 720, // 회전하며 빨려들어감
          } 
          : {
            x: randomPath.x,
            y: randomPath.y,
            scale: randomPath.scale,
            opacity: 1,
            rotate: [0, 180, 360],
          }
      }
      transition={
        isUntangled
          ? { duration: 0.8, ease: "backIn" } // 빨려들어가는 속도 (backIn으로 텐션감)
          : {
            duration: 10 + index * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }
      }
    />
  );
};

const FloatingParticles = ({ isUntangled, count }: { isUntangled: boolean; count: number }) => {
  const [particles] = useState(() => Array.from({ length: count }));

  return (
    <div className="absolute inset-0 z-0">
      {particles.map((_, i) => (
        <Particle key={i} isUntangled={isUntangled} index={i} />
      ))}
    </div>
  );
};

const Particle = ({ isUntangled, index }: { isUntangled: boolean; index: number }) => {
  const [initialPos] = useState(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  const [initialRotate] = useState(() => Math.random() * 360);

  const [randomMove] = useState(() => ({
    x: (Math.random() - 0.5) * 200,
    y: (Math.random() - 0.5) * 200,
    rotate: (Math.random() - 0.5) * 180,
  }));

  const [glyph] = useState(() => {
    const glyphs = ["+", "×", "•", "○", "·"];
    return glyphs[Math.floor(Math.random() * glyphs.length)];
  });

  return (
    <motion.div
      className="absolute text-foreground/60 select-none dark:text-white/40"
      style={{
        left: initialPos.left,
        top: initialPos.top,
        fontSize: Math.random() * 12 + 8 + "px",
      }}
      animate={
        isUntangled
          ? { 
            left: "50%", 
            top: "50%", 
            scale: 0, 
            opacity: 0, 
          }
          : {
            x: [0, randomMove.x],
            y: [0, randomMove.y],
            rotate: [initialRotate, initialRotate + randomMove.rotate],
            opacity: [0.4, 1, 0.4],
          }
      }
      transition={
        isUntangled
          ? { duration: 0.6, ease: "easeIn", delay: Math.random() * 0.2 }
          : {
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }
      }
    >
      {glyph}
    </motion.div>
  );
};
