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
      "CJ 튼튼스쿨은 학교 등 교육기관을 대상으로 하는 식자재 B2B 플랫폼으로, 커머스 기능과 급식자랑, 팁 공유 등의 커뮤니티 기능을 제공하는 서비스입니다. React와 TypeScript 기반 환경에서 게시판형 목록·상세 화면과 공통 UI 컴포넌트를 담당했으며, Tailwind CSS와 styled-components를 활용해 반응형 UI를 구현했습니다.",
    role: [
      "게시판형 목록 및 상세 등 담당 페이지 UI 구현",
      "재사용 가능한 공통 UI 컴포넌트 구현",
      "Context API 기반 Header UI 상태 중앙화",
      "페이지 전환 시 스크롤 복원 이슈 분석 및 해결",
    ],
    highlights: [
      "Header의 메뉴·검색 상태 관리 지점을 통합해 관련 컴포넌트의 상태 전달 구조 단순화",
      "History API 제어를 통한 페이지 전환 시 스크롤 위치 초기화 정책 수립",
      "Headless UI를 활용한 모달 등 공통 컴포넌트 구현",
    ],
    customSections: [
      {
        title: "Context API를 활용한 Header UI 상태 관리",
        type: "list",
        content: [
          "Header의 메뉴 토글과 검색 영역 토글 상태를 하나의 Context에서 관리",
          "관련 컴포넌트 사이에서 반복되던 상태와 이벤트 전달 구조를 단순화",
          "Header UI의 상태 변경 기준을 한곳에 모아 유지보수성을 개선",
        ],
      },
      {
        title: "페이지 이동 시 스크롤 위치 초기화 문제 해결",
        type: "list",
        content: [
          "React Router 기반 페이지 전환과 브라우저의 자동 스크롤 복원 동작이 함께 적용되며 발생하는 현상 분석",
          "URL 변경을 감지하여 스크롤을 0으로 초기화하는 커스텀 훅 작성",
          "window.history.scrollRestoration을 'manual'로 제어하여 페이지 전환 시 스크롤 위치를 일관되게 초기화",
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
      "CJ The Square는 CJ대한통운 임직원을 위한 사내 커뮤니티로, 글 작성, 열람, 댓글, 포인트 획득 및 교환 기능 등을 제공합니다. React를 기반으로 모바일 UI 전체 화면과 CJ 포털 연동용 포틀릿 영역을 구현했으며, 퍼블리싱팀 신규 구축 프로젝트에 Tailwind CSS를 처음 도입했습니다.",
    role: [
      "모바일 최적화 커뮤니티 UI 전체 페이지 구현",
      "CJ 포털 내 연동을 위한 포틀릿(iframe) 영역 작업",
      "Tailwind CSS 기반 스타일링 환경 및 클래스 관리 방식 구성",
    ],
    highlights: [
      "퍼블리싱팀 신규 구축 프로젝트에 Tailwind CSS를 처음 적용하고 클래스 조합 유틸리티 구성",
      "스타일 복잡도에 따라 Tailwind CSS와 styled-components를 구분해 사용하는 기준 정리",
      "iOS Chrome의 뷰포트 공백 현상에 영향을 주는 브라우저 번역 제안 팝업 조건 확인 및 개선",
    ],
    customSections: [
      {
        title: "Tailwind CSS 도입 및 활용 기준 정리",
        type: "list",
        content: [
          "퍼블리싱팀 신규 구축 프로젝트에 Tailwind CSS를 처음 적용해 유틸리티 클래스 기반의 스타일링 환경 구성",
          "tailwind-merge와 clsx를 결합한 공통 유틸리티로 조건부 클래스 조합 방식을 통일",
          "빠른 프로토타이핑이 필요한 영역은 Tailwind CSS를, 복잡한 동적 스타일이 필요한 영역은 styled-components를 활용",
        ],
      },
      {
        title: "iOS Chrome viewport 하단 공백 문제 해결",
        type: "list",
        content: [
          "iOS Chrome 환경에서 하단 툴바 렌더링 시 발생하는 viewport 공백 현상 파악",
          "meta viewport 설정에 viewport-fit=cover 값 적용",
          "브라우저 번역 제안 팝업이 표시될 때 현상이 재현되는 것을 확인하고 HTML lang 속성을 한국어(ko)로 명시",
          "viewport 및 언어 설정 적용 후 대상 모바일 환경에서 동작 재검증",
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
      "Team MAXONOMY는 CJ올리브네트웍스의 디지털 마케팅 솔루션 전문 팀의 공식 홈페이지입니다. 외주 개발사가 구현한 프로젝트에서 클라이언트 측 기술 지원 역할로 참여해 고객사·디자인팀·외주 개발사 사이의 구현 범위와 기술적 제약을 조율하고, UI QA와 일부 화면 코드 수정을 담당했습니다.",
    role: [
      "고객사, 디자인팀, 외주 개발사 간 구현 요구사항 조율",
      "외주 개발사 산출물 UI QA 및 수정 사항 전달",
      "기술적 제약사항 분석 및 대안 제시",
      "디자이너와 협업해 일부 화면 코드 수정",
    ],
    highlights: [
      "고객사 현장에서 디자인 구현 차이를 확인하고 일부 UI 코드를 직접 수정",
      "비개발 직군에 기술적 제약과 가능한 대안을 설명",
      "외주 개발 산출물의 UI 차이를 확인하고 수정 요구사항을 구체화",
    ],
    customSections: [
      {
        title: "현장 협업을 통한 디자인-개발 간극 해소",
        type: "list",
        content: [
          "원격 작업으로 인한 외주 개발사의 디자인 요구사항 미반영 이슈 파악",
          "고객사 현장에 상주하여 디자이너 및 클라이언트와 직접 소통",
          "미흡한 디자인 구현 사항을 현장에서 즉시 코드로 반영하여 피드백 사이클 단축",
          "비개발 직군에 기술적 제약사항을 설명하고 구현 가능한 대안을 제시",
        ],
      },
      {
        title: "담당 경험",
        type: "list",
        content: [
          "고객사·디자인팀·외주 개발사 간 요구사항 조율",
          "외주 개발 산출물의 UI QA 및 수정 사항 전달",
          "현장 협업을 통한 일부 화면 코드 수정",
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
      "JTBC 뉴스는 텍스트 기사, 라이브, 숏폼 등 다양한 형태의 미디어를 제공하는 종합 미디어 서비스입니다. Next.js와 TypeScript 기반 환경에서 뉴스·라이브·숏폼 등 담당 영역의 반응형 UI와 공통 컴포넌트를 구현하고, 다양한 브라우저·디바이스에서 발생하는 UI 이슈를 개선했습니다.",
    role: [
      "뉴스·라이브·숏폼 등 담당 영역의 반응형 UI 구현",
      "담당 영역의 재사용 가능한 공통 컴포넌트 구현 및 Storybook 문서화",
      "예외 상황(Edge-case) 분석 및 UI/UX 트러블슈팅",
      "인터랙션 및 애니메이션 구현",
    ],
    highlights: [
      "미디어 플랫폼의 담당 화면과 공통 컴포넌트를 반응형으로 구현하고 Storybook에 문서화",
      "해상도별 CSS 미디어 쿼리와 zoom 속성을 활용해 저해상도 구간의 화면 깨짐 개선",
      "CSS scroll-snap과 IntersectionObserver를 활용한 Mac 트랙패드 스크롤 경험 개선",
    ],
    customSections: [
      {
        title: "저해상도 디바이스 대응 및 레이아웃 시프트 방어",
        type: "list",
        content: [
          "프로젝트 후반부에 저해상도 기기 대응 정책이 추가되어 기존 UI 수정 최소화 필요",
          "저해상도 구간의 해상도별 CSS 미디어 쿼리를 생성하고 zoom 값을 적용",
          "런타임 JavaScript 제어 대신 CSS 파싱 시점에 확대 비율이 적용되도록 구성해 초기 화면 변화를 줄임",
          "대상 브라우저에서 기존 sticky·fixed 요소의 동작을 유지하는지 확인",
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
      "KBS 티벗은 실시간 방송과 연동되어 시청자 참여 기능을 제공하는 모바일 플랫폼입니다. HTML, Sass, JavaScript, jQuery를 활용해 전체 UI 화면을 구현했으며, 퍼블리싱팀 신규 구축 프로젝트에 Sass를 처음 적용하고 코딩 컨벤션을 정리했습니다. 고연령층 사용자를 고려한 폰트 크기 테마를 구축해 텍스트 가독성을 개선했습니다.",
    role: [
      "모바일 UI 전체 화면 퍼블리싱",
      "퍼블리싱팀 신규 구축 프로젝트 Sass 최초 적용 및 컨벤션 문서화",
      "디자인 토큰 기반 폰트 크기 테마 구축",
    ],
    highlights: [
      "모바일 서비스 전체 UI 화면 구현",
      "퍼블리싱팀 신규 구축 프로젝트에 Sass를 처음 적용하고 코딩 컨벤션과 활용 문서 공유",
      "CSS Variable과 Sass map을 활용해 폰트별 확대 비율을 독립적으로 관리하는 토큰 구성",
    ],
    customSections: [
      {
        title: "퍼블리싱팀 신규 구축 프로젝트 Sass 최초 적용",
        type: "list",
        content: [
          "기존 HTML/CSS/jQuery 환경에서 반복되는 스타일 작성과 관리 문제를 개선하기 위해 Sass 적용",
          "퍼블리싱팀의 Sass 코딩 컨벤션 및 스타일 가이드라인 작성",
          "팀 구성원을 위한 Sass 활용 문서를 작성하고 실제 프로젝트 사용 사례 공유",
          "후속 신규 구축 프로젝트에서 Sass를 활용할 수 있는 작업 기준 마련",
        ],
      },
      {
        title: "동적 폰트 크기 테마 시스템 구축",
        type: "list",
        content: [
          "고연령층 사용자 비율이 높은 점을 고려해 가독성을 높일 수 있는 폰트 확대 기능 구현",
          "CSS Variable과 Sass map을 결합하여 확장성 높은 폰트 크기 토큰 시스템 설계",
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
      "AI 코딩 에이전트를 활용해 아이디어를 실제 웹 서비스로 구체화한 개인 프로젝트 모음입니다. 문제 정의와 요구사항 구성, 구현 방향 제시를 직접 수행하고, 대부분의 코드는 AI 에이전트와의 반복적인 대화를 통해 작성했습니다. 생성된 기능의 동작과 UI를 검증하고 오류를 수정하며 배포까지 진행해, 바이브 코딩으로 구현할 수 있는 범위와 한계를 경험했습니다.",
    role: [
      "업무와 일상에서 해결할 문제 발굴 및 요구사항 정의",
      "AI 코딩 에이전트에 구현 방향과 작업 맥락 제공",
      "생성된 기능의 동작 검증과 오류 수정",
      "UI·사용 흐름 개선 및 서비스 배포",
    ],
    highlights: [
      "아이디어를 실제 사용할 수 있는 웹 서비스로 구체화하고 배포",
      "AI 생성 코드의 동작을 검증하고 문제 상황에 맞게 반복 개선",
      "이미지 타일링, 외부 API, 데이터 검증·수집·시각화 등 서로 다른 기술 과제 경험",
    ],
    customSections: [
      {
        title: "Img2LD (Product JSON-LD 생성기)",
        type: "list",
        content: [
          "https://img2ld.vercel.app/",
          "https://github.com/TaejunGoo/img2ld",
          "목적: 상품 상세 이미지 또는 이미지를 포함한 CSV 데이터셋을 기반으로 Product JSON-LD를 자동 생성해 구조화 데이터 작성 부담을 줄이는 서비스 개발",
          "구현: 이미지 업로드와 CSV 파싱을 분기 처리하고, Gemini 분석 결과를 Zod로 부분 검증하여 사용 가능한 필드를 최대한 유지하도록 설계",
        ],
      },
      {
        title: "Binoculars Simulator (쌍안경 시뮬레이터)",
        type: "list",
        content: [
          "https://binoculars-simulator.vercel.app/",
          "https://github.com/TaejunGoo/binoculars-simulator",
          "목적: 쌍안경의 시각적 왜곡 및 배율 효과를 브라우저에서 시뮬레이션",
          "기술 적용: 기가픽셀 이미지(49537x19429, 575MB)를 브라우저에서 탐색할 수 있도록 OpenSeadragon 뷰어와 이미지 타일링 적용",
          "기능: 4x~12x 가변 배율 조정, CSS 및 SVG 필터를 활용한 렌즈 특성 시각화",
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
          "구현: Puppeteer를 활용해 네이버 부동산 데이터 수집 자동화",
          "시각화: 로컬 DB에 적재된 데이터를 바탕으로 시계열 차트를 구현하여 직관적인 트렌드 파악 지원",
        ],
      },
      {
        title: "갤러리",
        type: "gallery",
        content: ["/images/projects/vibe_5.webp", "/images/projects/vibe_4.webp", "/images/projects/vibe_3.webp", "/images/projects/vibe_2.webp"],
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
