import { Code, Users, Check } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/shared/utils";
import type { SkillCategoryProps } from "@/types";

const SkillCategory = ({ category, className }: SkillCategoryProps) => {
  // 카테고리별 아이콘 및 색상
  const getCategoryConfig = () => {
    if (category.type === "Core") {
      return {
        icon: Code,
        iconBg: "bg-blue-500/10 dark:bg-blue-400/10",
        iconColor: "text-blue-600 dark:text-blue-400",
      };
    } else {
      return {
        icon: Users,
        iconBg: "bg-purple-500/10 dark:bg-purple-400/10",
        iconColor: "text-purple-600 dark:text-purple-400",
      };
    }
  };

  const { icon: Icon, iconBg, iconColor } = getCategoryConfig();

  return (
    <Card
      className={cn(
        "group relative h-full transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20",
        className,
      )}
    >
      <CardHeader>
        {/* 아이콘 + 제목 */}
        <div className="flex items-start gap-3">
          <div className={cn("mt-0.5 rounded-lg p-2", iconBg)}>
            <Icon className={cn("size-5", iconColor)} />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{category.title}</CardTitle>
            {category.description && (
              <CardDescription className="mt-1">{category.description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2.5">
          {category.skills.map((skill) => (
            <li key={skill} className="flex items-start gap-2.5">
              <Check className={cn("mt-0.5 size-4 shrink-0", iconColor)} />
              <span className="text-sm leading-relaxed text-foreground/90">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillCategory;
