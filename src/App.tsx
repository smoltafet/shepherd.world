import React from "react";

// Header Components
const Logo = () => {
  return (
    <div className="box-border caret-transparent w-auto md:w-[135px]">
      <a
        href="/"
        aria-label="home"
        className="relative text-zinc-800 box-border caret-transparent block float-left px-2.5 md:px-0"
      >
        <img
          src="https://c.animaapp.com/mkljcxilr9L25K/assets/68ace085523f69f53bf899cf_logo.svg"
          alt="logo"
          className="box-border caret-transparent block max-w-full md:inline-block"
        />
      </a>
    </div>
  );
};

const ProductsDropdown = () => {
  return (
    <div className="relative box-border caret-transparent invisible md:visible">
      <div
        className="relative text-black font-medium bg-transparent box-border caret-transparent gap-x-2 flex h-full justify-center tracking-[0.25px] max-w-max gap-y-2 text-center uppercase invisible mx-auto px-3 py-2 rounded-lg font-roboto_mono md:text-white md:font-normal md:bg-white/0 md:gap-x-3 md:justify-normal md:max-w-none md:gap-y-3 md:text-start md:visible md:mx-0 md:pr-8 hover:bg-white/20"
      >
        <div
          className="text-black text-xs font-medium self-center box-border caret-transparent leading-[18px] text-center invisible md:text-white md:text-start md:visible"
        >
          Products
        </div>
        <img
          src="https://c.animaapp.com/mkljcxilr9L25K/assets/icon-1.svg"
          alt="Icon"
          className="static text-black font-medium box-border caret-transparent h-4 text-center invisible w-4 mr-0 my-auto right-0 inset-y-0 md:absolute md:text-white md:font-normal md:text-start md:visible md:mr-2.5"
        />
      </div>
    </div>
  );
};

type NavLinkProps = {
  href: string;
  children: string;
  variant: string;
};

const NavLink = (props: NavLinkProps) => {
  return (
    <a
      href={props.href}
      className={`text-black text-xs font-medium bg-transparent box-border caret-transparent justify-center tracking-[0.25px] leading-[18px] text-center uppercase invisible px-0 py-2 rounded-lg font-roboto_mono md:text-white md:font-normal md:bg-white/0 md:justify-normal md:text-start md:visible md:px-3 hover:bg-white/20 ${props.variant}`}
    >
      {props.children}
    </a>
  );
};

const DesktopNav = () => {
  return (
    <nav
      role="navigation"
      className="absolute items-center bg-white box-border caret-transparent gap-x-1 flex flex-col float-none justify-start min-h-0 min-w-0 opacity-0 gap-y-1 invisible w-full px-[27px] py-4 rounded-xl left-0 top-full md:relative md:bg-transparent md:gap-x-2 md:flex-row md:float-right md:min-h-[auto] md:min-w-[auto] md:opacity-100 md:gap-y-2 md:visible md:w-auto md:p-0 md:rounded-none md:left-auto md:top-auto"
    >
      <ProductsDropdown />
      <NavLink href="/employers" variant="" children="For Employers" />
      <NavLink href="/resources" variant="" children="Resources" />
      <NavLink
        href="https://app.useorigin.com/authentication/login"
        variant="block min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0"
      >
        Log In
      </NavLink>
    </nav>
  );
};

const MobileMenuButton = () => {
  return (
    <div
      className="text-white box-border caret-transparent block min-h-[auto] min-w-[auto] overflow-hidden px-[9px] py-3 rounded-lg md:text-cyan-700 md:hidden md:min-h-0 md:min-w-0 md:overflow-visible md:p-0 md:rounded-none hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-lg hover:border-0 hover:border-none hover:border-white"
    >
      <div
        className="text-white bg-white box-border caret-transparent h-0.5 pointer-events-none origin-[0px_50%] w-5 md:text-cyan-700 md:bg-transparent md:h-auto md:pointer-events-auto md:origin-[50%_50%] md:w-auto hover:text-neutral-100 hover:bg-neutral-100 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
      ></div>
      <div
        className="text-white bg-white box-border caret-transparent h-0.5 pointer-events-none origin-[0px_50%] w-5 my-1 md:text-cyan-700 md:bg-transparent md:h-auto md:pointer-events-auto md:origin-[50%_50%] md:w-auto md:my-0 hover:text-neutral-100 hover:bg-neutral-100 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
      ></div>
      <div
        className="text-white bg-white box-border caret-transparent h-0.5 pointer-events-none origin-[0px_50%] w-5 md:text-cyan-700 md:bg-transparent md:h-auto md:pointer-events-auto md:origin-[50%_50%] md:w-auto hover:text-neutral-100 hover:bg-neutral-100 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
      ></div>
    </div>
  );
};

