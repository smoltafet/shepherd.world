type NavLinkProps = {
  href: string;
  children: string;
  className?: string;
};

export const NavLink = ({ href, children, className = "" }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={`text-xs font-medium tracking-[0.25px] uppercase font-roboto_mono px-3 py-2 rounded-lg transition-colors md:text-white md:font-normal hover:bg-white/20 ${className}`}
    >
      {children}
    </a>
  );
};
