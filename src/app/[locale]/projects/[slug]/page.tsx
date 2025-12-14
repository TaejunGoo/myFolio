interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

const ProjectDetailPage = async ({ params }: ProjectDetailProps) => {
  const { slug } = await params;

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-4 text-3xl font-bold">P: {slug}</h1>
    </div>
  );
};
export default ProjectDetailPage;
