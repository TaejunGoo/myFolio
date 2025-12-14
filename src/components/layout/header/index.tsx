import DesktopHeader from "./DesktopHeader";
import HeaderBackground from "./HeaderBackground";
import MobileHeader from "./MobileHeader";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <HeaderBackground />
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};
