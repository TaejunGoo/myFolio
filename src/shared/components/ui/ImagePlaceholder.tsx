import { Image as ImageIcon } from "lucide-react";

import { cn } from "@/shared/utils";

interface ImagePlaceholderProps {
  className?: string;
  iconClassName?: string;
  text?: string;
}

const ImagePlaceholder = ({ className, iconClassName, text }: ImagePlaceholderProps) => {
  return (
    <div
      className={cn(
        "flex size-full flex-col items-center justify-center gap-2 bg-muted text-muted-foreground",
        className
      )}
      aria-label="Image placeholder"
    >
      <ImageIcon className={cn("size-10 opacity-20", iconClassName)} />
      {text && <span className="text-sm font-medium opacity-40">{text}</span>}
    </div>
  );
};

export default ImagePlaceholder;
