import { notFound } from "next/navigation";

import Container from "@/components/layout/header/Container";
import ProjectDetail from "@/components/projects/detail";
import { getProjectBySlug, projectDetailData } from "@/data/projectDetailData";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => {
  return projectDetailData.map((project) => ({
    slug: project.slug,
  }));
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-10">
      <Container>
        <ProjectDetail project={project} />
      </Container>
    </main>
  );
};

export default ProjectDetailPage;
