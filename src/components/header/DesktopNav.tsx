// import { ProductsDropdown } from "./ProductsDropdown";
import { NavLink } from "./NavLink";

export const DesktopNav = () => {
  return (
    <nav
      role="navigation"
      className="absolute items-center bg-white gap-x-1 flex flex-col justify-start opacity-0 gap-y-1 invisible w-full px-[27px] py-4 rounded-xl left-0 top-full md:absolute md:bg-transparent md:gap-x-2 md:flex-row md:opacity-100 md:gap-y-2 md:visible md:w-auto md:p-0 md:rounded-none md:left-1/2 md:-translate-x-1/2 md:top-auto"
    >
      {/* <ProductsDropdown /> */}
      <NavLink href="/">Home</NavLink>
      <NavLink href="/pricing">Pricing</NavLink>
      {/* <NavLink href="/resources">Resources</NavLink> */}
      <NavLink href="/login" className="block md:hidden">
        Log In
      </NavLink>
    </nav>
  );
};
