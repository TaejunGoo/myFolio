"use client";

import FadeInView from "@/shared/components/motion/FadeInView";

import { maintenanceData } from "./maintenanceData";
import MaintenanceItem from "./MaintenanceItem";

const MaintenanceList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {maintenanceData.map((item, index) => (
        <FadeInView key={item.name + index} delay={index * 0.05}>
          <MaintenanceItem {...item} />
        </FadeInView>
      ))}
    </div>
  );
};

export default MaintenanceList;
