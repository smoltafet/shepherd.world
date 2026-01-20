export const MobileMenuButton = () => {
  return (
    <button
      className="text-white block px-[9px] py-3 rounded-lg md:hidden hover:text-neutral-100"
      aria-label="Toggle menu"
    >
      <div className="flex flex-col gap-1">
        <div className="bg-white h-0.5 w-5"></div>
        <div className="bg-white h-0.5 w-5"></div>
        <div className="bg-white h-0.5 w-5"></div>
      </div>
    </button>
  );
};
