"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/layout/header/Container";
import { Button } from "@/components/ui/button";
import FadeInView from "@/shared/components/motion/FadeInView";
import SubTitle from "@/shared/components/typo/SubTitle";

import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";
import ProjectTable from "./ProjectTable";

const Projects = () => {
  // slug가 있는 프로젝트와 없는 프로젝트 분리
  const featuredProjects = projectsData.filter((project) => project.slug);
  const otherProjects = projectsData.filter((project) => !project.slug);

  const [visibleProjects, setVisibleProjects] = useState(3);
  const maxVisibleProjects = featuredProjects.length;
  const toggleProjects = () => {
    if (visibleProjects === 3) {
      setVisibleProjects(maxVisibleProjects);
    } else {
      setVisibleProjects(3);
    }
  };
  const remainingProjects = maxVisibleProjects - visibleProjects;

  return (
    <Container>
      <FadeInView>
        <SubTitle title="프로젝트" desc="Selected Works & Project Archive" />
      </FadeInView>
      <FadeInView delay={0.1}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {featuredProjects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.title + index}
                className="size-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <ProjectCard {...project} className="size-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {featuredProjects.length > 3 && (
          <div className="flex justify-center">
            <Button variant={"outline"} className="mt-6" size={"lg"} onClick={toggleProjects}>
              {visibleProjects === 3 ? `더 보기 (${remainingProjects})` : "닫기"}
            </Button>
          </div>
        )}
      </FadeInView>
      <FadeInView>
        {otherProjects.length > 0 && <ProjectTable projects={otherProjects} />}
      </FadeInView>
    </Container>
  );
};
export default Projects;
