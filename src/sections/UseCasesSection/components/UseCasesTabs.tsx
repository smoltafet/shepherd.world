import { Video, MessageSquare, Sparkles } from "lucide-react";

interface UseCasesTabsProps {
  activeTab: number;
  onTabClick: (index: number) => void;
}

export const UseCasesTabs = ({ activeTab, onTabClick }: UseCasesTabsProps) => {
  const tabs = [
    { id: 0, label: "Video translation", icon: Video },
    { id: 1, label: "Creative ads", icon: null },
    { id: 2, label: "Replace dialogue", icon: MessageSquare },
    { id: 3, label: "Animation", icon: Sparkles },
  ];

  return (
    <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal gap-y-[normal] transform-none w-auto left-auto top-auto md:absolute md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-12 md:flex md:shrink-0 md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-12 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:w-min md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-0">
      {tabs.map((tab, index) => {
        const isActive = activeTab === index;
        const IconComponent = tab.icon;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabClick(index)}
            className="static [align-items:normal] box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[140px] md:cursor-pointer md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] transition-opacity hover:opacity-80"
          >
            <div className={`static ${index === 0 ? 'text-white' : 'text-black'} box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:text-white md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]`}>
              {IconComponent ? (
                <IconComponent className="h-5 w-5 text-white" />
              ) : index === 1 ? (
                <div className="box-content caret-black h-auto w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <img src="https://c.animaapp.com/mkm00ih7cXENMH/assets/icon-6.svg" alt="Icon" className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                </div>
              ) : index === 2 ? (
                <div className="box-content caret-black fill-black h-auto w-auto md:aspect-square md:box-border md:caret-transparent md:fill-gray-400 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <img src="https://c.animaapp.com/mkm00ih7cXENMH/assets/icon-7.svg" alt="Icon" className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                </div>
              ) : (
                <div className="box-content caret-black fill-black h-auto w-auto md:aspect-square md:box-border md:caret-transparent md:fill-gray-400 md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <img src="https://c.animaapp.com/mkm00ih7cXENMH/assets/icon-8.svg" alt="Icon" className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                </div>
              )}
            </div>
            <div className="static box-content caret-black block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <p className={`text-black text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-base md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[20px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-satoshi ${isActive ? 'md:text-white' : 'md:text-gray-400'}`}>
                {tab.label}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
