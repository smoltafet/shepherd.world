import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileMenuButton } from "./MobileMenuButton";
import { HeaderActions } from "./HeaderActions";

export const Header = () => {
  return (
    <header
      role="banner"
      className="fixed backdrop-blur-xl bg-stone-950/10 z-[99] rounded-xl top-4 inset-x-4 md:top-6 md:inset-x-6"
    >
      <div className="relative flex items-center justify-between p-1 md:static md:pl-6">
        <Logo />
        <div className="flex items-center grow justify-center ml-1 md:ml-0 md:relative">
          <DesktopNav />
          <MobileMenuButton />
        </div>
        <HeaderActions />
      </div>
    </header>
  );
};
