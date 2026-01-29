"use client";

import FadeInView from "@/shared/components/motion/FadeInView";
import type { MaintenanceItemProps } from "@/types";

import MaintenanceItem from "./MaintenanceItem";

interface MaintenanceListProps {
  items: MaintenanceItemProps[];
}

const MaintenanceList = ({ items }: MaintenanceListProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {items.map((item, index) => (
        <FadeInView key={item.name} delay={index * 0.05}>
          <MaintenanceItem {...item} />
        </FadeInView>
      ))}
    </div>
  );
};

export default MaintenanceList;
