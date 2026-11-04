"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavigation } from "@/data/navigation";
import { cn, scrollToSection } from "@/shared/utils";

interface FooterLinksProps {
  className?: string;
}

export const FooterLinks = ({ className }: FooterLinksProps) => {
  const isMainPage = usePathname() === "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isMainPage && href.startsWith("#") && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      scrollToSection(targetId);
    }
  };

  return (
    <nav
      className={cn("flex flex-wrap items-center justify-center gap-6", className)}
      aria-label="푸터 내비게이션"
    >
      {mainNavigation.map((link) => (
        <Link
          key={link.href}
          href={isMainPage ? link.href : `/${link.href}`}
          onClick={(e) => handleClick(e, link.href)}
          className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground dark:text-foreground/70 dark:hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default FooterLinks;
