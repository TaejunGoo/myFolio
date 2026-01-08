import Container from "@/components/layout/header/Container";
import About from "@/components/main/about";
import Maintenance from "@/components/main/maintenance";
import Projects from "@/components/main/projects";
import Skills from "@/components/main/skills";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <main>
      <section id="about" className="pt-16 md:pt-20">
        <About />
      </section>
      <Container className="my-20">
        <Separator />
      </Container>
      <section id="projects" className="mb-20">
        <Projects />
      </section>
      <Container className="my-20">
        <Separator />
      </Container>
      <section id="maintenance" className="mb-20">
        <Maintenance />
      </section>
      <Container className="my-20">
        <Separator />
      </Container>
      <section id="skills" className="mb-40">
        <Skills />
      </section>
    </main>
  );
};
export default Home;

