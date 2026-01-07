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
          className="lg:basis-2/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <IntroCard className="h-full" />
        </motion.div>
        <motion.div
          className="lg:basis-1/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ProfileCard className="h-full" />
        </motion.div>
      </div>
    </Container>
  );
};
export default About;
