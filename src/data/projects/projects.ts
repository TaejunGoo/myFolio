import { PROJECT_SLUGS } from "@/constants/projectSlugs";
import type { ProjectCardProps } from "@/types";

export const projectsData: ProjectCardProps[] = [
  {
    title: "CJ 식자재 쇼핑몰 고도화",
    category: "eCommerce",
    client: "CJ프레시웨이",
    description:
      "식당 등 B2B 대상 식자재 플랫폼인 CJ 프레시엔의 PC 화면 추가를 위한 React 기반 UI 컴포넌트 개발",
    periodStart: "2025-02",
    stack: ["React", "Sass"],
  },
  {
    title: "JTBC 뉴스 플랫폼 구축",
    projectLink: "https://news.jtbc.co.kr/",
    slug: PROJECT_SLUGS.JTBC_NEWS_RENEWAL,
    category: "Media",
    client: "JTBC",
    description:
      "JTBC 뉴스 플랫폼 리빌딩을 위한 Next.js 및 MUI 기반의 반응형 UI 컴포넌트 개발, Storybook 구축",
    periodStart: "2024-01",
    periodEnd: "2024-12",
    stack: ["Next.js", "TypeScript", "MUI", "Recoil", "Emotion", "Storybook", "Framer Motion", "반응형"],
    imageUrlAry: ["/images/projects/jtbc_1.webp", "/images/projects/jtbc_2.webp"],
  },
  {
    title: "바이브 코딩 토이 프로젝트",
    slug: PROJECT_SLUGS.VIBE_CODING_PROJECTS,
    category: "Personal",
    client: "Personal",
    description:
      "실용적인 문제 해결에 집중한 토이 프로젝트 모음. 네이버 스마트스토어 교집합 검색기와 부동산 가격 트렌드 크롤러 및 대시보드 개발",
    periodStart: "2026-01",
    periodEnd: "2026-02",
    stack: ["Claude Code", "GitHub Copilot"],
    imageUrlAry: ["/images/projects/vibe_1.webp"],
  },
  {
    title: "CJ 식자재 B2B eCommerce 구축",
    projectLink: "https://www.cjschoolfood.com/",
    slug: PROJECT_SLUGS.CJ_SCHOOLFOOD,
    category: "eCommerce",
    client: "CJ프레시웨이",
    description:
      "학교 등 교육기관 대상 식자재 B2B 플랫폼 신규 구축, React/TypeScript 기반 반응형 UI 개발",
    periodStart: "2025-06",
    periodEnd: "2025-08",
    stack: ["React", "TypeScript", "Tailwind CSS", "Styled-Components", "Headless UI", "반응형"],
    imageUrlAry: ["/images/projects/school_1.webp"],
  },
  {
    title: "CJ 대한통운 임직원 커뮤니티 구축",
    category: "Community",
    slug: PROJECT_SLUGS.CJ_THE_SQUARE,
    client: "CJ대한통운",
    description:
      "대한통운 임직원을 위한 사내 커뮤니티 플랫폼 신규 구축, React/TypeScript 기반 모바일 최적화 UI 개발",
    periodStart: "2025-03",
    periodEnd: "2025-06",
    stack: ["React", "TypeScript", "Tailwind CSS", "Styled-Components", "모바일"],
    imageUrlAry: ["/images/projects/cjthesquare_1.webp", "/images/projects/cjthesquare_2.webp"],
  },
  {
    title: "아워홈 품질관리시스템 고도화",
    category: "Service",
    client: "아워홈",
    description:
      "React 기반 어드민 웹사이트인 아워홈 품질관리시스템(QSIS) 고도화를 위한 기존 페이지 리뉴얼 수행",
    periodStart: "2025-02",
    periodEnd: "2025-04",
    stack: ["React", "Ant Design", "Styled-Components"],
  },
  {
    title: "CJ 맥소노미 홈페이지 구축",
    projectLink: "https://maxonomy.net/",
    slug: PROJECT_SLUGS.CJ_MAXONOMY,
    category: "Brand",
    client: "CJ 올리브네트웍스",
    description:
      "CJ 올리브네트웍스의 디지털 마케팅 솔루션 팀 홈페이지 구축 프로젝트에서 고객 및 외주 개발사 간 기술 조율 및 UI QA 담당",
    periodStart: "2025-01",
    periodEnd: "2025-02",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "반응형"],
    imageUrlAry: ["/images/projects/maxonomy_1.webp"],
  },
  {
    title: "CJ 오클라우드 관리 플랫폼 구축",
    category: "Service",
    client: "CJ",
    description:
      "CJ 오클라우드 관리 콘솔의 웹 인터페이스 구축 및 jQuery를 활용한 동적 인터랙션 구현",
    periodStart: "2023-08",
    periodEnd: "2024-01",
    stack: ["HTML", "CSS", "jQuery"],
  },
  {
    title: "KBS 방송 참여 플랫폼 구축",
    projectLink: "https://new-tvut.kbs.co.kr/",
    slug: PROJECT_SLUGS.KBS_TVUT,
    category: "Media",
    client: "KBS",
    description:
      "KBS 방송 참여 플랫폼 신규 구축, HTML/SASS 기반 모바일 최적화 UI 개발 및 SASS 도입 주도",
    periodStart: "2023-01",
    periodEnd: "2023-07",
    stack: ["HTML", "CSS", "Sass", "jQuery", "모바일"],
    imageUrlAry: ["/images/projects/tvut_1.webp"],
  },
  {
    title: "투비소프트 홈페이지 구축",
    projectLink: "https://www.tobesoft.com/",
    category: "Brand",
    client: "투비소프트",
    description:
      "투비소프트 공식 홈페이지의 반응형 웹 UI 구현 및 jQuery 기반의 동적 기능 개발 지원",
    periodStart: "2022-10",
    periodEnd: "2022-12",
    stack: ["HTML", "CSS", "jQuery", "반응형"],
  },
  {
    title: "아이봇로지스 홈페이지 구축",
    projectLink: "https://aibotlogis.com/",
    category: "Brand",
    client: "아이봇로지스",
    description:
      "아이봇로지스 홈페이지 구축을 위한 HTML/CSS 기반 퍼블리싱 및 jQuery 인터랙션 개발",
    periodStart: "2022-09",
    periodEnd: "2022-10",
    stack: ["HTML", "CSS", "jQuery"],
  },
  {
    title: "이랜드그룹 홈페이지 구축",
    projectLink: "https://www.eland.co.kr/",
    category: "Brand",
    client: "이랜드",
    description:
      "HTML/CSS 기반 반응형 퍼블리싱 및 jQuery 인터랙션 개발을 통한 이랜드그룹 공식 홈페이지 구축",
    periodStart: "2022-06",
    periodEnd: "2022-09",
    stack: ["HTML", "CSS", "jQuery", "반응형"],
  },
  {
    title: "이랜드몰 리뉴얼",
    projectLink: "https://www.elandmall.co.kr/",
    category: "eCommerce",
    client: "이랜드리테일",
    description:
      "이랜드몰 리뉴얼 프로젝트에서 기존 페이지의 컴포넌트화 및 HTML/CSS 구현, 프리랜서 인력 관리 및 일정 조율 담당",
    periodStart: "2022-01",
    periodEnd: "2022-06",
    stack: ["HTML", "CSS", "jQuery"],
  },
  {
    title: "쥬얼리/잡화 플랫폼 구축",
    category: "eCommerce",
    client: "이랜드패션",
    description:
      "이랜드패션의 쥬얼리/잡화 전문 eCommerce 플랫폼 구축을 위한 HTML/CSS 반응형 웹 퍼블리싱 및 jQuery 인터랙션 개발",
    periodStart: "2020-10",
    periodEnd: "2021-01",
    stack: ["HTML", "CSS", "jQuery", "반응형"],
  },
  {
    title: "반려동물 통합 플랫폼 구축",
    category: "eCommerce",
    client: "RADCNS",
    description:
      "반려동물 용품 및 커뮤니케이션 플랫폼 구축을 위한 HTML/CSS 반응형 웹 퍼블리싱 및 jQuery 인터랙션 개발",
    periodStart: "2020-09",
    periodEnd: "2020-10",
    stack: ["HTML", "CSS", "jQuery", "반응형"],
  },
  {
    title: "아동 패션 플랫폼 구축",
    projectLink: "https://kidikidi.elandmall.co.kr/",
    category: "eCommerce",
    client: "이랜드리테일",
    description:
      "아동 패션 플랫폼 구축을 위한 HTML/CSS 반응형 웹 퍼블리싱 및 jQuery 인터랙션 개발",
    periodStart: "2020-02",
    periodEnd: "2020-05",
    stack: ["HTML", "CSS", "jQuery", "반응형"],
  },
  {
    title: "글로벌 eSports 대회 공식 웹사이트 구축",
    category: "Brand",
    client: "Smilegate",
    description:
      "WCG 2019 공식 웹사이트의 다국어 반응형 UI 개발 및 중국 시안 현지 행사 운영 기술 지원",
    periodStart: "2019-07",
    periodEnd: "2020-02",
    stack: ["HTML", "CSS", "jQuery", "반응형", "다국어"],
  },
];
