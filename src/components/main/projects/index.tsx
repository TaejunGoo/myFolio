"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/layout/header/Container";
import { Button } from "@/components/ui/button";
import SubTitle from "@/shared/components/typo/SubTitle";

import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const maxVisibleProjects = projectsData.length;
  const toggleProjects = () => {
    if (visibleProjects === 3) {
      setVisibleProjects(maxVisibleProjects);
    } else {
      setVisibleProjects(3);
    }
  };
  const remainingProjects = maxVisibleProjects - visibleProjects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Container>
        <SubTitle title="프로젝트" desc="Selected Works & Project Archive" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {
              projectsData.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={project.title + index}
                  className="size-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  // transition={{ duration: 0.4 }}
                >
                  <ProjectCard {...project} className="size-full" />
                </motion.div>
              ))
            }
          </AnimatePresence>
        </div>
        <div className="flex justify-center">
          <Button variant={"outline"} className="mt-4" size={"lg"} onClick={toggleProjects}>
            {visibleProjects === 3 ? `더 보기 (${remainingProjects})` : "닫기"}
          </Button>
        </div>
      </Container>
    </motion.div>
  );
};
export default Projects;
