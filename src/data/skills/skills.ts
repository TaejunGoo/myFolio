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
        "프론트엔드 환경 설계 및 신기술 도입",
        "비개발 직군과의 기술적 한계 조율",
        "UI/UX 문제 분석 및 트러블슈팅",
        "사내 기술 지식 공유 및 문서화",
        "레거시 환경의 점진적 모던화",
        "AI 코딩 도구를 활용한 생산성 향상",
      ],
    },
  ],
};