const HeaderActions = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-2.5 flex justify-center gap-y-2.5">
      <a
        href="https://app.useorigin.com/authentication/login"
        className="text-black text-xs font-medium box-border caret-transparent hidden justify-center tracking-[0.25px] leading-[18px] min-h-0 min-w-0 text-center uppercase px-0 py-2 rounded-lg font-roboto_mono md:text-zinc-50 md:font-normal md:flex md:justify-normal md:min-h-[auto] md:min-w-[auto] md:text-start md:px-3"
      >
        Log In
      </a>
      <a
        href="https://app.useorigin.com/sign-up/dtc"
        className="text-black text-xs font-medium items-center bg-white box-border caret-transparent gap-x-1 flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center max-w-full gap-y-1 uppercase px-[18px] py-3 rounded-lg font-roboto_mono md:[align-items:normal] md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:justify-normal hover:bg-white/90"
      >
        <div className="box-border caret-transparent tracking-[0.25px]">Get Started</div>
        <img
          src="https://c.animaapp.com/mkljcxilr9L25K/assets/68acbf05f9c3214369b19570_ArrowRight.svg"
          alt="ArrowRight"
          className="box-border caret-transparent max-w-full w-[15px]"
        />
      </a>
    </div>
  );
};

const HeaderContainer = () => {
  return (
    <div className="relative text-cyan-700 items-center box-border caret-transparent flex justify-between p-1 md:static md:pl-6">
      <Logo />
      <div className="items-center box-border caret-transparent flex basis-[0%] grow justify-start ml-1 md:[align-items:normal] md:justify-center md:ml-8">
        <DesktopNav />
        <MobileMenuButton />
      </div>
      <HeaderActions />
    </div>
  );
};

