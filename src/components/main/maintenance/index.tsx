"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/header/Container";
import SubTitle from "@/shared/components/typo/SubTitle";

import MaintenanceList from "../projects/MaintenanceList";

const Maintenance = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Container>
        <SubTitle title="Maintenance" desc="운영 및 유지보수 중인 프로젝트입니다." />
        <MaintenanceList />
      </Container>
    </motion.div>
  );
};

export default Maintenance;
