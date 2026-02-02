"use client";

import { footerNavLinks } from "@/data/shared/footer";
import { cn, scrollToSection } from "@/shared/utils";

interface FooterLinksProps {
  className?: string;
}

export const FooterLinks = ({ className }: FooterLinksProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      scrollToSection(targetId);
    }
  };

  return (
    <nav
      className={cn("flex flex-wrap items-center justify-center gap-6", className)}
      aria-label="Footer navigation"
    >
      {footerNavLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground dark:text-foreground/70 dark:hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default FooterLinks;
