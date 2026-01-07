import ProjectSection from "./ProjectSection";

interface ProjectHighlightsProps {
  highlights: string[];
}

const ProjectHighlights = ({ highlights }: ProjectHighlightsProps) => {
  return (
    <ProjectSection title="주요 성과">
      <ul className="space-y-2">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-green-500" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
};

export default ProjectHighlights;
