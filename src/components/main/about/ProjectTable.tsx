import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TechName } from "@/shared/components/tech/tech-config";
import TechBadge from "@/shared/components/tech/TechBadge";

interface ProjectType {
  year: string;
  title: string;
  stack: TechName[];
};
const projects: ProjectType[] = [
  {
    year: "2025",
    title: "CJ 튼튼스쿨 구축",
    stack: ["React", "TypeScript", "Tailwind CSS", "Git", "Figma"],
  },
  {
    year: "2025",
    title: "CJ 대한통운 The Squere 구축",
    stack: ["React", "Styled-Components", "Git", "Figma"],
  },
  {
    year: "2025",
    title: "아워홈 QSIS 고도화",
    stack: ["React", "Ant Design", "Styled-Components", "Git", "Figma"],
  },
  {
    year: "2024",
    title: "JTBC 뉴스 플랫폼 리뉴얼",
    stack: ["Next.js", "TypeScript", "MUI", "Emotion", "Recoil", "Storybook", "Git", "Figma"],
  },
  {
    year: "2023",
    title: "CJ 오클라우드 콘솔 구축",
    stack: ["HTML", "Sass", "jQuery", "Figma"],
  },
  {
    year: "2023",
    title: "KBS Tvut 구축",
    stack: ["HTML", "Sass", "jQuery", "Git", "PhotoShop"],
  },
  {
    year: "2022",
    title: "이랜드몰 리뉴얼",
    stack: ["HTML", "CSS", "jQuery", "Git"],
  },
  {
    year: "2022",
    title: "이랜드그룹 홈페이지 구축",
    stack: ["HTML", "CSS", "jQuery", "PhotoShop"],
  },
];

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
          {projects.map((project) => (
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
