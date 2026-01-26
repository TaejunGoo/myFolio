import ScrollIndicator from "@/shared/components/scroll/ScrollIndicator";

import DesktopHeader from "./DesktopHeader";
import HeaderBackground from "./HeaderBackground";
import MobileHeader from "./MobileHeader";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full pt-[3px]">
      <HeaderBackground />
      <MobileHeader />
      <DesktopHeader />
      <ScrollIndicator />
    </header>
  );
};
