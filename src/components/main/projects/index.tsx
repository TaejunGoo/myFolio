"use client";
import Container from "@/components/layout/header/Container";
import FadeInView from "@/shared/components/motion/FadeInView";
import SubTitle from "@/shared/components/typo/SubTitle";
import type { ProjectCardProps } from "@/types";

import ProjectCard from "./ProjectCard";
import ProjectTable from "./ProjectTable";

interface ProjectsProps {
  featuredProjects: ProjectCardProps[];
  otherProjects: ProjectCardProps[];
}

const Projects = ({ featuredProjects, otherProjects }: ProjectsProps) => {
  return (
    <Container>
      <FadeInView>
        <SubTitle title="프로젝트" desc="Selected Works & Project Archive" />
      </FadeInView>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <FadeInView
            key={project.slug}
            delay={index * 0.1}
            className="flex size-full"
          >
            <ProjectCard {...project} className="size-full" />
          </FadeInView>
        ))}
      </div>

      <FadeInView>
        {otherProjects.length > 0 && <ProjectTable projects={otherProjects} />}
      </FadeInView>
    </Container>
  );
};
export default Projects;
