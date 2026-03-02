import type { ProjectSlug } from "@/constants/projectSlugs";
import { PROJECT_SLUGS } from "@/constants/projectSlugs";
import type { ProjectDetailData } from "@/types";

import { projectsData } from "./projects";

// projectsData에서 기본 정보를 찾아서 확장하는 헬퍼 함수
const getBaseProject = (slug: ProjectSlug) => {
  const base = projectsData.find((p) => p.slug === slug);
  if (!base) {
    throw new Error(`Project with slug "${slug}" not found in projectsData`);
  }
  return base;
};

export const projectDetailData: ProjectDetailData[] = [
  {
    ...getBaseProject(PROJECT_SLUGS.CJ_SCHOOLFOOD),
    slug: PROJECT_SLUGS.CJ_SCHOOLFOOD,
    overview:
      "CJ 튼튼스쿨은 학교 등 교육기관을 대상으로 하는 식자재 B2B 플랫폼으로, 커머스 기능에 더해 급식자랑, 팁 공유 등 커뮤니티 기능을 제공하는 서비스입니다. React 기반의 프론트엔드 환경을 설계하고, Tailwind CSS와 Styled-components를 활용해 반응형 UI를 구현했습니다. 프로젝트의 요구사항에 맞춰 무거운 외부 라이브러리 의존도를 낮추고 공통 컴포넌트를 직접 구현하여 최적화에 집중했습니다.",
    role: [
      "프론트엔드 환경 설계 및 UI 컴포넌트 구조화",
      "복잡한 전역 상태 관리 최적화",
      "게시판형 목록 및 상세 등 주요 도메인 페이지 UI 구현",
      "크로스 브라우저 환경의 스크롤 및 라우팅 이슈 해결",
    ],
    highlights: [
      "Context API 기반 전역 상태 관리로 데이터의 단일 진실 공급원(SSOT) 달성 및 Props drilling 제거",
      "History API 제어를 통한 크로스 브라우저 환경 스크롤 위치 초기화 정책 수립",
      "HeadlessUI를 활용한 접근성 높은 모달 등 공통 컴포넌트 구축",
    ],
    customSections: [
      {
        title: "Context API를 활용한 전역 상태 관리 최적화",
        type: "list",
        content: [
          "Header 컴포넌트의 메뉴 토글, 검색 영역 토글 등 복잡한 상태를 중앙화",
          "Props drilling으로 인한 코드 복잡도 문제 해결",
          "단일 진실 공급원(SSoT) 달성으로 상태 불일치 이슈 방지 및 유지보수성 향상",
        ],
      },
      {
        title: "페이지 이동 시 스크롤 위치 초기화 문제 해결",
        type: "list",
        content: [
          "페이지 이동 시 스크롤이 중간 위치에서 시작하는 브라우저 기본 동작과 React Router 간의 충돌 인지",
          "URL 변경을 감지하여 스크롤을 0으로 초기화하는 커스텀 훅 작성",
          "window.history.scrollRestoration을 'manual'로 제어하여 크로스 브라우저 환경에서 안정적인 스크롤 위치 초기화 구현",
        ],
      },
      {
        title: "갤러리",
        type: "gallery",
        content: ["/images/projects/school_2.webp", "/images/projects/school_3.webp"],
      },
    ],
  },
  {
    ...getBaseProject(PROJECT_SLUGS.CJ_THE_SQUARE),
    slug: PROJECT_SLUGS.CJ_THE_SQUARE,
    overview:
      "CJ The Square는 대한통운 임직원을 위한 사내 커뮤니티로, 글 작성, 열람, 댓글, 포인트 획득 및 교환 기능 등을 제공합니다. React를 기반으로 모바일에 최적화된 UI를 구현했으며, 개발 생산성 향상을 위해 팀 내 최초로 Tailwind CSS를 도입하여 스타일링 환경을 구축했습니다.",
    role: [
      "모바일 최적화 커뮤니티 UI 전체 페이지 구현",
      "CJ 포털 내 연동을 위한 포틀릿(iframe) 영역 작업",
      "Tailwind CSS 기반 스타일링 환경 구축 및 최적화 전략 수립",
    ],
    highlights: [
      "팀 내 최초 Tailwind CSS 도입으로 초기 프로토타이핑 속도 및 전반적인 UI 개발 생산성 향상",
      "Tailwind CSS와 Styled-components의 전략적 혼용으로 개발 효율성과 코드 품질 동시 확보",
      "iOS Chrome 환경 하단 툴바 렌더링에 따른 뷰포트 공백 문제 분석 및 해결",
    ],
    customSections: [
      {
        title: "Tailwind CSS 도입을 통한 개발 생산성 향상",
        type: "list",
        content: [
          "팀 내 최초로 Tailwind CSS를 도입하여 유틸리티 클래스 기반의 직관적인 스타일링 환경 구축",
          "tailwind-merge와 clsx를 결합한 유틸리티 함수 도입으로 동적 클래스 제어 최적화",
          "빠른 프로토타이핑이 필요한 영역은 Tailwind를, 복잡한 동적 로직이 필요한 영역은 Styled-components를 활용",
        ],
      },
      {
        title: "iOS Chrome viewport 하단 공백 문제 해결",
        type: "list",
        content: [
          "iOS Chrome 환경에서 하단 툴바 렌더링 시 발생하는 viewport 공백 현상 파악",
          "meta viewport 설정에 viewport-fit=cover 값 적용",
          "브라우저 번역 제안 팝업 동작과의 충돌을 확인하고, HTML lang 속성을 한국어(ko)로 명시하여 이슈 완전 해결",
        ],
      },
      {
        title: "갤러리",
        type: "gallery",
        content: [
          "/images/projects/cjthesquare_3.webp",
          "/images/projects/cjthesquare_4.webp",
        ],
      },
    ],
  },
  {
    ...getBaseProject(PROJECT_SLUGS.CJ_MAXONOMY),
    slug: PROJECT_SLUGS.CJ_MAXONOMY,
    overview:
      "Team MAXONOMY는 CJ 올리브네트웍스의 디지털 마케팅 솔루션 전문 팀의 공식 홈페이지로, 팀의 서비스와 솔루션을 소개하고 고객과의 접점을 제공하는 브랜드 사이트입니다. 클라이언트측 기술 담당자로서 비개발 직군과 외주 개발사 간의 기술적 간극을 조율하고 UI/UX 품질을 검수하는 총괄 역할을 수행했습니다.",
    role: [
      "고객사, 디자인팀, 외주 개발사 간 기술 요구사항 커뮤니케이션 조율",
      "외주 개발사 산출물 품질 검수 및 UI QA 총괄",
      "기술적 제약사항 분석 및 대안 제시",
      "디자이너와 협업하여 실시간 UI 코드 반영",
    ],
    highlights: [
      "현장 상주 및 실시간 UI 코드 반영을 통한 피드백 루프 단축",
      "기술-비기술 직군 간 원활한 커뮤니케이션을 통한 프로젝트 일정 준수",
      "외주 개발 산출물의 UI/UX 완성도 향상",
    ],
    customSections: [
      {
        title: "현장 협업을 통한 디자인-개발 간극 해소",
        type: "list",
        content: [
          "원격 작업으로 인한 외주 개발사의 디자인 요구사항 미반영 이슈 파악",
          "고객사 현장에 상주하여 디자이너 및 클라이언트와 직접 소통 체계 구축",
          "미흡한 디자인 구현 사항을 현장에서 즉시 코드로 반영하여 피드백 사이클 단축",
          "비개발 직군을 대상으로 기술적 제약사항을 명확히 설명하고 최선의 대안 도출",
        ],
      },
      {
        title: "핵심 경험",
        type: "list",
        content: [
          "이해관계자 간 기술적 커뮤니케이션 및 조율 역량",
          "외주 개발 프로젝트의 실무적인 UI/UX 품질 관리 및 QA 경험",
          "현장 협업을 통한 신속한 문제 해결 및 의사결정",
        ],
      },
      {
        title: "갤러리",
        type: "gallery",
        content: ["/images/projects/maxonomy_2.webp", "/images/projects/maxonomy_3.webp"],
      },
    ],
  },
  {
    ...getBaseProject(PROJECT_SLUGS.JTBC_NEWS_RENEWAL),
    slug: PROJECT_SLUGS.JTBC_NEWS_RENEWAL,
    overview:
      "JTBC 뉴스는 텍스트 기사, 라이브, 숏폼 등 다양한 형태의 미디어를 제공하는 종합 미디어 서비스로, Next.js와 TypeScript 기반 환경에서 UI 개발을 담당했습니다. 다양한 디바이스와 해상도에 노출되는 미디어 플랫폼의 특성에 맞춰 정교한 반응형 웹 레이아웃을 설계하고, 엣지 케이스(Edge-case)에서의 UI 안정성을 확보하는 데 주력했습니다.",
    role: [
      "다양한 디바이스 및 해상도에 대응하는 반응형 레이아웃 구현",
      "예외 상황(Edge-case) 분석 및 UI/UX 트러블슈팅",
      "인터랙션 및 애니메이션 구현",
      "재사용 가능한 공통 컴포넌트 설계",
    ],
    highlights: [
      "미디어 플랫폼 특성에 맞춘 정교한 반응형 UI 및 레이아웃 설계",
      "CSS 미디어 쿼리와 zoom 속성을 결합한 저해상도 기기 UI 최적화 (레이아웃 시프트 방어)",
      "CSS scroll-snap과 IntersectionObserver를 활용한 Mac 트랙패드 스크롤 경험 개선",
    ],
    customSections: [
      {
        title: "저해상도 디바이스 대응 및 레이아웃 시프트 방어",
        type: "list",
        content: [
          "프로젝트 후반부에 저해상도 기기 대응 정책이 추가되어 기존 UI 수정 최소화 필요",
          "CSS 미디어 쿼리와 zoom 속성을 결합하여 각 해상도별 UI 비율을 동적으로 조정하는 솔루션 도입",
          "JavaScript 제어 시 발생하는 런타임 지연 및 레이아웃 시프트 현상을 방어하기 위해 CSS만으로 구현",
          "모든 CSS 네이티브 기능(sticky/fixed 등)의 정상 작동 및 브라우저 호환성 확보",
        ],
      },
      {
        title: "Mac 트랙패드 스크롤 튕김 현상 개선",
        type: "list",
        content: [
          "기존 Swiper 라이브러리로 구현된 숏폼 영역에서 Mac 트랙패드 스크롤 시 여러 영상이 동시에 넘어가는 현상 분석",
          "해당 컴포넌트의 로직을 CSS 네이티브 scroll-snap 기반으로 전면 재설계",
          "IntersectionObserver API를 활용해 현재 뷰포트에 보이는 슬라이드를 감지하고 자연스럽게 URL을 갱신하도록 처리",
        ],
      },
      {
        title: "갤러리",
        type: "gallery",
        content: ["/images/projects/jtbc_3.webp", "/images/projects/jtbc_4.webp"],
      },
    ],
  },
  {
    ...getBaseProject(PROJECT_SLUGS.KBS_TVUT),
    slug: PROJECT_SLUGS.KBS_TVUT,
    overview:
      "KBS 티벗은 실시간 방송과 연동되어 시청자 참여 기능을 제공하는 플랫폼입니다. HTML과 CSS 중심의 레거시 환경에 Sass를 도입하여 유지보수성을 높이고 코딩 컨벤션을 확립했습니다. 특히 고연령층 사용자가 많은 서비스 특성을 고려하여, 확장성 높은 동적 폰트 크기 테마 시스템을 구축해 웹 접근성을 향상시켰습니다.",
    role: [
      "팀 내 Sass 최초 도입 및 스타일 표준화 주도",
      "디자인 시스템 기반 스타일링 테마 구축",
      "접근성 향상을 위한 UI 개발 및 최적화",
    ],
    highlights: [
      "팀 내 최초 Sass 도입 및 지식 공유 문서 배포를 통한 기술 표준화 확립",
      "CSS Variable과 Sass Map을 활용한 고연령층 대상 동적 폰트 크기 테마 시스템 설계",
      "유지보수성과 확장성을 고려한 디자인 토큰 시스템 구축",
    ],
    customSections: [
      {
        title: "팀 내 최초 Sass 도입 및 기술 표준화",
        type: "list",
        content: [
          "기존 HTML/CSS/jQuery 환경의 유지보수 한계를 체감하고 팀에 Sass를 최초 도입",
          "팀 내 Sass 코딩 컨벤션 및 스타일 가이드라인 작성",
          "팀 구성원을 위한 지식 공유 문서를 배포하여 초기 러닝 커브 단축 및 기술 표준화 달성",
          "코드 재사용성 향상으로 후속 프로젝트의 개발 속도 증대에 기여",
        ],
      },
      {
        title: "동적 폰트 크기 테마 시스템 구축",
        type: "list",
        content: [
          "고연령층 사용자 비율이 높은 점을 고려해 가독성을 높일 수 있는 폰트 확대 기능 구현",
          "CSS Variable과 Sass Map을 결합하여 확장성 높은 폰트 사이즈 토큰 시스템 설계",
          "단순히 일괄적인 비율로 확대되는 REM 단위의 한계를 넘어, 디자인 의도에 맞게 독립적인 확대 비율이 적용되도록 구현",
        ],
      },
      {
        title: "갤러리",
        type: "gallery",
        content: ["/images/projects/tvut_2.webp", "/images/projects/tvut_3.webp"],
      },
    ],
  },
  {
    ...getBaseProject(PROJECT_SLUGS.VIBE_CODING_PROJECTS),
    slug: PROJECT_SLUGS.VIBE_CODING_PROJECTS,
    overview:
      "AI 코딩 보조 도구(Claude Code, GitHub Copilot 등)를 실무 및 개인 프로젝트에 적극 도입하여 업무 방식을 개선하고 있습니다. 기술 실증과 개인적인 문제 해결을 위해 시뮬레이터, 데이터 크롤러 등 실용적인 토이 프로젝트를 기획부터 배포까지 '바이브 코딩' 방식으로 빠르게 구현하며 에이전틱 코딩의 생산성을 검증하였습니다.",
    role: [
      "아이디어 기획, 문제 정의 및 요구사항 도출",
      "AI 도구를 활용한 프론트엔드 개발 및 배포 전 과정 수행",
      "데이터 수집(크롤링) 및 시뮬레이션 로직 등 핵심 기능 구현",
    ],
    highlights: [
      "일상의 불편함 해소 및 기술적 호기심 충족을 위한 실용적 솔루션 개발",
      "AI 코딩 도구의 전략적 활용을 통한 MVP(Minimum Viable Product) 빠른 프로토타이핑",
      "기가픽셀 이미지 렌더링, 스텔스 크롤링 등 새로운 기술 스택 실증",
    ],
    customSections: [
      {
        title: "Binoculars Simulator (쌍안경 시뮬레이터)",
        type: "list",
        content: [
          "https://binoculars-simulator.vercel.app/",
          "https://github.com/TaejunGoo/binoculars-simulator",
          "목적: 쌍안경의 시각적 왜곡 및 배율 효과를 브라우저에서 시뮬레이션",
          "기술 실증: 기가픽셀 이미지(49537x19429, 575MB)를 브라우저에서 끊김 없이 렌더링하기 위해 OpenSeadragon 뷰어 활용 및 이미지 타일링 적용",
          "기능: 4x~12x 가변 배율 조정, CSS 및 SVG 필터를 활용한 렌즈 퀄리티 시각화",
        ],
      },
      {
        title: "네이버 스마트스토어 교집합 찾기",
        type: "list",
        content: [
          "https://naver-store-intersect-finder.vercel.app/",
          "https://github.com/TaejunGoo/naver-store-intersect-finder",
          "문제 해결: 여러 관심 상품을 단일 스토어에서 묶음 배송으로 구매하고 싶을 때 일일이 검색해야 하는 페인포인트(Pain-point) 해소",
          "구현: 네이버 오픈 API를 활용하여 입력한 여러 키워드의 상품을 모두 판매하는 스토어만 교집합으로 필터링",
          "안정성: Redis를 활용하여 API 요청 횟수 제한(Rate Limiting) 관리",
        ],
      },
      {
        title: "부동산 가격 트렌드 대시보드",
        type: "list",
        content: [
          "https://naver-land-scraper.vercel.app/",
          "https://github.com/TaejunGoo/naver-land-scraper",
          "문제 해결: 특정 아파트 단지의 매물 가격 변동 추이를 지속적으로 추적하기 위한 자동화 도구 필요성",
          "구현: Puppeteer를 활용한 스텔스 크롤링으로 네이버 부동산 데이터 자동 수집",
          "시각화: 로컬 DB에 적재된 데이터를 바탕으로 시계열 차트를 구현하여 직관적인 트렌드 파악 지원",
        ],
      },
      {
        title: "갤러리",
        type: "gallery",
        content: ["/images/projects/vibe_2.webp", "/images/projects/vibe_3.webp", "/images/projects/vibe_4.webp"],
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): ProjectDetailData | undefined => {
  return projectDetailData.find((project) => project.slug === slug);
};

export interface AdjacentProject {
  slug: string;
  title: string;
}

export const getAdjacentProjects = (
  slug: string,
): { prev: AdjacentProject | null; next: AdjacentProject | null } => {
  const index = projectDetailData.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  const prev =
    index > 0
      ? { slug: projectDetailData[index - 1].slug, title: projectDetailData[index - 1].title }
      : null;

  const next =
    index < projectDetailData.length - 1
      ? { slug: projectDetailData[index + 1].slug, title: projectDetailData[index + 1].title }
      : null;

  return { prev, next };
};
