import About from "@/components/main/about";
import Hero from "@/components/main/hero/Hero";
import Projects from "@/components/main/projects";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Separator className="container mx-auto my-20 border-dotted" />
      <Projects />
      <p className="h-[9999px] p-0">zz</p>
      <hr />
    </main>
  );
};
export default Home;

