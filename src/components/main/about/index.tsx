"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/header/Container";

import IntroCard from "./IntroCard";
import ProfileCard from "./ProfileCard";

const About = () => {
  return (
    <Container>
      <h2 className="sr-only">About</h2>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <motion.div
          className="lg:basis-2/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <IntroCard className="h-full" />
        </motion.div>
        <motion.div
          className="lg:basis-3/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <ProfileCard className="h-full" />
        </motion.div>
      </div>
    </Container>
  );
};
export default About;
