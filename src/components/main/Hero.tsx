"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import UnscrambleText from "./UnscrambleText";
import UntangleLine from "./UntangleLine";
import { Button } from "../ui/button";

const Hero = () => {
  const [isUntangled, setIsUntangled] = useState(false);

  const handleUntangle = () => {
    setIsUntangled(true);
  };

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background md:justify-start md:pl-20">
      {/* 배경 장식 요소 (선) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 md:pointer-events-auto md:right-[15%] md:left-auto md:w-auto md:opacity-100">
        <div className="h-[80vh] w-[120px] md:h-[600px] md:w-[150px]">
          <UntangleLine 
            duration={2.5} 
            tangleStart={0.1} 
            tangleEnd={0.9} 
            direction="vertical" 
            isUntangled={isUntangled} 
            color="currentColor"
            className="text-primary/80"
            height="100%"
          />
        </div>
      </div>

      <div className="z-10 flex flex-col items-center gap-8 px-4 text-center md:items-start md:text-left">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-8xl">
            <UnscrambleText
              text={isUntangled ? "Clarity Found." : "Untangle Chaos."}
              duration={1000}
              delay={100}
            />
          </h1>
          <motion.p 
            className="max-w-[600px] text-lg font-light text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {isUntangled 
              ? "풀기 전 문장." 
              : "풀어 낸 후 문장"}
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
            {isUntangled ? "Resolved ✨" : "Untangle It"}
          </Button>
          <Button size="lg" variant="outline" className="h-12 rounded-full text-lg">
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
