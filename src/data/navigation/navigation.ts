// ========================================
// 사이트 내비게이션 데이터
// ========================================

export interface NavigationItem {
  href: string;
  label: string;
}

/** 메인 페이지 섹션 네비게이션 */
export const mainNavigation: NavigationItem[] = [
  { href: "#chat", label: "Chat" },
  { href: "#about", label: "소개" },
  { href: "#projects", label: "프로젝트" },
  { href: "#maintenance", label: "운영·유지보수" },
  { href: "#skills", label: "역량" },
];

/** 프로젝트 상세 페이지 네비게이션 */
export const detailNavigation: NavigationItem[] = [
  { href: "/", label: "← Back to Home" },
];