const Header = () => {
  return (
    <div
      role="banner"
      className="fixed backdrop-blur-xl bg-stone-950/10 box-border caret-transparent z-[99] mb-10 mx-[0%] rounded-xl top-4 inset-x-4 md:top-6 md:inset-x-6 before:accent-auto before:caret-transparent before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-suisseintltrial after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-suisseintltrial"
    >
      <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-white before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-suisseintltrial after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-suisseintltrial"></div>
      <HeaderContainer />
      <div className="absolute box-border caret-transparent hidden w-full overflow-hidden top-full inset-x-0"></div>
    </div>
  );
};
const HeroContent = () => {
    return (
      <div className="relative box-border caret-transparent max-w-[1200px] z-[2] mx-auto">
        <div className="box-border caret-transparent max-w-[980px] text-center mx-auto">
          <div className="items-start box-border caret-transparent flex justify-center">
            <div className="items-center bg-[linear-gradient(rgb(215,245,255),rgb(215,245,255))] box-border caret-transparent flex justify-center mb-6 px-2.5 py-[5px] rounded-lg">
              <p className="text-cyan-700 text-xs font-medium box-border caret-transparent leading-[16.2px] uppercase font-roboto_mono">
                $1 for 1 year — limited time
              </p>
            </div>
          </div>
          <h1 className="text-[40px] font-light box-border caret-transparent leading-9 mb-4 font-lyondisplay_app md:text-8xl md:leading-[86.4px] md:mb-6">
            <em className="text-[40px] italic box-border caret-transparent leading-9 md:text-8xl md:leading-[86.4px]">Own</em> your wealth.
          </h1>
          <div className="box-border caret-transparent max-w-[420px] mb-4 mx-auto md:mb-6">
            <p className="box-border caret-transparent font-suisseintl">
              Origin is your personal AI Financial Advisor.
            </p>
            <p className="text-white/60 font-light box-border caret-transparent font-suisseintl">
              Track your spending, investments, net worth and optimize your financial future—all in one place.
            </p>
          </div>
          <a
            href="https://app.useorigin.com/sign-up/dtc"
            className="text-black text-xs font-medium items-center bg-white box-border caret-transparent gap-x-1 inline-flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center max-w-full gap-y-1 uppercase px-[18px] py-3 rounded-lg font-roboto_mono md:[align-items:normal] md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:justify-normal hover:bg-white/90"
          >
            <div className="box-border caret-transparent tracking-[0.25px]">Get Started</div>
            <img
              src="https://c.animaapp.com/mkljcxilr9L25K/assets/68acbf05f9c3214369b19570_ArrowRight.svg"
              alt="ArrowRight"
              className="box-border caret-transparent max-w-full w-[15px]"
            />
          </a>
          <a
            href="https://app.useorigin.com/sign-up/dtc"
            className="relative text-zinc-50 items-center backdrop-blur-xl bg-white/10 shadow-[rgba(0,0,0,0.2)_0px_18px_20px_0px] box-border caret-transparent gap-x-5 flex justify-between max-w-none gap-y-5 w-full z-[2] mt-[30px] mx-auto pl-[25px] pr-[7px] py-[7px] rounded-[375px] md:max-w-[590px] md:mt-10 md:pl-8 md:pr-2.5 md:py-2.5 md:rounded-[1280px]"
          >
            <div className="text-white text-[13px] font-light box-border caret-transparent leading-[15.6px] font-suisseintl md:text-base md:leading-4 after:accent-auto after:caret-transparent after:text-white after:text-[13px] after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[15.6px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-suisseintl after:md:text-base after:md:leading-4">
              How have tariffs impacted m
            </div>
            <div className="items-center bg-white/20 box-border caret-transparent flex shrink-0 h-10 justify-center w-10 rounded-[375px] md:h-[60px] md:w-[60px] md:rounded-[1280px]">
              <img
                src="https://c.animaapp.com/mkljcxilr9L25K/assets/68acc0dd9b190be3a4886ccb_up-arrow.svg"
                alt="up-arrow"
                className="box-border caret-transparent max-w-full w-3.5 md:w-auto"
              />
            </div>
          </a>
          <div className="box-border caret-transparent max-w-[420px] mt-6 mb-0 mx-auto md:mb-6">
            <p className="text-white/60 font-light box-border caret-transparent font-suisseintl">
              Track everything. Ask anything.
            </p>
          </div>
          <div className="box-border caret-transparent max-w-[420px] mt-6 mb-0 mx-auto md:mb-6">
            <img
              src="https://c.animaapp.com/mkljcxilr9L25K/assets/68acd7a5e5cde3d99e192e5e_54389a561455c6d1a4fd45db9a022b82_certificate-img.svg"
              alt="certificate-img"
              className="box-border caret-transparent inline-block max-w-full"
            />
          </div>
        </div>
      </div>
    );
  };
  
  const Hero = () => {
    return (
      <div className="static box-border caret-transparent min-h-[1000px] md:relative md:min-h-0">
        <div className="relative items-center bg-[linear-gradient(rgba(15,16,17,0),rgb(15,16,17))] box-border caret-transparent flex justify-center min-h-[1000px] w-full z-10 overflow-hidden mx-auto pt-[100px] pb-[70px] px-6 md:pt-[180px] md:pb-[50px] md:px-[100px]">
          <HeroContent />
          <div className="absolute box-border caret-transparent h-full object-cover w-full z-[1] overflow-hidden inset-[0%]">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://cdn.prod.website-files.com/68acbc076b672f730e0c77b9%2F68bb73e8d95f81619ab0f106_Clouds1-poster-00001.jpg"
              className="absolute bg-cover box-border caret-transparent h-full object-cover w-full z-[-100] bg-center m-auto -inset-full"
            >
              <source
                src="https://cdn.prod.website-files.com/68acbc076b672f730e0c77b9/68bb73e8d95f81619ab0f106_Clouds1-transcode.mp4"
                type="video/mp4"
              />
              <source
                src="https://cdn.prod.website-files.com/68acbc076b672f730e0c77b9/68bb73e8d95f81619ab0f106_Clouds1-transcode.webm"
                type="video/webm"
              />
            </video>
            <div className="absolute bg-black/40 bg-[linear-gradient(0deg,rgb(15,16,17),rgba(15,16,17,0))] box-border caret-transparent inset-[0%] md:bg-transparent"></div>
          </div>
        </div>
      </div>
    );
  };
  
  // Main App Component
  export const App = () => {
    return (
      <div className="text-white text-base not-italic normal-nums font-normal accent-auto bg-stone-950 box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-suisseintltrial">
        <Header />
        <Hero />
      </div>
    );
  };
  