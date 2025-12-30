import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TechName } from "@/shared/components/tech/tech-config";
import TechBadge from "@/shared/components/tech/TechBadge";

import { projectsTableData } from "./projectsTableData";

export interface ProjectType {
  year: string;
  title: string;
  stack: TechName[];
};

const ProjectTable = () => {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Year</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Stack</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projectsTableData.map((project) => (
            <TableRow key={project.title}>
              <TableCell className="font-medium">{project.year}</TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell className="text-muted-foreground">
                <div className="flex justify-start gap-1">
                  {project.stack.map((tech) => (
                    <div key={tech} >
                      <TechBadge name={tech} className="hidden md:inline-flex"  />
                      <TechBadge name={tech} iconOnly className="md:hidden"  />
                    </div>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectTable;
