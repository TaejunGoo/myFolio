import ProjectSection from "./ProjectSection";

interface ProjectRoleProps {
  role: string[];
}

const ProjectRole = ({ role }: ProjectRoleProps) => {
  return (
    <ProjectSection title="담당 역할">
      <ul className="space-y-2">
        {role.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground md:text-base">
            <span className="mt-[7px] size-1 shrink-0 rounded-full bg-primary md:mt-[9px] md:size-1.5" />
            <span className="leading-normal">{item}</span>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
};

export default ProjectRole;
