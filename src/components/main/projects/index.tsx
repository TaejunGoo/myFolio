"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/layout/header/Container";
import { Button } from "@/components/ui/button";
import SubTitle from "@/shared/components/typo/SubTitle";

import MaintenanceList from "./MaintenanceList";
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Container>
          <SubTitle title="Projects" desc="대표 프로젝트를 소개합니다." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              {visibleProjects === 3 ? "더 보기" : "줄이기"}
            </Button>
          </div>
        </Container>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Container className="mt-20 mb-40">
          <SubTitle title="Maintenance" desc="현재 유지보수 중인 프로젝트입니다." />
          {/* 유지보수 프로젝트 리스트 */}
          <MaintenanceList />
        </Container>
      </motion.div>
    </>
  );
};
export default Projects;
