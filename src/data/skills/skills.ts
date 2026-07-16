import type { SkillsData } from "@/types";

/**
 * Skills 섹션 데이터
 *
 * 구조:
 * 1. Core (핵심 역량)
 * 2. Professional (실무 역량)
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
        "재사용 가능한 UI 컴포넌트 설계",
        "다양한 해상도 및 반응형 웹 대응",
        "브라우저 예외 상황(Edge-case) 해결",
        "스타일링 아키텍처 구축 (Sass, Tailwind)",
        "자연스러운 UI 애니메이션 및 인터랙션",
        "웹 표준 및 시맨틱 마크업 준수",
        "확장성 있는 디자인 토큰 시스템 적용",
      ],
    },
    {
      id: "professional",
      title: "Professional Skills",
      type: "Professional",
      description: "실무 역량",
      skills: [
        "필요한 기술 도입 및 작업 방식 개선",
        "비개발 직군과의 기술적 한계 조율",
        "프로젝트 단위의 주도적 UI 구현 및 완결",
        "사내 기술 지식 공유 및 문서화",
        "HTML·jQuery부터 React·Next.js까지 기술 환경 대응",
        "AI 코딩 도구를 활용한 생산성 향상",
      ],
    },
  ],
};
