"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/shared/utils/cn";

import { mainSitemap, detailSitemap } from "./sitemap";

interface NavProps {
  onNavigate?: () => void;
  direction?: "horizontal" | "vertical";
}

export const Nav = ({ onNavigate, direction = "horizontal" }: NavProps) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const isDetailPage = pathname.startsWith("/projects/");
  const currentSitemap = isMainPage ? mainSitemap : detailSitemap;

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // 메인 페이지에서만 섹션 관찰
    if (!isMainPage) return;

    const sections = mainSitemap.map((item) => item.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isMainPage]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 메인 페이지의 섹션 앵커만 smooth scroll
    if (isMainPage && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }

    onNavigate?.();
  };

  const isActive = (href: string) => {
    if (isMainPage) {
      return activeSection === href;
    } else {
      // 상세 페이지에서는 활성화 표시 안 함 (Back 버튼이므로)
      return false;
    }
  };

  return (
    <nav
      className={cn(
        "flex gap-6",
        direction === "horizontal" ? "flex-row items-center" : "flex-col items-start",
      )}
      aria-label="Main navigation"
    >
      {currentSitemap.map((item) => {
        const active = isActive(item.href);

        return isMainPage ? (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={cn(
              "relative font-medium transition-all duration-300",
              active
                ? "text-blue-600 dark:text-blue-400"
                : "text-foreground/70 hover:text-foreground",
            )}
          >
            {item.label}
            {active && (
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500" />
            )}
          </a>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={cn(
              "relative font-medium transition-all duration-300",
              active
                ? "text-blue-600 dark:text-blue-400"
                : "text-foreground/70 hover:text-foreground",
            )}
          >
            {item.label}
            {active && (
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
