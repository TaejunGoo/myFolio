// ========================================
// 사이트 내비게이션 데이터
// ========================================

export interface NavigationItem {
  href: string;
  label: string;
}

/** 메인 페이지 섹션 네비게이션 */
export const mainNavigation: NavigationItem[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#maintenance", label: "Maintenance" },
  { href: "#skills", label: "Skills" },
];

/** 프로젝트 상세 페이지 네비게이션 */
export const detailNavigation: NavigationItem[] = [
  { href: "/", label: "← Back to Home" },
];
