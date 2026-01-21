import { NavLink } from "./NavLink";
import "./DesktopNav.css";

export const DesktopNav = () => {
  return (
    <nav role="navigation" className="desktop-nav">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/pricing">Pricing</NavLink>
      <NavLink href="/login" className="mobile-only">
        Log In
      </NavLink>
    </nav>
  );
};
