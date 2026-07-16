import Container from "@/components/layout/header/Container";

import ChatCTA from "./ChatCTA";
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
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
          <div className="lg:basis-2/5">
            <IntroCard className="h-full" />
          </div>
          <div className="lg:basis-3/5">
            <ProfileCard
              className="h-full"
              projectsCount={projectsCount}
              maintenanceCount={maintenanceCount}
            />
          </div>
        </div>
        <ChatCTA />
      </div>
    </Container>
  );
};
export default About;
