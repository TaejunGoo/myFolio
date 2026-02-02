"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getProjectBySlug } from "@/data/projects";
import { cn, scrollToSection } from "@/shared/utils";

import { mainSitemap, detailSitemap } from "./sitemap";

interface NavProps {
  onNavigate?: () => void;
  direction?: "horizontal" | "vertical";
}

export const Nav = ({ onNavigate, direction = "horizontal" }: NavProps) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const isDetailPage = pathname.startsWith("/projects/");
  
  // 프로젝트 상세 페이지인 경우 프로젝트 제목 가져오기
  const projectSlug = isDetailPage ? pathname.split("/").pop() : null;
  const currentProject = projectSlug ? getProjectBySlug(projectSlug) : null;
  
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
      scrollToSection(targetId);
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
      {isDetailPage && currentProject ? (
        // 프로젝트 상세 페이지: 프로젝트 제목 표시
        <span className="font-semibold text-foreground">
          {currentProject.title}
        </span>
      ) : (
        // 메인 페이지: 네비게이션 링크들 표시
        currentSitemap.map((item) => {
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
        }))}
    </nav>
  );
};

export default Nav;
