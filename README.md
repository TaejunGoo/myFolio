# myFolio Portfolio

Next.js 16 기반의 개인 포트폴리오 웹사이트입니다. React 19, TypeScript, Tailwind CSS v4를 사용하여 구축되었으며, 애니메이션 효과와 반응형 디자인, 다크모드를 지원합니다.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, CSS Variables (OkLCH)
- **UI Components**: shadcn/ui, Radix UI
- **Animation**: Framer Motion, Swiper
- **Theme**: next-themes (Dark Mode)
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18 이상
- pnpm

### Installation

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### Available Scripts

```bash
pnpm dev          # 개발 서버 실행 (포트 3000)
pnpm build        # 프로덕션 빌드
pnpm start        # 프로덕션 서버 실행
pnpm lint         # ESLint 실행
pnpm lint:fix     # ESLint 자동 수정
```

## Project Structure

```
myFolio/
├── src/
│   ├── app/              # Next.js App Router 페이지
│   ├── components/
│   │   ├── ui/           # shadcn/ui 기본 컴포넌트
│   │   ├── layout/       # 레이아웃 컴포넌트 (Header 등)
│   │   └── main/         # 페이지 섹션 컴포넌트
│   ├── shared/           # 공유 유틸리티, 프로바이더
│   ├── data/             # 정적 데이터 (프로젝트, 스킬 등)
│   └── types/            # TypeScript 타입 정의
├── public/
│   └── images/           # 이미지 에셋
└── CLAUDE.md             # Claude Code 작업 가이드
```

## Features

- 애니메이션 효과가 적용된 Hero 섹션
- 프로젝트 쇼케이스 (상세 페이지 지원)
- 유지보수 이력 표시
- 스킬 및 역량 섹션
- 완전한 반응형 디자인
- 다크모드 지원
- SEO 최적화
- WebP 이미지 최적화

## Content Management

### 새 프로젝트 추가

1. `src/data/projects/projects.ts`에 프로젝트 정보 추가
2. `public/images/projects/`에 이미지 업로드
3. 상세 페이지가 필요한 경우 `src/data/projects/projectDetails.ts`에 추가

### 새 기술 배지 추가

`src/shared/components/tech/tech-config.ts`의 `TECH_CONFIG`에 아이콘, 라벨, 스타일 추가

### 새 페이지 추가

`src/app/` 디렉토리에 폴더 생성 후 `page.tsx` 파일 추가

## Code Standards

- **Quotes**: Double quotes
- **Indentation**: 2 spaces
- **Semicolons**: Always
- **Components**: Arrow function components
- **Import Order**: React → External → Internal (`@/**`)

## License

개인 포트폴리오 프로젝트입니다.
