import ProjectSection from "./ProjectSection";

interface ProjectRoleProps {
  role: string[];
}

const ProjectRole = ({ role }: ProjectRoleProps) => {
  return (
    <ProjectSection title="담당 역할">
      <ul className="space-y-2">
        {role.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
};

export default ProjectRole;
