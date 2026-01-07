import { ProjectDetailData } from "@/components/main/projects/types";

export const projectDetailData: ProjectDetailData[] = [
  {
    slug: "jtbc-news-renewal",
    title: "JTBC 뉴스 플랫폼 구축",
    projectLink: "https://news.jtbc.co.kr/",
    imageUrlAry: ["/images/projects/jtbc_01.png"],
    category: "Media",
    client: "JTBC",
    description: "JTBC 뉴스 플랫폼 리빌딩을 위한 Next.js 및 MUI 기반의 반응형 UI 컴포넌트 개발, Storybook 구축",
    periodStart: "2024-01",
    periodEnd: "2024-12",
    stack: ["Next.js", "TypeScript", "MUI", "Recoil", "Emotion", "Storybook", "반응형", "Git", "Figma", "GitHub Copilot"],
    overview: "JTBC 뉴스 플랫폼의 전면 리빌딩 프로젝트에 참여하여, 기존 레거시 시스템을 Next.js 기반의 현대적인 웹 애플리케이션으로 전환하는 작업을 수행했습니다. 뉴스 콘텐츠의 특성을 고려한 SEO 최적화와 빠른 페이지 로딩 속도를 목표로 개발을 진행했습니다.",
    role: [
      "MUI 기반 공통 UI 컴포넌트 라이브러리 설계 및 개발",
      "Storybook을 활용한 컴포넌트 문서화 및 테스트 환경 구축",
      "반응형 레이아웃 시스템 구현 (Desktop, Tablet, Mobile)",
      "Recoil을 활용한 클라이언트 상태 관리 구조 설계",
    ],
    highlights: [
      "50개 이상의 재사용 가능한 UI 컴포넌트 개발",
      "Storybook 기반 컴포넌트 문서화로 팀 협업 효율성 향상",
      "Core Web Vitals 기준 충족하는 성능 최적화 달성",
    ],
    customSections: [
      {
        title: "기술적 도전",
        type: "list",
        content: [
          "대용량 뉴스 데이터의 효율적인 렌더링을 위한 가상화 기법 적용",
          "다양한 광고 포맷 지원을 위한 유연한 레이아웃 시스템 설계",
          "실시간 속보 알림 기능 구현을 위한 WebSocket 연동",
        ],
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): ProjectDetailData | undefined => {
  return projectDetailData.find((project) => project.slug === slug);
};
