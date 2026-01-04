"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/header/Container";

import IntroCard from "./IntroCard";
import ProfileCard from "./ProfileCard";
import TimelineCard from "./TimelineCard";

const About = () => {
  return (
    <Container>
      <h2 className="sr-only">About</h2>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <IntroCard className="h-full min-w-[0px] flex-1" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ProfileCard className="h-full min-w-[0px] flex-1 lg:flex-2" />
        </motion.div>
      </div>
    </Container>
  );
};
export default About;
