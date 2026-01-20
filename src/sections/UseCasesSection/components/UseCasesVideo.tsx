import { useState, useRef, useEffect } from "react";
import { Pause } from "lucide-react";

interface UseCasesVideoProps {
  activeTab: number;
}

export const UseCasesVideo = ({ activeTab }: UseCasesVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPauseButton, setShowPauseButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Different video sources for each tab - using placeholder for now
  const videoSources = [
    "/video.mp4", // Video translation
    "/video.mp4", // Creative ads - you can change this later
    "/video.mp4", // Replace dialogue - you can change this later
    "/video.mp4", // Animation - you can change this later
  ];

  // Reset video when tab changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowPauseButton(false);
    }
  }, [activeTab]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowPauseButton(true);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowPauseButton(false);
      }
    }
  };

  return (
    <div className="static [align-items:normal] shadow-none box-content caret-black gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:shadow-[rgba(255,255,255,0.15)_0px_0px_0px_4px] md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[95%] md:max-w-[800px] md:mx-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-3xl">
      <div className="static box-content caret-black basis-auto grow-0 shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:basis-0 md:grow md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static box-content caret-black shrink min-h-0 min-w-0 w-auto md:relative md:aspect-[1.78571_/_1] md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:cursor-pointer" onClick={handleVideoClick}>
            <video 
              ref={videoRef}
              key={activeTab} 
              src={videoSources[activeTab]} 
              loop 
              preload="metadata" 
              playsInline 
              autoPlay 
              className="box-content caret-black h-auto object-contain align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            ></video>
          </div>
          {showPauseButton && (
            <div 
              className="static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] block flex-row shrink h-auto justify-normal gap-y-[normal] w-auto z-auto rounded-none left-auto top-auto md:absolute md:content-center md:items-center md:aspect-auto md:backdrop-blur-[5px] md:bg-zinc-300/60 md:box-border md:caret-transparent md:gap-x-2.5 md:flex md:flex-col md:shrink-0 md:h-8 md:justify-center md:left-[calc(50%_-_16px)] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[calc(49.9556%_-_16px)] md:w-8 md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[100px] md:cursor-pointer"
              onClick={handleVideoClick}
            >
              <Pause className="h-5 w-5 text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
