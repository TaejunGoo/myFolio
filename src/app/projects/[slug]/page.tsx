import { notFound } from "next/navigation";

import Container from "@/components/layout/header/Container";
import ProjectDetail from "@/components/projects/detail";
import { createProjectMetadata } from "@/data/shared";

import type { Metadata } from "next";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  // 빌드 타임에만 실행 (클라이언트 번들에서 제외)
  const { projectDetailData } = await import("@/data/projects");
  return projectDetailData.map((project) => ({
    slug: project.slug,
  }));
};

export const generateMetadata = async ({ params }: ProjectDetailPageProps): Promise<Metadata> => {
  const { slug } = await params;

  const { getProjectBySlug } = await import("@/data/projects");
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createProjectMetadata({
    title: project.title,
    description: project.description,
    slug: project.slug,
  });
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { slug } = await params;

  // 런타임에도 동적 import (SSG)
  const { getProjectBySlug } = await import("@/data/projects");
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
