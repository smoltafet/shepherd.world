export const HeroContent = () => {
  return (
    <div className="relative max-w-[1200px] z-[2] mx-auto -mt-8 md:-mt-16">
      <div className="max-w-[980px] text-center mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center justify-center mb-6 px-2.5 py-[5px] rounded-lg bg-[linear-gradient(rgb(215,245,255),rgb(215,245,255))]">
            <p className="text-cyan-700 text-xs font-medium leading-[16.2px] uppercase font-roboto_mono">
              Multilingual video publishing made simple
            </p>
          </div>
        </div>
        <h1 className="text-[40px] font-light leading-9 mb-4 font-lyondisplay_app md:text-8xl md:leading-[86.4px] md:mb-6">
          <em className="text-[40px] italic leading-9 md:text-8xl md:leading-[86.4px]">
            Publish
          </em>{" "}
          globally. Upload once.
        </h1>
        <div className="max-w-[420px] mb-4 mx-auto md:mb-6">
          <p className="font-suisseintl">
            Upload once. We handle translation, lip-sync, and formatting for
            global audiences.
          </p>
        </div>
        <a
          href="/sign-up"
          className="text-xs font-medium items-center bg-white text-black gap-x-1 inline-flex uppercase px-[18px] py-3 rounded-lg font-roboto_mono hover:bg-white/90 transition-colors"
        >
          <span className="tracking-[0.25px]">Get Started</span>
          <img
            src="https://c.animaapp.com/mkljcxilr9L25K/assets/68acbf05f9c3214369b19570_ArrowRight.svg"
            alt="ArrowRight"
            className="w-[15px]"
          />
        </a>
      </div>
    </div>
  );
};
