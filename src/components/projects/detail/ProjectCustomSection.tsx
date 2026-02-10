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
    // 빈 문자열인 경우 렌더링하지 않음
    if (!part) return null;

    // URL인 경우
    if (part.match(urlPattern)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary inline-flex max-w-full items-center gap-1 underline-offset-4 hover:underline"
        >
          <ExternalLink className="size-4 shrink-0" />
          <span className="truncate">{part}</span>
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
        <p className="text-muted-foreground leading-relaxed">{content}</p>
      )}

      {type === "list" && Array.isArray(content) && (
        <ul className="space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-muted-foreground flex items-start gap-2">
              <span className="bg-primary mt-[0.6rem] size-1.5 shrink-0 rounded-full" />
              <span className="min-w-0 leading-relaxed">{parseTextWithLinks(item)}</span>
            </li>
          ))}
        </ul>
      )}

      {type === "gallery" && Array.isArray(content) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {content.map((url, index) => (
            <AspectRatio key={index} ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg">
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
