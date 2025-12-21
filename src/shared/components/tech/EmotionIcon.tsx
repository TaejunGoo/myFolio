import { cn } from "@/shared/utils";

interface EmotionIconProps {
  className?: string;
}
export const EmotionIcon = ({ className }: EmotionIconProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>👩‍🎤</div>
  );
};
