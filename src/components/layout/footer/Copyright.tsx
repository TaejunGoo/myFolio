import { footerInfo } from "./footerData";

interface CopyrightProps {
  className?: string;
}

export const Copyright = ({ className }: CopyrightProps) => {
  return (
    <div className={className}>
      <p className="text-center text-sm text-foreground/50 dark:text-foreground/60">
        {footerInfo.copyright}
      </p>
      <p className="mt-1 text-center text-xs text-foreground/40 dark:text-foreground/50">
        {footerInfo.madeWith}
      </p>
    </div>
  );
};

export default Copyright;
