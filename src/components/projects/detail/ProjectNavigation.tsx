import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import type { AdjacentProject } from "@/data/projects/projectDetails";

interface ProjectNavigationProps {
  prevProject: AdjacentProject | null;
  nextProject: AdjacentProject | null;
}

const ProjectNavigation = ({ prevProject, nextProject }: ProjectNavigationProps) => {
  if (!prevProject && !nextProject) return null;

  return (
    <nav className="mt-10 flex items-stretch justify-between gap-4" aria-label="Project navigation">
      {prevProject ? (
        <Link
          href={`/projects/${prevProject.slug}`}
          className="group flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
        >
          <ChevronLeft className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">이전 프로젝트</p>
            <p className="truncate text-sm font-medium">{prevProject.title}</p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextProject ? (
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group flex min-w-0 flex-1 items-center justify-end gap-2 rounded-lg border border-border p-4 text-right transition-colors hover:bg-muted"
        >
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">다음 프로젝트</p>
            <p className="truncate text-sm font-medium">{nextProject.title}</p>
          </div>
          <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
};

export default ProjectNavigation;
