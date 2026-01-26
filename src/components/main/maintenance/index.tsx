"use client";

import Container from "@/components/layout/header/Container";
import FadeInView from "@/shared/components/motion/FadeInView";
import SubTitle from "@/shared/components/typo/SubTitle";

import MaintenanceList from "./MaintenanceList";

const Maintenance = () => {
  return (
    <FadeInView delay={0.3}>
      <Container>
        <SubTitle title="운영 및 유지보수" desc="Service Operations & Continuous Maintenance" />
        <MaintenanceList />
      </Container>
    </FadeInView>
  );
};

export default Maintenance;
