export const HeaderActions = () => {
  return (
    <div className="flex items-center gap-x-2.5">
      <a
        href="/login"
        className="text-xs font-medium tracking-[0.25px] uppercase font-roboto_mono hidden md:flex px-3 py-2 text-zinc-50 hover:bg-white/20 rounded-lg transition-colors"
      >
        Log In
      </a>
      <a
        href="/sign-up"
        className="text-xs font-medium items-center bg-white text-black gap-x-1 flex uppercase px-[18px] py-3 rounded-lg font-roboto_mono hover:bg-white/90 transition-colors"
      >
        <span className="tracking-[0.25px]">Get Started</span>
        <img
          src="https://c.animaapp.com/mkljcxilr9L25K/assets/68acbf05f9c3214369b19570_ArrowRight.svg"
          alt="ArrowRight"
          className="w-[15px]"
        />
      </a>
    </div>
  );
};
