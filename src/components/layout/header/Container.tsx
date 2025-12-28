import { cn } from "@/shared/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn(className, "container mx-auto px-5")}>{children}</div>
  );
};
export default Container;
