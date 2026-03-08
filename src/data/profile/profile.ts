import type { TechName } from "@/shared/components/tech/tech-config";

// ========================================
// 프로필 데이터 타입
// ========================================
export interface ProfileData {
  /** 이름 (한국어) */
  name: string;
  /** 이름 (영문) — 저작권 표기 등에 사용 */
  nameEn: string;
  /** 직함 */
  title: string;
  /** 이메일 주소 */
  email: string;
  /** GitHub URL */
  githubUrl: string;
  /** 아바타 이미지 경로 */
  avatarUrl: string;
  /** 아바타 이미지 alt 텍스트 */
  avatarAlt: string;
  /** 경력 시작일 (YYYY-MM 형식) */
  careerStartDate: string;
  /** 자기소개 문구 */
  bio: string;
  /** 핵심 포인트 (About 섹션에 표시) */
  highlights: string[];
  /** 주요 업무 및 역할 */
  jobDescription: string[];
  /** 메인 기술 스택 */
  mainStack: TechName[];
  /** 도구 및 기타 기술 */
  subStack: TechName[];
}

// ========================================
// 프로필 데이터
// ========================================
// 이 파일의 내용만 수정하면 사이트 전체에 반영됩니다.
// ========================================
export const profile: ProfileData = {
  name: "구태준",
  nameEn: "Taejun Goo",
  title: "퍼블리셔 · UI Engineer",
  email: "gtxggle2@gmail.com",
  githubUrl: "https://github.com/TaejunGoo",
  avatarUrl: "/images/profile/cat.webp",
  avatarAlt: "우리집 고양이 감자",
  careerStartDate: "2019-03",
  bio: "주어진 환경에서 최선의 해결책을 찾아내며, 동료들과 함께 성장하고 기여하는 과정 속에서 보람을 느낍니다.",
  highlights: [
    "최신 프론트엔드 환경부터 레거시 웹까지 폭넓은 경험",
    "이커머스, 관리 시스템, 미디어 등 다양한 도메인에서 UI 구축",
    "팀 내 기술 도입과 스터디 운영 등 주도적인 성장과 팀 기여",
  ],
  jobDescription: [
    "재사용 가능한 UI 컴포넌트 개발",
    "반응형 및 크로스 브라우징 설계",
    "디자인·개발 파트 간 협업",
    "시멘틱 마크업 및 웹 접근성 준수",
    "요구사항에 따른 애니메이션 및 인터랙션 구현",
    "사용자 경험(UX) 향상",
  ],
  mainStack: [
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "jQuery",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Styled-Components",
    "Emotion",
  ],
  subStack: [
    "Git",
    "Figma",
    "Photoshop",
    "GitHub Copilot",
    "Claude Code",
  ],
};
