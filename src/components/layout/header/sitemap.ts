export interface siteMapType {
  href: string;
  label: string;
};

// 메인 페이지용 섹션 네비게이션
export const mainSitemap: siteMapType[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#maintenance", label: "Maintenance" },
];

// 프로젝트 상세 페이지용 네비게이션
export const detailSitemap: siteMapType[] = [
  { href: "/", label: "← Back to Home" },
];

// 기본 export (하위 호환)
export const sitemap = mainSitemap;
