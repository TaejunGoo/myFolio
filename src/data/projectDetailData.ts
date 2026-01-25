import { projectsData } from "@/components/main/projects/projectsData";
import type { ProjectDetailData } from "@/components/main/projects/types";

// projectsData에서 기본 정보를 찾아서 확장하는 헬퍼 함수
const getBaseProject = (slug: string) => {
  const base = projectsData.find((p) => p.slug === slug);
  if (!base) {
    throw new Error(`Project with slug "${slug}" not found in projectsData`);
  }
  return base;
};

export const projectDetailData: ProjectDetailData[] = [
  {
    ...getBaseProject("jtbc-news-renewal"),
    slug: "jtbc-news-renewal",
    stack: [
      ...getBaseProject("jtbc-news-renewal").stack,
      "Git",
      "Figma",
    ],
    overview:
      "JTBC 뉴스는 텍스트 기사뿐만 아니라 라이브, 숏폼, 영상뉴스 등 다양한 형태의 미디어를 제공하는 종합 미디어 서비스입니다. Next.js, TypeScript, MUI, Emotion 기반의 환경에서 UI 개발을 진행했습니다. 다양한 계층과 디바이스에 노출되는 서비스 특성상 정교한 반응형 처리 작업을 수행했으며, 비교적 규모가 큰 서비스로서 복잡하고 다양한 형태의 컴포넌트들을 관리하기 위해 Storybook을 활용했습니다.",
    role: [
      "재사용 가능한 공통 컴포넌트 작성",
      "Storybook 기반 컴포넌트 문서화 및 목록화",
      "인터랙션 및 애니메이션 구현",
      "담당 영역 UI 및 페이지 작업",
    ],
    highlights: [
      "50개 이상의 재사용 가능한 UI 컴포넌트 개발",
      "Storybook 기반 컴포넌트 문서화로 팀 협업 효율성 향상",
    ],
    customSections: [
      {
        title: "Mac 트랙패드에서 숏폼 스크롤 문제 해결",
        type: "list",
        content: [
          "Swiper 라이브러리로 구현한 세로 슬라이드 숏폼에서 Mac 트랙패드 스크롤 시 여러 장이 동시에 넘어가는 현상 발생",
          "숏폼 컴포넌트를 Swiper에서 CSS scroll-snap 기반으로 재구현",
          "IntersectionObserver API로 현재 화면에 보이는 슬라이드 감지 및 URL 갱신",
          "브라우저 네이티브 기능 활용으로 더 자연스럽고 가벼운 구현 달성",
        ],
      },
      {
        title: "저해상도 디바이스 대응 (100~393px)",
        type: "list",
        content: [
          "디자인 시안 393px 기준, 100~393px 저해상도 디바이스 대응 필요",
          "CSS 미디어 쿼리 기반 zoom 솔루션으로 각 해상도별 UI 비율 조정",
          "CSS 25KB, 파싱 즉시 적용으로 FOUC 제거",
          "모든 CSS 기능(sticky/fixed) 정상 작동, 브라우저 호환성 확보",
        ],
      },
    ],
  },
  {
    ...getBaseProject("vibe-coding-projects"),
    slug: "vibe-coding-projects",
    overview:
      "실무에서 얻은 기술 스택을 활용하여 실생활의 불편함을 해결하는 두 가지 토이 프로젝트를 개발했습니다. 완성도보다는 빠른 개발과 실용성에 초점을 맞춘 '바이브 코딩' 방식으로 진행했으며, 각 프로젝트는 특정 문제를 해결하는 명확한 목적을 가지고 있습니다.",
    role: [
      "기획부터 배포까지 전 과정 독립 수행",
      "문제 정의 및 해결 방안 설계",
      "프론트엔드 및 백엔드 개발",
      "데이터 수집 및 처리 로직 구현",
    ],
    highlights: [
      "실용적인 문제 해결: 실제 사용 가능한 서비스 개발",
      "빠른 프로토타이핑: 최소한의 기능으로 빠르게 MVP 구현",
      "풀스택 개발 경험: 프론트엔드부터 백엔드, 데이터 수집까지 전체 구현",
    ],
    customSections: [
      {
        title: "네이버 스마트스토어 교집합 찾기",
        type: "list",
        content: [
          "문제: 여러 상품을 한 곳에서 구매하고 싶을 때 일일이 검색해야 하는 불편함",
          "해결: 여러 키워드 입력 시 모든 상품을 판매하는 스토어만 필터링",
          "기술: Next.js 16 App Router, SWR 데이터 페칭, 5분 TTL 메모리 캐싱",
          "특징: 반응형 UI, 다크모드 지원, shadcn/ui 컴포넌트 활용",
          "GitHub: https://github.com/TaejunGoo/naver-store-intersect-finder",
        ],
      },
      {
        title: "부동산 가격 트렌드 대시보드 (LandBriefing)",
        type: "list",
        content: [
          "문제: 아파트 가격 변동 추적을 위한 개인용 도구 필요",
          "해결: 네이버 부동산 데이터 자동 수집 및 시계열 차트 시각화",
          "기술: React + Vite, Express, SQLite, Puppeteer (스텔스 스크래핑), Recharts",
          "특징: 로컬 DB 기반 데이터 관리, .db 파일 import/export, Windows 배치 파일로 원클릭 실행",
          "GitHub: https://github.com/TaejunGoo/naver-land-scraper",
        ],
      },
      {
        title: "핵심 경험",
        type: "list",
        content: [
          "바이브 코딩: 완벽함보다 실용성과 속도에 집중한 개발 방식 체득",
          "문제 해결 중심 개발: 실제 불편함에서 시작하여 사용 가능한 솔루션 구현",
          "풀스택 개발: 프론트엔드, 백엔드, 데이터 수집 전 영역 경험",
          "기술 스택 활용: 실무에서 배운 기술을 토이 프로젝트에 즉시 적용",
        ],
      },
    ],
  },
  {
    ...getBaseProject("cj-maxonomy"),
    slug: "cj-maxonomy",
    overview:
      "Team MAXONOMY는 CJ 올리브네트웍스의 디지털 마케팅 솔루션 전문 팀의 공식 홈페이지로, 팀의 서비스와 솔루션을 소개하고 고객과의 접점을 제공하는 브랜드 사이트입니다. 외주 개발사가 Next.js, TypeScript, Tailwind CSS, shadcn/ui 기반으로 개발을 진행했으며, 본인은 클라이언트측 기술 담당자로서 품질 관리 및 기술 커뮤니케이션을 담당했습니다.",
    role: [
      "클라이언트(CJ 올리브네트웍스), 디자인팀, 외주 개발사 간 기술 요구사항 조율",
      "UI 이슈 트러블슈팅 및 해결 방안 제시",
      "디자이너와 협업하여 실시간 UI/UX 검토 및 피드백",
      "개발 산출물 품질 검수 및 QA",
      "고객사 현장 상주를 통한 즉각적인 커뮤니케이션",
    ],
    highlights: [
      "디자인 QA 이슈 즉시 해결로 수정 사이클 단축 및 프로젝트 일정 준수",
      "현장 협업을 통한 신속한 의사결정으로 프로젝트 진행 효율성 향상",
      "클라이언트 및 디자인팀 만족도 향상",
    ],
    customSections: [
      {
        title: "현장 상주를 통한 디자인-개발 간극 해소",
        type: "list",
        content: [
          "외주 개발사가 원격 작업으로 디자인 요구사항을 정확히 반영하지 못하는 상황 발생",
          "고객사 사무실 현장 상주를 통해 디자이너와 직접 소통 체계 구축",
          "외주 개발사의 미흡한 디자인 구현 사항을 현장에서 즉시 파악 후 직접 코드로 반영",
          "기술적 제약사항을 비개발자(디자이너/클라이언트)에게 명확히 설명",
        ],
      },
      {
        title: "핵심 경험",
        type: "list",
        content: [
          "외주 개발사 품질 관리 경험",
          "기술-비기술 간 커뮤니케이션 역량 강화",
          "현장 협업을 통한 신속한 의사결정",
        ],
      },
    ],
  },
  {
    ...getBaseProject("cj-the-square"),
    slug: "cj-the-square",
    overview:
      "CJ The Square는 대한통운 임직원을 위한 사내 커뮤니티로, 글 작성, 열람, 댓글, 포인트 획득 및 교환 기능 등을 제공합니다. React 및 Tailwind CSS, Styled-components를 기반으로 모바일에 최적화된 UI를 구현했습니다. 심플한 형태의 커뮤니티 기능이 주된 서비스인 점을 고려해 별도의 UI 라이브러리를 사용하지 않고 대부분의 컴포넌트를 직접 구현했습니다.",
    role: [
      "사용 기술 및 구현 계획 구성",
      "재사용 가능한 공통 컴포넌트 작성",
      "전체 UI 및 페이지 작업",
      "CJ 포털 내 포틀릿 영역(별도 iframe 영역) 작업",
    ],
    highlights: [
      "팀 내 Tailwind CSS 첫 도입 및 베스트 프랙티스 확립",
      "Tailwind CSS와 Styled-components 하이브리드 전략 수립",
      "iOS Chrome viewport 하단 공백 문제 해결 (viewport-fit, lang 속성 최적화)",
    ],
    customSections: [
      {
        title: "iOS Chrome에서 viewport 하단 공백 문제 해결",
        type: "list",
        content: [
          "일부 iOS 디바이스의 Chrome 브라우저에서 하단 툴바가 숨겨질 경우 하단바 아래에 의도하지 않은 빈 공간 발생",
          "meta viewport 설정에 viewport-fit=cover 값 추가하여 1차 해결",
          "페이지 이동 → 스크롤 → 뒤로가기 수행 시 유사 현상 재발 확인",
          "브라우저의 번역 제안 팝업이 표시될 때만 이슈 발생하는 것을 확인하고, HTML lang 속성을 한국어(ko)로 명시하여 번역 팝업 비활성화로 완전 해결",
        ],
      },
      {
        title: "팀 내 Tailwind CSS 첫 적용 및 하이브리드 전략 수립",
        type: "list",
        content: [
          "Tailwind config의 테마 설정 구성",
          "tailwind-merge와 clsx를 결합한 유틸리티 함수 등 주요 개발 도구 도입",
          "장점: 기존 Styled-components, CSS Module 방식보다 훨씬 빠른 작업 속도",
          "단점: 코드가 길어지고 복잡해지면 가독성 저하",
          "하이브리드 전략 수립: Tailwind는 빠른 프로토타이핑, Styled-components는 복잡한 로직에 활용",
        ],
      },
    ],
  },
  {
    ...getBaseProject("cj-schoolfood"),
    slug: "cj-schoolfood",
    stack: [...getBaseProject("cj-schoolfood").stack, "Headless UI"],
    overview:
      "CJ 튼튼스쿨은 학교 등 교육기관을 대상으로 하는 식자재 B2B 플랫폼으로, 커머스 기능에 더해 급식자랑, 팁 공유 등 커뮤니티 기능을 제공하는 서비스입니다. React 및 Tailwind CSS, Styled-components를 기반으로 반응형 서비스 UI를 구현했습니다. 심플하고 요구조건이 복잡하지 않은 서비스 특성상 무거운 UI 라이브러리 대신 대부분 직접 구현한 컴포넌트로 화면을 구성했으며, 모달과 같은 부분은 HeadlessUI를 사용하여 구현했습니다.",
    role: [
      "사용 기술 및 구현 계획 구성",
      "재사용 가능한 공통 컴포넌트 작성",
      "담당 영역 UI 및 페이지 작업 (게시판형 페이지 목록 및 상세 등)",
      "React 관련 이슈 해결",
    ],
    highlights: [
      "Context API 기반 Header 전역 상태 관리 구현 (Props drilling 제거, SSoT 달성)",
      "크로스 브라우저 스크롤 정책 수립 (History API scrollRestoration 제어)",
      "HeadlessUI 활용한 접근성 높은 모달 컴포넌트 구현",
    ],
    customSections: [
      {
        title: "페이지 이동 시 스크롤 위치 초기화 문제 해결",
        type: "list",
        content: [
          "페이지 이동 시 스크롤이 최상단이 아닌 중간 위치에서 시작하는 현상 발생",
          "React Router의 스크롤 동작 관리 기능이 프로젝트 버전과 호환되지 않음",
          "URL 변경을 감지하여 스크롤을 0으로 초기화하는 커스텀 훅 작성",
          "window.history.scrollRestoration을 'manual'로 변경하여 브라우저의 자동 스크롤 복원 비활성화",
          "모든 페이지 이동 시 스크롤이 최상단으로 일관되게 이동하도록 개선",
        ],
      },
      {
        title: "Context API를 활용한 Header 전역 상태 관리",
        type: "list",
        content: [
          "Header 컴포넌트의 메뉴 토글, 검색 영역 토글, 스크롤에 따른 노출 제어 등 다양한 상태를 중앙화",
          "Props drilling으로 인한 코드 복잡도 문제 해결",
          "단일 진실 공급원(SSoT) 달성으로 상태 불일치 이슈 방지",
        ],
      },
    ],
  },
  {
    ...getBaseProject("kbs-tvut"),
    slug: "kbs-tvut",
    stack: [...getBaseProject("kbs-tvut").stack, "모바일"],
    overview:
      "KBS 티벗은 KBS 방송 참여 플랫폼으로, 실시간 방송과 연동되어 방송 중 댓글 전송, 투표 등 시청자 참여 기능을 제공하는 서비스입니다. HTML, SASS 기반으로 모바일에 최적화된 서비스를 구현했으며, 고연령층 사용자가 많은 서비스 특성을 고려해 SASS와 CSS variable을 활용한 폰트 크기 테마 기능을 구현하여 접근성을 향상시켰습니다.",
    role: [
      "프로젝트 설계: HTML/SASS 기반 프로젝트 구현 계획 수립",
      "SASS 도입 및 팀 내 베스트 프랙티스 확립",
      "스타일링 테마 시스템 구축",
      "디자인 시스템 / 스타일 가이드 구축",
      "UI 개발: 전체 화면 구현",
    ],
    highlights: [
      "팀 내 신규 프로젝트 중 최초로 SASS 도입",
      "고연령층 사용자를 위한 동적 폰트 크기 테마 시스템 구현",
      "SASS 코딩 컨벤션 및 스타일 가이드 작성",
      "팀 내 SASS 지식 공유 문서 작성 및 배포",
    ],
    customSections: [
      {
        title: "고연령층 사용자를 위한 동적 폰트 크기 테마 시스템 구현",
        type: "list",
        content: [
          "고연령층 사용자 비율이 높은 서비스 특성상 가독성 향상을 위한 폰트 크기 확대 모드 필요",
          "CSS Variable + SASS Map 활용한 토큰 시스템 설계 (--fs-100 ~ --fs-900)",
          "테마별(md/lg) SASS Map으로 폰트 크기 값 관리",
          "REM 단위 사용 시 모든 폰트가 동일 비율로 커지는 문제 해결",
          "디자인 의도에 맞는 비율별 폰트 확대 구현",
        ],
      },
      {
        title: "팀 내 최초 SASS 도입 및 베스트 프랙티스 확립",
        type: "list",
        content: [
          "SASS 기본 문법 및 기능 학습 (변수, mixin, function, import 등)",
          "팀 내 SASS 코딩 컨벤션 및 스타일 가이드 문서 작성",
          "팀 구성원 대상 SASS 지식 공유 문서 작성 및 배포",
          "CSS 대비 코드 재사용성 향상 및 유지보수성 개선",
          "후속 프로젝트에 SASS 적용 확대의 기반 구축",
        ],
      },
      {
        title: "핵심 경험",
        type: "list",
        content: [
          "SASS 변수, mixin, function을 활용한 효율적인 CSS 관리 체계 구축",
          "토큰 시스템 기반 디자인 시스템 설계 및 구현",
          "사용자 특성 기반 접근성 향상 UI 개발",
          "팀 내 SASS 도입 주도 및 베스트 프랙티스 문서화",
        ],
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): ProjectDetailData | undefined => {
  return projectDetailData.find((project) => project.slug === slug);
};
