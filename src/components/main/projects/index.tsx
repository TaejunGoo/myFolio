"use client";
import { motion } from "framer-motion";

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
      <FadeInView delay={0.1}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              className="flex h-full w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1,
              }}
            >
              <ProjectCard {...project} className="h-full w-full" />
            </motion.div>
          ))}
        </div>
      </FadeInView>
      <FadeInView>
        {otherProjects.length > 0 && <ProjectTable projects={otherProjects} />}
      </FadeInView>
    </Container>
  );
};
export default Projects;
