"use client";

import Container from "@/components/layout/header/Container";
import FadeInView from "@/shared/components/motion/FadeInView";
import SubTitle from "@/shared/components/typo/SubTitle";
import type { MaintenanceItemProps } from "@/types";

import MaintenanceList from "./MaintenanceList";

interface MaintenanceProps {
  items: MaintenanceItemProps[];
}

const Maintenance = ({ items }: MaintenanceProps) => {
  return (
    <FadeInView delay={0.3}>
      <Container>
        <SubTitle title="운영 및 유지보수" desc="Service Operations" />
        <MaintenanceList items={items} />
      </Container>
    </FadeInView>
  );
};

export default Maintenance;
