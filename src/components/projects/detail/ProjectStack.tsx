import TechBadge from "@/shared/components/tech/TechBadge";
import type { StackItem } from "@/types";

import ProjectSection from "./ProjectSection";

interface ProjectStackProps {
  stack: StackItem[];
}

const ProjectStack = ({ stack }: ProjectStackProps) => {
  return (
    <ProjectSection title="기술 스택">
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </ProjectSection>
  );
};

export default ProjectStack;
