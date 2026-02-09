import Container from "./Container";
import HeaderActions from "./HeaderActions";
import NameCard from "./NameCard";
import Nav from "./Nav";

export const DesktopHeader = () => {
  return (
    <div className="relative hidden h-[72px] md:block">
      <Container className="h-full">
        <div className="grid size-full grid-cols-3 items-center">
          <div className="flex justify-start">
            <NameCard />
          </div>
          <div className="flex justify-center">
            <Nav />
          </div>
          <div className="flex justify-end">
            <HeaderActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DesktopHeader;
