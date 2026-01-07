import Container from "@/components/layout/header/Container";
import About from "@/components/main/about";
import Projects from "@/components/main/projects";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <main>
      <About />
      <Container className="my-20">
        <Separator />
      </Container>
      <Projects />
    </main>
  );
};
export default Home;

