import ProjectSection from "./ProjectSection";

interface ProjectHighlightsProps {
  highlights: string[];
}

const ProjectHighlights = ({ highlights }: ProjectHighlightsProps) => {
  return (
    <ProjectSection title="주요 성과">
      <ul className="space-y-2">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground md:text-base">
            <span className="mt-[7px] size-1 shrink-0 rounded-full bg-green-500 md:mt-[9px] md:size-1.5" />
            <span className="leading-normal">{item}</span>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
};

export default ProjectHighlights;
