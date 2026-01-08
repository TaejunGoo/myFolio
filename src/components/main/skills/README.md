# Skills Section Components

포트폴리오의 "역량(Skills & Stack)" 섹션 컴포넌트

## 디렉토리 구조

```
src/components/main/skills/
├── index.tsx              # SkillsSection (메인 컨테이너)
├── SkillCategory.tsx      # 카테고리별 스킬 그룹 컴포넌트
├── types.ts               # TypeScript 타입 정의
├── data/
│   └── skills-data.ts     # 스킬 데이터
└── README.md
```

## 컴포넌트 구조

### 1. SkillsSection (index.tsx)
- **역할**: 전체 Skills 섹션을 렌더링하는 메인 컨테이너
- **타입**: Client Component (Framer Motion 사용)
- **특징**:
  - 3개의 메인 카테고리 표시 (Core, Data & UX, Tech Stack)
  - 스크롤 애니메이션 (Framer Motion)
  - 반응형 그리드 레이아웃 (모바일 1열, 태블릿 2열, 데스크톱 3열)
  - 데이터 주입 가능 (기본값: skillsData)

### 2. SkillCategory
- **역할**: 개별 스킬 카테고리를 렌더링
- **특징**:
  - Core/Data & UX: 단순 스킬 배지 목록
  - Tech Stack: 하위 카테고리별 그룹화
  - TechBadge 컴포넌트 재사용

### 3. TechBadge (재사용)
- **위치**: `@/shared/components/tech/TechBadge`
- **역할**: 개별 스킬을 배지 형태로 표시
- **특징**: 아이콘, 색상 자동 매핑 (tech-config.ts)

## 데이터 구조

### SkillsData
```typescript
interface SkillsData {
  title: string;              // 섹션 제목
  description?: string;       // 섹션 부제
  categories: SkillCategory[];
}
```

### SkillCategory (Union Type)
```typescript
type SkillCategory = SimpleSkillCategory | TechStackCategory;

// Core, Data & UX용
interface SimpleSkillCategory {
  id: string;
  title: string;
  type: "Core" | "Data & UX";
  description?: string;
  skills: SkillItem[];
}

// Tech Stack용 (하위 카테고리 포함)
interface TechStackCategory {
  id: string;
  title: string;
  type: "Tech Stack";
  description?: string;
  subCategories: TechStackSubCategory[];
}

interface TechStackSubCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}
```

## 사용 예시

### 기본 사용법
```tsx
import SkillsSection from "@/components/main/skills";

export default function Page() {
  return <SkillsSection />;
}
```

### 커스텀 데이터 사용
```tsx
import SkillsSection from "@/components/main/skills";
import type { SkillsData } from "@/components/main/skills";

const customSkillsData: SkillsData = {
  title: "My Skills",
  description: "What I can do",
  categories: [
    // ... 커스텀 카테고리
  ],
};

export default function Page() {
  return <SkillsSection data={customSkillsData} />;
}
```

## 데이터 수정 방법

실제 스킬 데이터로 교체하려면 `data/skills-data.ts` 파일을 수정하세요:

```typescript
// src/components/main/skills/data/skills-data.ts

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
        // 여기에 실제 Core 스킬 추가
        "문제 해결",
        "빠른 학습",
        // ...
      ],
    },
    // ... 다른 카테고리
  ],
};
```

## 스타일링 커스터마이징

### 전체 섹션 스타일링
```tsx
<SkillsSection className="bg-muted/50 py-32" />
```

### 개별 카테고리 스타일링
```tsx
// SkillCategory.tsx 내부에서 className prop 활용
<SkillCategory category={category} className="custom-class" />
```

## 애니메이션 설정

현재 Framer Motion 설정:
- **Initial**: opacity: 0, y: 20
- **Animate**: opacity: 1, y: 0
- **Duration**: 0.5초
- **Delay**: 각 카테고리별 0.1초씩 증가
- **Viewport**: 화면에 들어올 때 한 번만 실행

애니메이션 수정은 `index.tsx`의 `motion.div` 설정을 변경하세요.

## Performance Considerations

1. **Client Component**: Framer Motion 사용으로 인해 Client Component로 설정
2. **데이터 분리**: skills-data.ts를 별도 파일로 분리하여 관리 용이
3. **재사용성**: TechBadge 컴포넌트 재사용으로 코드 중복 최소화
4. **Type Safety**: 모든 데이터 구조에 TypeScript 인터페이스 적용

## 확장 가능성

### 새로운 카테고리 추가
```typescript
// types.ts에 새로운 타입 추가
export type SkillCategoryType = "Core" | "Data & UX" | "Tech Stack" | "New Category";

// skills-data.ts에 새로운 카테고리 추가
categories: [
  // ... 기존 카테고리
  {
    id: "new-category",
    title: "New Category",
    type: "New Category",
    skills: [...],
  },
]
```

### 아이콘이 없는 스킬 추가
TechBadge는 tech-config.ts에 정의되지 않은 스킬도 처리 가능:
- 정의된 스킬: 아이콘 + 색상 표시
- 정의되지 않은 스킬: 기본 아이콘 + 기본 색상 표시

새로운 스킬에 아이콘을 추가하려면:
```typescript
// src/shared/components/tech/tech-config.ts

export const techMap: Record<TechName, TechConfig> = {
  // ... 기존 스킬
  "New Skill": {
    icon: SomeIcon,
    className: "bg-color-500/10 text-color-600 border-color-500/20",
  },
};
```

## TODO

- [ ] skills-data.ts의 실제 스킬 데이터로 교체
- [ ] 스킬 레벨 표시 기능 추가 (선택적)
- [ ] 스킬 필터링 기능 추가 (선택적)
- [ ] 다크모드 색상 최적화 테스트
