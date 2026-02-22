import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { AdjacentProject } from "@/data/projects/projectDetails";

interface ProjectNavigationProps {
  prevProject: AdjacentProject | null;
  nextProject: AdjacentProject | null;
}

const ProjectNavigation = ({ prevProject, nextProject }: ProjectNavigationProps) => {
  return (
    <div className="mt-16 flex flex-col gap-4 md:gap-6" aria-label="Project navigation">
      {/* 1열: 이전/다음 프로젝트 카드 */}
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        {/* 이전 프로젝트 */}
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-border p-4 transition-all hover:bg-muted hover:ring-1 hover:ring-border active:scale-[0.98] md:p-6"
          >
            <ChevronLeft className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1" />
            <div className="min-w-0">
              <p className="text-[11px] font-medium tracking-wider text-muted-foreground/60 uppercase">Previous</p>
              <p className="truncate text-sm font-semibold md:text-base">{prevProject.title}</p>
            </div>
          </Link>
        ) : (
          <div className="rounded-xl border border-dashed border-border/50 bg-muted/20" />
        )}

        {/* 다음 프로젝트 */}
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex min-w-0 flex-1 flex-row-reverse items-center gap-3 rounded-xl border border-border p-4 text-right transition-all hover:bg-muted hover:ring-1 hover:ring-border active:scale-[0.98] md:p-6"
          >
            <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
            <div className="min-w-0 text-right">
              <p className="text-[11px] font-medium tracking-wider text-muted-foreground/60 uppercase">Next</p>
              <p className="truncate text-sm font-semibold md:text-base">{nextProject.title}</p>
            </div>
          </Link>
        ) : (
          <div className="rounded-xl border border-dashed border-border/50 bg-muted/20" />
        )}
      </div>

      {/* 2열: 목록으로 가기 버튼 (전체 너비) */}
      <Link
        href="/#projects"
        className="group flex w-full items-center justify-center gap-3 rounded-xl border border-border p-4 transition-all hover:bg-muted hover:ring-1 hover:ring-border active:scale-[0.98] md:p-6"
      >
        <LayoutGrid className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:scale-110" />
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold md:text-base">전체 프로젝트 목록으로</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectNavigation;
