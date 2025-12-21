import { cn } from "@/shared/utils";

interface SubTitleProps {
  children?: React.ReactNode;
  className?: string;
}
const SubTitle = ({ children, className }: SubTitleProps) => {
  return <h2 className={cn("text-2xl font-bold text-foreground md:text-4xl", className)}>{children}</h2>;
};
export default SubTitle;
