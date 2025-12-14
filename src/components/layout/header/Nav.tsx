import { Link } from "@/i18n/navigation";

import { sitemap } from "./sitemap";

export const Nav = () => {
  return (
    <nav className="flex space-x-4">
      {
        sitemap.map((item) => (
          <Link key={item.href} href={item.href} className="font-medium text-foreground hover:underline">
            {item.label}
          </Link>
        ))
      }
    </nav>
  );
};

export default Nav;
