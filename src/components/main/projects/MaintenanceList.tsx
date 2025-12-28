import { maintenanceData } from "./maintenanceData";
import MaintenanceItem from "./MaintenanceItem";

const MaintenanceList = () => {
  return (
    <div className="grid grid-cols-3 place-items-center gap-6 sm:grid-cols-4 md:grid-cols-6">
      {
        maintenanceData.map((item, index) => (
          <div key={item.name + index}>
            <MaintenanceItem {...item} />
          </div>
        ))
      }
    </div>
  );
};

export default MaintenanceList;
