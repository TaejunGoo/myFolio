import { mainSitemap } from "@/components/layout/header/sitemap";

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

// 메인 섹션 링크 (헤더의 sitemap 재사용)
export const footerNavLinks = mainSitemap;
