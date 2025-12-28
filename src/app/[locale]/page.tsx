import Container from "@/components/layout/header/Container";
import About from "@/components/main/about";
import Hero from "@/components/main/hero/Hero";
import Projects from "@/components/main/projects";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Container className="my-20">
        <Separator />
      </Container>
      <Projects />
    </main>
  );
};
export default Home;

