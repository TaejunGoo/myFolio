import { TechName } from "@/shared/components/tech/tech-config";

/**
 * 개별 스킬 아이템
 * - TechName에 정의된 기술이거나 일반 문자열
 */
export type SkillItem = TechName | (string & {});

/**
 * 스킬 카테고리 타입
 * - Core: 핵심 역량
 * - Data & UX: 데이터 및 UX 관련 역량
 * - Tech Stack: 기술 스택 (세부 카테고리 포함)
 */
export type SkillCategoryType = "Core" | "Data & UX" | "Tech Stack";

/**
 * 기본 스킬 카테고리 인터페이스
 */
export interface BaseSkillCategory {
  id: string;
  title: string;
  type: SkillCategoryType;
  description?: string;
}

/**
 * 단순 스킬 카테고리 (Core, Data & UX)
 * - 스킬 목록만 포함
 */
export interface SimpleSkillCategory extends BaseSkillCategory {
  type: "Core" | "Data & UX";
  skills: SkillItem[];
}

/**
 * Tech Stack 하위 카테고리
 */
export interface TechStackSubCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

/**
 * Tech Stack 카테고리 (세부 카테고리 포함)
 * - subCategories를 통해 Frontend, Tools, Others 등으로 구분
 */
export interface TechStackCategory extends BaseSkillCategory {
  type: "Tech Stack";
  subCategories: TechStackSubCategory[];
}

/**
 * 통합 스킬 카테고리 타입
 */
export type SkillCategory = SimpleSkillCategory | TechStackCategory;

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
