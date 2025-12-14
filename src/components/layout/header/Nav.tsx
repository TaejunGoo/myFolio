import { Link } from "@/i18n/navigation";

import { sitemap } from "./sitemap";

interface NavProps {
  onNavigate?: () => void;
}

export const Nav = ({ onNavigate }: NavProps) => {
  return (
    <nav className="flex space-x-4">
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
