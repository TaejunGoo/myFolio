import type { SkillsData } from "@/types";

/**
 * Skills 섹션 데이터
 *
 * 구조:
 * 1. Core (핵심 역량) - 8개 항목
 * 2. Data & UX - 7개 항목
 *
 * Note: Tech Stack은 About 섹션에서 표시됨
 */
export const skillsData: SkillsData = {
  title: "역량",
  description: "Skills",
  categories: [
    {
      id: "core",
      title: "Core Skills",
      type: "Core",
      description: "핵심 기술 역량",
      skills: [
        "재사용 가능한 UI 컴포넌트 설계 및 개발",
        "반응형 웹 & 모바일 최적화",
        "크로스 브라우저 이슈 해결",
        "스타일링 시스템 구축 (SASS, Tailwind CSS, CSS-in-JS)",
        "애니메이션 & 인터랙션 구현",
        "웹 접근성 및 시맨틱 마크업",
        "디자인 시스템 구축",
      ],
    },
    {
      id: "professional",
      title: "Professional Skills",
      type: "Professional",
      description: "실무 역량",
      skills: [
        "기술 스택 선정 및 아키텍처 설계",
        "디자이너-개발자 협업 및 커뮤니케이션",
        "UI/UX 문제 해결 및 최적화",
        "기술 도입 및 팀 내 지식 공유",
        "프로젝트 기술 리딩",
        "레거시 코드 유지보수 및 개선",
      ],
    },
  ],
};
