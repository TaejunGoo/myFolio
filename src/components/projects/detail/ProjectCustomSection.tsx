import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CustomSection } from "@/components/main/projects/types";

import ProjectSection from "./ProjectSection";

interface ProjectCustomSectionProps {
  section: CustomSection;
}

const ProjectCustomSection = ({ section }: ProjectCustomSectionProps) => {
  const { title, type, content } = section;

  return (
    <ProjectSection title={title}>
      {type === "text" && typeof content === "string" && (
        <p className="leading-relaxed text-muted-foreground">{content}</p>
      )}

      {type === "list" && Array.isArray(content) && (
        <ul className="space-y-2">
          {content.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {type === "gallery" && Array.isArray(content) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {content.map((url, index) => (
            <AspectRatio key={index} ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
              <Image
                src={url}
                alt={`${title} - ${index + 1}`}
                fill
                className="object-cover"
              />
            </AspectRatio>
          ))}
        </div>
      )}
    </ProjectSection>
  );
};

export default ProjectCustomSection;
