import Container from "@/components/layout/header/Container";
import About from "@/components/main/about";
import Maintenance from "@/components/main/maintenance";
import Projects from "@/components/main/projects";
import Skills from "@/components/main/skills";
import { Separator } from "@/components/ui/separator";

const Home = async () => {
  // 동적 import로 데이터 로드 (서버에서만 실행, 클라이언트 번들에서 제외)
  const [{ projectsData }, { maintenanceData }, { skillsData }] = await Promise.all([
    import("@/data/projects"),
    import("@/data/maintenance"),
    import("@/data/skills"),
  ]);

  // slug가 있는 프로젝트와 없는 프로젝트 분리
  const featuredProjects = projectsData.filter((project) => project.slug);
  const otherProjects = projectsData.filter((project) => !project.slug);

  return (
    <main>
      <section id="about" className="pt-16 md:pt-20">
        <About
          projectsCount={projectsData.length}
          maintenanceCount={maintenanceData.length}
        />
      </section>
      <Container className="my-16 md:my-20">
        <Separator />
      </Container>
      <section id="projects">
        <Projects
          featuredProjects={featuredProjects}
          otherProjects={otherProjects}
        />
      </section>
      <Container className="my-16 md:my-20">
        <Separator />
      </Container>
      <section id="maintenance">
        <Maintenance items={maintenanceData} />
      </section>
      <Container className="my-16 md:my-20">
        <Separator />
      </Container>
      <section id="skills" className="mb-16 md:mb-20">
        <Skills data={skillsData} />
      </section>
    </main>
  );
};
export default Home;

