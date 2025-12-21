import { Button } from "@/components/ui/button";
import SubTitle from "@/shared/components/typo/SubTitle";

const Projects = () => {
  return (
    <section className="container mx-auto">
      <SubTitle>Projects</SubTitle>
      <p>프로젝트 컴포넌트들...</p>
      <Button className="mt-4">프로젝트 더보기</Button>
    </section>
  );
};
export default Projects;
