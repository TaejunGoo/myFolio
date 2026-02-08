"use client";

import Container from "@/components/layout/header/Container";
import FadeInView from "@/shared/components/motion/FadeInView";

import IntroCard from "./IntroCard";
import ProfileCard from "./ProfileCard";

interface AboutProps {
  projectsCount: number;
  maintenanceCount: number;
}

const About = ({ projectsCount, maintenanceCount }: AboutProps) => {
  return (
    <Container>
      <h2 className="sr-only">소개</h2>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <FadeInView className="lg:basis-2/5" delay={0.1}>
          <IntroCard className="h-full" />
        </FadeInView>
        <FadeInView className="lg:basis-3/5" delay={0.2}>
          <ProfileCard
            className="h-full"
            projectsCount={projectsCount}
            maintenanceCount={maintenanceCount}
          />
        </FadeInView>
      </div>
    </Container>
  );
};
export default About;
