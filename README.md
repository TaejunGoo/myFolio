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

### Environment Variables

챗봇 기능을 사용하려면 아래 환경 변수가 필요합니다.

```bash
OPENROUTER_API_KEY=your-openrouter-api-key
OPENROUTER_MODEL=deepseek/deepseek-v4-flash
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: in-memory rate limit tuning
CHAT_RATE_LIMIT_MAX_REQUESTS=8
CHAT_RATE_LIMIT_WINDOW_SECONDS=60
```

메모:
- `OPENROUTER_API_KEY`가 없으면 채팅 API는 `503`으로 응답합니다.
- rate limit은 요청 IP를 우선 사용하고 브라우저 익명 ID를 보조 수단으로 사용하며, 서버 프로세스 메모리에서 동작하는 best-effort 방식입니다.
- 분산 환경이나 인스턴스 재시작 시 카운터는 공유되지 않으며 초기화될 수 있습니다.

### Chatbot Notes

- 챗봇의 시스템 프롬프트는 `src/lib/chatbot/portfolio-context.md`를 서버에서 직접 읽어 주입합니다.
- 클라이언트는 Vercel AI SDK의 풍부한 메시지 구조를 내부적으로 사용하지만, 서버로 전송할 때는 text part만 남기도록 정규화합니다.
- 브라우저 새로고침 후 대화 히스토리는 유지되지 않습니다. 현재는 페이지가 살아 있는 동안의 메모리 상태만 사용합니다.
- 요청 검증은 `/api/chat`에서 수행되며, 아래 규칙을 적용합니다.
	- 사용자 단일 입력 상한: `CHAT_USER_INPUT_MAX_LENGTH` (기본 100자)
	- 개별 text part 상한: `CHAT_MESSAGE_TEXT_MAX_LENGTH` (기본 4000자)
	- 요청 전체 대화 텍스트 상한: `CHAT_TOTAL_INPUT_TEXT_MAX_LENGTH` (기본 12000자)
	- 요청 메시지 개수 상한: `CHAT_MAX_REQUEST_MESSAGES` (기본 24개)
	- 클라이언트 요청의 `system` role 금지
	- 마지막 메시지는 반드시 `user` role 이어야 함
- `CHAT_TOTAL_INPUT_TEXT_MAX_LENGTH`는 서버가 저장하는 누적 세션 길이가 아니라, 이번 요청 body에 포함된 전체 대화 텍스트 합을 기준으로 계산합니다.

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
└── AGENTS.md             # AI 개발 도구 공통 작업 가이드
```

## Features

- OpenRouter 기반 포트폴리오 Q&A 챗봇
- 스트리밍 응답 지원
- 브라우저별 익명 client id 기준 사용 제한
- text-only 요청 정규화 및 서버 입력 검증
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
