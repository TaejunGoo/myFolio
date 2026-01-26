"use client";

import Container from "@/components/layout/header/Container";
import FadeInView from "@/shared/components/motion/FadeInView";

import IntroCard from "./IntroCard";
import ProfileCard from "./ProfileCard";

const About = () => {
  return (
    <Container>
      <h2 className="sr-only">About</h2>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <FadeInView className="lg:basis-2/5" delay={0.1}>
          <IntroCard className="h-full" />
        </FadeInView>
        <FadeInView className="lg:basis-3/5" delay={0.2}>
          <ProfileCard className="h-full" />
        </FadeInView>
      </div>
    </Container>
  );
};
export default About;
