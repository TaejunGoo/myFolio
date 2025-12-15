"use client";

import { useState } from "react";

import UnscrambleText from "./UnscrambleText";
import UntangleLine from "./UntangleLine";
import { Button } from "../ui/button";

const Hero = () => {
  const [isUntangled, setIsUntangled] = useState(false);
  return (
    <section className="relative flex h-screen w-full items-center justify-center bg-background">
      <div className="absolute inset-0 left-[50%] flex items-center text-foreground md:left-[70%]">
        <UntangleLine duration={0.5} tangleStart={0.3} tangleEnd={0.8} direction="vertical" isUntangled={isUntangled} />
      </div>
      <div className="z-10 flex flex-col items-start justify-center gap-6 px-4 text-left">
        <h1 className="
          text-4xl font-bold text-foreground
          md:text-7xl
        ">
          <UnscrambleText
            text="Test Text"
            duration={400}
            delay={500}
          />
        </h1>
        <p className="text-md w-1/2 text-muted-foreground md:text-lg"><span className="font-medium text-foreground">Lorem ipsum</span> dolor sit, amet consectetur adipisicing elit. Voluptates, voluptatem fugit repudiandae vitae laboriosam ad labore consectetur.</p>
        <div className="flex gap-2">
          <Button onClick={() => setIsUntangled(true)}>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
