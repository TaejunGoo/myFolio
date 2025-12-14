interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

const ProjectDetailPage = async ({ params }: ProjectDetailProps) => {
  const { slug } = await params;

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-4 text-3xl font-bold">Project: {slug}</h1>
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <main>
          <section className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">Overview</h2>
            <p>프로젝트 개요가 들어갑니다.</p>
          </section>
          {/* Role, Challenges, Solutions... */}
        </main>
        <aside className="rounded-lg border p-4">
          <h3 className="mb-2 font-semibold">Tech Stack</h3>
          <ul className="list-inside list-disc">
            <li>Next.js</li>
            <li>TypeScript</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};
export default ProjectDetailPage;
