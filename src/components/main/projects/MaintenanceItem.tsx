import { format, parseISO } from "date-fns";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export interface MaintenanceItemProps {
  name: string;
  logoUrl?: string;
  periodStart: string;
  periodEnd?: string;
  description: string;
}

const MaintenanceItem = ({ name, logoUrl, periodStart, periodEnd, description }: MaintenanceItemProps) => {
  const formattedStart = format(parseISO(periodStart), "yyyy.MM");
  const formattedEnd = periodEnd ? format(parseISO(periodEnd), "yyyy.MM") : "현재";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center justify-center">
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoUrl} alt={name} className="h-12 w-auto rounded-sm bg-white object-contain p-2" />
          ) : (
            <div className="flex h-12 min-w-20 items-center justify-center rounded-md bg-muted px-4">
              <span className="text-sm font-medium text-muted-foreground">{name}</span>
            </div>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <div className="max-w-60 py-1">
          <div className="flex flex-col">
            <span className="text-lg font-bold">{name}</span>
            <span className="text-xs text-muted-foreground">{formattedStart} - {formattedEnd}</span>
          </div>
          <p className="mt-2 leading-relaxed break-keep">{description}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default MaintenanceItem;
