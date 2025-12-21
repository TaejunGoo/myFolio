import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/shared/utils";

import ProjectTable from "./ProjectTable";

interface TimelineCardProps {
  className?: string;
}
const TimelineCard = ({ className }: TimelineCardProps) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>최근 주요 프로젝트 이력</CardTitle>
      </CardHeader>
      <CardContent>
        <ProjectTable />
      </CardContent>
    </Card>
  );
};

export default TimelineCard;
