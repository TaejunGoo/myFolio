"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { GradientBlobs } from "./GradientBlobs";
import UnscrambleText from "./UnscrambleText";
import { Button } from "../ui/button";

const Hero = () => {
  const [isUntangled, setIsUntangled] = useState(false);

  const handleUntangle = () => {
    setIsUntangled(true);
    
    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight * 1.3,
        behavior: "smooth",
      });
    }, 1200);
  };

  return (
    <section className="relative h-[130vh] w-full overflow-hidden bg-background">
      {/* 배경: 그라데이션 노이즈 뭉치 효과 (하단 페이드 아웃 마스크 적용) */}
      <GradientBlobs 
        isUntangled={isUntangled} 
        className="[mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
      />

      <div className="relative z-10 flex h-screen w-full items-center justify-center px-4 md:justify-start md:pl-20">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-8 text-center md:items-start md:text-left">
          <div className="w-full space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-8xl">
              <UnscrambleText
                text={isUntangled ? "Essence Revealed." : "Clear the Noise."}
                duration={1000}
                delay={100}
              />
            </h1>
              
            <motion.p 
              className="max-w-[600px] text-lg font-light text-foreground/80 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {isUntangled 
                ? "On Message" 
                : "Off Message"}
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              size="lg" 
              onClick={handleUntangle}
              className="h-12 min-w-[160px] rounded-full text-lg transition-all duration-500"
              disabled={isUntangled}
              variant={isUntangled ? "secondary" : "default"}
            >
              {isUntangled ? "Clear ✨" : "Clear Noise"}
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full text-lg">
              View Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
