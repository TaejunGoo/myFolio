import ProjectSection from "./ProjectSection";

interface ProjectOverviewProps {
  overview: string;
}

const ProjectOverview = ({ overview }: ProjectOverviewProps) => {
  return (
    <ProjectSection title="개요">
      <p className="text-sm leading-normal text-muted-foreground md:text-base">{overview}</p>
    </ProjectSection>
  );
};

export default ProjectOverview;
