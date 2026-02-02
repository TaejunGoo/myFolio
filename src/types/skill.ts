/**
 * 개별 스킬 아이템
 */
export type SkillItem = string;

/**
 * 스킬 카테고리 타입
 * - Core: 핵심 역량
 * - Professional: 실무 역량
 */
export type SkillCategoryType = "Core" | "Professional";

/**
 * 스킬 카테고리
 */
export interface SkillCategory {
  id: string;
  title: string;
  type: SkillCategoryType;
  description?: string;
  skills: SkillItem[];
}

/**
 * 전체 스킬 섹션 데이터 구조
 */
export interface SkillsData {
  title: string;
  description?: string;
  categories: SkillCategory[];
}

/**
 * SkillCategory 컴포넌트 Props
 */
export interface SkillCategoryProps {
  category: SkillCategory;
  className?: string;
}

/**
 * SkillsSection 컴포넌트 Props
 */
export interface SkillsSectionProps {
  data?: SkillsData;
  className?: string;
}
