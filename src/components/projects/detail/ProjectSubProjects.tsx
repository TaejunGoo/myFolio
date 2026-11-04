import { ExternalLink } from "lucide-react";

import type { SubProject } from "@/types";

import ProjectGallery from "./ProjectGallery";

interface ProjectSubProjectsProps {
  projects: SubProject[];
}

const ProjectSubProjects = ({ projects }: ProjectSubProjectsProps) => {
  return (
    <section aria-labelledby="sub-projects-heading" className="space-y-8 md:space-y-10">
      <h2 id="sub-projects-heading" className="text-xl font-semibold">개별 프로젝트</h2>
      <div className="space-y-16 md:space-y-24">
        {projects.map((project) => (
          <section
            key={project.id}
            id={project.id}
            aria-labelledby={`${project.id}-heading`}
            className="min-w-0 scroll-mt-24 space-y-5 md:space-y-6"
          >
            <div className="space-y-2">
              {project.subtitle && (
                <p className="text-xs font-semibold text-primary md:text-sm">
                  {project.subtitle}
                </p>
              )}
              <div className="flex min-w-0 flex-col gap-1 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
                <div className="min-w-0 space-y-2">
                  <h3 id={`${project.id}-heading`} className="text-2xl leading-snug font-semibold break-words break-keep md:text-3xl">
                    {project.title}
                  </h3>
                  {project.status === "in-progress" && (
                    <p className="text-sm text-muted-foreground">디자인·개발 진행 중</p>
                  )}
                  {project.status === "discontinued" && (
                    <p className="text-sm text-muted-foreground">서비스 종료</p>
                  )}
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-5 lg:max-w-[45%] lg:justify-end">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 max-w-full items-center gap-1.5 rounded-sm py-2 text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                        aria-label={`${project.title} ${link.label} (새 탭)`}
                      >
                        {link.label}
                        <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {project.statusDescription && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.statusDescription}
                </p>
              )}
            </div>

            {project.images && (
              <ProjectGallery images={project.images} title={project.title} presentation="showcase" />
            )}

            <div className="min-w-0 space-y-3">
              <h4 className="text-base font-semibold md:text-lg">프로젝트 소개</h4>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary">
                {project.details.map((detail) => (
                  <li key={detail} className="pl-1">{detail}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default ProjectSubProjects;
