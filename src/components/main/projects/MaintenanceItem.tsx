import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export interface MaintenanceItemProps {
  name: string;
  logoUrl?: string;
  period: string;
  description: string;
}

const MaintenanceItem = ({ name, logoUrl, period, description }: MaintenanceItemProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div>
          {logoUrl ? (
            <img src={logoUrl} alt={name} className="size-8 rounded-md object-cover" />
          ) : (
            <div className="flex size-8 items-center justify-center rounded-md bg-muted">
              <span className="text-sm font-medium text-muted-foreground">{name.charAt(0)}</span>
            </div>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <div className="max-w-[200px] py-1">
          <div className="flex flex-col">
            <span className="text-lg font-bold">{name}</span>
            <span className="text-xs text-muted-foreground">{period}</span>
          </div>
          <p className="mt-2 break-all">{description}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default MaintenanceItem;
