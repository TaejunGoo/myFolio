"use client";

import Container from "@/components/layout/header/Container";
import FadeInView from "@/shared/components/motion/FadeInView";
import SubTitle from "@/shared/components/typo/SubTitle";
import { cn } from "@/shared/utils";
import type { SkillsData, SkillsSectionProps } from "@/types";

import SkillCategory from "./SkillCategory";

/**
 * SkillsSection Component
 *
 * 포트폴리오의 Skills 섹션을 렌더링하는 메인 컨테이너 컴포넌트
 *
 * Features:
 * - 2개의 메인 카테고리 표시 (Core, Data & UX)
 * - Card 기반의 깔끔한 디자인
 * - Framer Motion을 활용한 부드러운 entrance 애니메이션
 * - 완벽한 반응형 그리드 레이아웃 (모바일 1열, 데스크톱 2열)
 * - 카테고리별 순차 애니메이션 (stagger effect)
 * - 데이터 주입 가능 (기본값: skillsData)
 *
 * Note: Tech Stack은 About 섹션에서 표시됨
 *
 * Responsive Breakpoints:
 * - Mobile: < 768px (1 column)
 * - Desktop: >= 768px (2 columns)
 *
 * Animation Strategy:
 * - Fade-in + Slide-up combination
 * - Stagger delay: 100ms between cards
 * - Viewport trigger: -100px margin for early activation
 * - Once: true (animation plays only once for performance)
 *
 * Architecture:
 * - Client Component (Framer Motion requirement)
 * - Data managed in separate file (skills-data.ts)
 * - Reusable SkillCategory card component
 * - Consistent spacing with 8px grid system
 *
 * @param data - 스킬 섹션 데이터
 * @param className - 추가 CSS 클래스
 */
const SkillsSection = ({ data, className }: SkillsSectionProps & { data: SkillsData }) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>
        {/* 섹션 제목 */}
        <SubTitle title={data.title} desc={data.description} className="mb-10 md:mb-14" />

        {/*
          반응형 카테고리 그리드
          - Mobile: 1 column, gap-6
          - Desktop (md): 2 columns, gap-6
          - Equal height cards with h-full in SkillCategory
        */}
        <div className="grid gap-6 md:grid-cols-2">
          {data.categories.map((category, index) => (
            <FadeInView key={category.id} delay={index * 0.1} className="h-full">
              <SkillCategory category={category} />
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;

/**
 * Export types for external usage
 */
export type { SkillsSectionProps, SkillCategory, SkillsData } from "@/types";
