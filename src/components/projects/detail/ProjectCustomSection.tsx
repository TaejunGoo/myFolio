import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { CustomSection } from "@/types";

import ProjectSection from "./ProjectSection";

interface ProjectCustomSectionProps {
  section: CustomSection;
}

// URL을 파싱하고 링크로 변환하는 헬퍼 함수
const parseTextWithLinks = (text: string) => {
  // URL 패턴 정규식
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlPattern);

  return parts.map((part, index) => {
    // URL인 경우
    if (part.match(urlPattern)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
        >
          <ExternalLink className="size-4" />
          <span>{part}</span>
        </a>
      );
    }
    // 일반 텍스트인 경우
    return <span key={index}>{part}</span>;
  });
};

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
              <span className="leading-relaxed">{parseTextWithLinks(item)}</span>
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
