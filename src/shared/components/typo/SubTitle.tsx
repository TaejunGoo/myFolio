
import type { ElementType } from "react";

import { cn } from "@/shared/utils";

interface SubTitleProps {
  title: string;
  desc?: string;
  hLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const SubTitle = ({ title, desc, hLevel = 2, className }: SubTitleProps) => {
  const HeadingTag: ElementType = `h${hLevel}`;

  return (
    <div className={cn("mb-5", className)}>
      <HeadingTag className="text-foreground text-2xl font-bold md:text-4xl">
        {title}
      </HeadingTag>
      {desc && <p className="mt-1 text-base text-gray-500">{desc}</p>}
    </div>
  );
};

export default SubTitle;
