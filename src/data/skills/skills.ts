import type { SkillsData } from "@/types";

/**
 * Skills 섹션 데이터
 *
 * 구조:
 * 1. Core (핵심 역량) - 8개 항목
 * 2. Data & UX - 7개 항목
 * 3. Tech Stack - 3개 세부 카테고리
 *    - Frontend Development
 *    - Tools & Collaboration
 *    - Others
 */
export const skillsData: SkillsData = {
  title: "역량",
  description: "Skills & Stack",
  categories: [
    {
      id: "core",
      title: "Core",
      type: "Core",
      description: "핵심 역량",
      skills: [
        "서비스 기획 & 정책 설계",
        "사용자 시나리오 작성",
        "예외 케이스 정의 및 처리",
        "와이어프레임 & 프로토타입 제작",
        "요구사항 정의서(PRD) 작성",
        "크로스 브라우징 & 반응형 대응",
        "UI/UX 개선안 도출",
        "협업 프로세스 설계 및 문서화",
      ],
    },
    {
      id: "data-ux",
      title: "Data & UX",
      type: "Data & UX",
      description: "데이터 및 사용자 경험",
      skills: [
        "GA4 이벤트 설계 및 분석",
        "사용자 행동 데이터 분석",
        "VOC(고객 의견) 수집 및 분석",
        "A/B 테스트 설계 및 검증",
        "전환율(CVR) 개선",
        "퍼널 분석 및 이탈 구간 파악",
        "사용자 테스트 기획 및 진행",
      ],
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      type: "Tech Stack",
      description: "기술 스택",
      subCategories: [
        {
          id: "frontend",
          title: "Frontend Development",
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Vue.js",
            "HTML",
            "CSS",
            "Sass",
            "Tailwind CSS",
            "Styled-Components",
            "Emotion",
            "MUI",
            "Shadcn UI",
            "Ant Design",
            "jQuery",
          ],
        },
        {
          id: "tools",
          title: "Tools & Collaboration",
          skills: [
            "Git",
            "Figma",
            "Photoshop",
            "Storybook",
            "Claude Code",
            "GitHub Copilot",
          ],
        },
        {
          id: "others",
          title: "Others",
          skills: [
            "반응형",
            "다국어",
            "Recoil",
          ],
        },
      ],
    },
  ],
};
