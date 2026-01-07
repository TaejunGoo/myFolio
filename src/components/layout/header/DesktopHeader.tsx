import Container from "./Container";
import HeaderActions from "./HeaderActions";
import NameCard from "./NameCard";
import Nav from "./Nav";

export const DesktopHeader = () => {
  return (
    <div className="relative hidden md:block">
      <Container>
        <div className="grid w-full grid-cols-3 items-center py-4">
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
