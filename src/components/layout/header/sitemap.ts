import { mainNavigation, detailNavigation } from "@/data/navigation";
import type { NavigationItem } from "@/data/navigation";

// 하위 호환을 위한 타입 re-export
export type SitemapType = NavigationItem;

// 메인 페이지용 섹션 네비게이션
export const mainSitemap = mainNavigation;

// 프로젝트 상세 페이지용 네비게이션
export const detailSitemap = detailNavigation;

// 기본 export (하위 호환)
export const sitemap = mainSitemap;
