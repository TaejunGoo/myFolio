import { FaCode } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/shared/utils";

import { techMap } from "./tech-config";

import type { TechName } from "./tech-config";

interface TechBadgeProps {
  name: TechName | (string & {});
  className?: string;
  iconOnly?: boolean;
}

const TechBadge = ({ name, className, iconOnly = false }: TechBadgeProps) => {
  const config = techMap[name as TechName];
  const Icon = config?.icon || FaCode;
  const colorClass = config?.className || "bg-secondary text-secondary-foreground border-secondary/50";

  const badgeContent = !iconOnly ? (
    <Badge className={cn(colorClass, className)}>
      <Icon className={cn("size-3.5")} />
      {name}
    </Badge>
  ) : (
    <span className={cn(colorClass, "border-none bg-transparent", className)}>
      <Icon className="size-4" />
    </span>
  );

  if (!iconOnly) {
    return badgeContent;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {badgeContent}
      </TooltipTrigger>
      <TooltipContent>
        {name}
      </TooltipContent>
    </Tooltip>
  );
};

export default TechBadge;
