import type { TechName } from "@/shared/components/tech/tech-config";

export type StackItem = TechName | (string & {});

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrlAry?: string[];
  projectLink?: string;
  slug?: string;
  periodStart: string;
  periodEnd?: string;
  stack: StackItem[];
  client: string;
  className?: string;
}

export interface CustomSection {
  title: string;
  type: "text" | "list" | "gallery";
  content: string | string[];
}

export interface ProjectDetailData extends Omit<ProjectCardProps, "className"> {
  slug: string; // 상세 페이지에서는 필수
  overview: string;
  role: string[];
  highlights?: string[];
  challenges?: string[];
  customSections?: CustomSection[];
}
