"use client";

import Container from "@/components/layout/header/Container";
import FadeInView from "@/shared/components/motion/FadeInView";
import SubTitle from "@/shared/components/typo/SubTitle";
import { cn } from "@/shared/utils";
import type { SkillsData, SkillsSectionProps } from "@/types";

import SkillCategory from "./SkillCategory";

const SkillsSection = ({ data, className }: SkillsSectionProps & { data: SkillsData }) => {
  return (
    <section className={cn(className)}>
      <Container>
        <SubTitle title={data.title} desc={data.description} />
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
export type { SkillsSectionProps, SkillCategory, SkillsData } from "@/types";
