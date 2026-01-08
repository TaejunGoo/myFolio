"use client";

import { cn } from "@/shared/utils/cn";

import { footerNavLinks } from "./footerData";

interface FooterLinksProps {
  className?: string;
}

export const FooterLinks = ({ className }: FooterLinksProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
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
