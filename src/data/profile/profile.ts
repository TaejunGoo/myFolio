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
  /** 경력 종료일 (YYYY-MM 형식) */
  careerEndDate: string;
  /** 경력 시작일 이전 추가 경력 개월 수 */
  careerExtraMonths: number;
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
  title: "Web Publisher",
  email: "gtxggle@gmail.com",
  githubUrl: "https://github.com/TaejunGoo",
  avatarUrl: "/images/profile/profile.webp",
  avatarAlt: "증명사진",
  careerStartDate: "2019-03",
  careerEndDate: "2026-07",
  careerExtraMonths: 9,
  bio: "다양한 구축·운영 프로젝트 경험과 React UI 구현 역량을 바탕으로, 디자인 시안을 안정적인 서비스 화면으로 구현합니다.",
  highlights: [
    "웹표준·접근성을 준수한 반응형 UI 구축",
    "HTML·jQuery부터 React·Next.js까지 다양한 기술 환경 대응",
    "브라우저·디바이스별 UI 이슈 분석 및 해결",
    "구축·운영 전반의 퍼블리싱 실무 경험",
  ],
  jobDescription: [
    "웹표준 및 접근성을 고려한 시맨틱 마크업 설계",
    "다양한 디바이스 환경에 맞춘 반응형 웹 구축",
    "JavaScript·jQuery 기반 인터랙션 UI 구현",
    "React·Next.js 기반 재사용 가능한 UI 컴포넌트 개발",
    "브라우저·디바이스별 UI 이슈 분석 및 해결",
    "Sass·Tailwind CSS 기반 스타일링 환경 구축 및 개선",
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
    "styled-components",
    "Emotion",
  ],
  subStack: [
    "Git",
    "Figma",
    "Photoshop",
    "GitHub Copilot",
    "Claude Code",
    "Codex",
    "Antigravity",
  ],
};
