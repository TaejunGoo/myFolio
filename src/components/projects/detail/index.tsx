import { Separator } from "@/components/ui/separator";
import type { AdjacentProject } from "@/data/projects/projectDetails";
import type { ProjectDetailData } from "@/types";

import ProjectCustomSection from "./ProjectCustomSection";
import ProjectHeader from "./ProjectHeader";
import ProjectHeroImage from "./ProjectHeroImage";
import ProjectHighlights from "./ProjectHighlights";
import ProjectNavigation from "./ProjectNavigation";
import ProjectOverview from "./ProjectOverview";
import ProjectRole from "./ProjectRole";
import ProjectStack from "./ProjectStack";

interface ProjectDetailProps {
  project: ProjectDetailData;
  prevProject: AdjacentProject | null;
  nextProject: AdjacentProject | null;
}

const ProjectDetail = ({ project, prevProject, nextProject }: ProjectDetailProps) => {
  const {
    title,
    category,
    client,
    periodStart,
    periodEnd,
    projectLink,
    imageUrlAry,
    overview,
    role,
    stack,
    highlights,
    customSections,
  } = project;

  return (
    <article className="mx-auto max-w-3xl">
      <ProjectHeader
        title={title}
        category={category}
        client={client}
        periodStart={periodStart}
        periodEnd={periodEnd}
        projectLink={projectLink}
      />

      <div className="mt-8">
        <ProjectHeroImage imageUrlAry={imageUrlAry} title={title} />
      </div>

      <Separator className="my-8" />

      <div className="space-y-8">
        <ProjectOverview overview={overview} />

        <Separator />

        <ProjectRole role={role} />

        <Separator />

        <ProjectStack stack={stack} />

        {highlights && highlights.length > 0 && (
          <>
            <Separator />
            <ProjectHighlights highlights={highlights} />
          </>
        )}

        {customSections?.map((section, index) => (
          <div key={index}>
            <Separator />
            <div className="pt-8">
              <ProjectCustomSection section={section} />
            </div>
          </div>
        ))}
      </div>

      <Separator className="mt-8" />

      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
    </article>
  );
};

export default ProjectDetail;

