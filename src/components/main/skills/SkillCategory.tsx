import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "@/shared/components/tech/TechBadge";
import { cn } from "@/shared/utils";

import type { SkillCategoryProps } from "./types";

/**
 * SkillCategory Component
 *
 * 개별 스킬 카테고리를 카드 형태로 렌더링하는 컴포넌트
 *
 * Features:
 * - 깔끔한 카드 디자인 with subtle background
 * - Core/Data & UX: 단순 스킬 배지 목록 표시
 * - Tech Stack: 하위 카테고리별로 그룹화하여 표시
 * - Semantic HTML (ul/li 구조)
 * - 다크모드 자동 대응
 *
 * @param category - 스킬 카테고리 데이터
 * @param className - 추가 CSS 클래스
 */
const SkillCategory = ({ category, className }: SkillCategoryProps) => {
  const hasSubCategories = "subCategories" in category;

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{category.title}</CardTitle>
        {category.description && (
          <CardDescription>{category.description}</CardDescription>
        )}
      </CardHeader>

      <CardContent>
        {hasSubCategories ? (
          <div className="space-y-5">
            {category.subCategories.map((subCategory, index) => (
              <div key={subCategory.id} className={cn("space-y-2.5", index > 0 && "pt-1")}>
                <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {subCategory.title}
                </h4>
                <ul className="flex flex-wrap gap-1.5">
                  {subCategory.skills.map((skill) => (
                    <li key={skill} className="list-none">
                      <TechBadge name={skill} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="flex flex-wrap gap-1.5">
            {category.skills.map((skill) => (
              <li key={skill} className="list-none">
                <TechBadge name={skill} />
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default SkillCategory;
