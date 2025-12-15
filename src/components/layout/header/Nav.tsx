import { Link } from "@/i18n/navigation";
import { cn } from "@/shared/utils/cn";

import { sitemap } from "./sitemap";

interface NavProps {
  onNavigate?: () => void;
  direction?: "horizontal" | "vertical";
}

export const Nav = ({ onNavigate, direction = "horizontal" }: NavProps) => {
  return (
    <nav 
      className={cn(
        "flex gap-4",
        direction === "horizontal" ? "flex-row items-center" : "flex-col items-start",
      )}
      aria-label="Main navigation"
    >
      {sitemap.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="font-medium text-foreground hover:underline"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
