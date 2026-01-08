"use client";

import { motion } from "framer-motion";

import { maintenanceData } from "./maintenanceData";
import MaintenanceItem from "./MaintenanceItem";

const MaintenanceList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {
        maintenanceData.map((item, index) => (
          <motion.div
            key={item.name + index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <MaintenanceItem {...item} />
          </motion.div>
        ))
      }
    </div>
  );
};

export default MaintenanceList;
