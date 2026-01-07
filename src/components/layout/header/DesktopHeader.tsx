import Nav from "./Nav";
import { ThemeToggleBtn } from "./ThemeToggleBtn";

export const DesktopHeader = () => {
  return (
    <div className="relative hidden md:block">
      <div className="flex w-full items-center justify-between p-4">
        <span className="text-2xl font-bold text-foreground">Header</span>
        <Nav />
        <div className="flex items-center gap-1">
          <ThemeToggleBtn />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
