import type { ProjectDetailData } from "@/components/main/projects/types";
import { Separator } from "@/components/ui/separator";

import ProjectCustomSection from "./ProjectCustomSection";
import ProjectHeader from "./ProjectHeader";
import ProjectHeroImage from "./ProjectHeroImage";
import ProjectHighlights from "./ProjectHighlights";
import ProjectOverview from "./ProjectOverview";
import ProjectRole from "./ProjectRole";
import ProjectStack from "./ProjectStack";

interface ProjectDetailProps {
  project: ProjectDetailData;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
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
    </article>
  );
};

export default ProjectDetail;
