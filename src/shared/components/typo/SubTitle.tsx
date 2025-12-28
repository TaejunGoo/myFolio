
import { cn } from "@/shared/utils";

interface SubTitleProps {
  title: string;
  desc?: string;
  // hLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const SubTitle = ({ title, desc, className }: SubTitleProps) => {
  return (
    <div className={cn("mb-5", className)}>
      <h2 className="text-2xl font-bold text-foreground md:text-4xl">{title}</h2>
      {desc && <p className="mt-1 text-base text-gray-500">{desc}</p>}
    </div>
  );
};

export default SubTitle;
