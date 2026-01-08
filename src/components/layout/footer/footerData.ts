import { mainSitemap } from "../header/sitemap";

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

// 메인 섹션 링크 (헤더의 sitemap 재사용)
export const footerNavLinks = mainSitemap;

// Footer에 표시할 추가 정보
export const footerInfo = {
  authorName: "Your Name",
  authorRole: "Frontend Developer",
  description: "Building beautiful and functional web experiences.",
  copyright: `© ${new Date().getFullYear()} Your Name. All rights reserved.`,
  madeWith: "Made with Next.js & TypeScript",
};
