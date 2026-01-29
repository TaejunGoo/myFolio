import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TechBadge from "@/shared/components/tech/TechBadge";
import type { ProjectCardProps } from "@/types";

interface ProjectTableProps {
  projects: ProjectCardProps[];
}

const ProjectTable = ({ projects }: ProjectTableProps) => {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-semibold">이외 프로젝트</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>프로젝트명</TableHead>
            <TableHead>클라이언트</TableHead>
            <TableHead>기간</TableHead>
            <TableHead>스택</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.title}>
              <TableCell className="font-medium">
                {project.projectLink ? (
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </TableCell>
              <TableCell>{project.client}</TableCell>
              <TableCell>
                {project.periodStart}
                {project.periodEnd && ` ~ ${project.periodEnd}`}
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {project.stack.map((tech, techIndex) => (
                    <TechBadge key={tech + techIndex} name={tech} iconOnly />
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
