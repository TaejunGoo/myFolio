import { ReactNode } from "react";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
}

const ProjectSection = ({ title, children }: ProjectSectionProps) => {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default ProjectSection;
