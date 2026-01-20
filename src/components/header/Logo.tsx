export const Logo = () => {
  return (
    <div className="w-auto md:w-[80px]">
      <a href="/" aria-label="home" className="block px-2.5 md:px-0">
        <img
          src="/whitelogo.png"
          alt="Shepherd logo"
          className="block max-w-full md:inline-block h-8 md:h-10"
        />
      </a>
    </div>
  );
};
