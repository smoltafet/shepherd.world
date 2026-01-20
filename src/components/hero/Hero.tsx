import { useState, useRef } from "react";
import { HeroContent } from "./HeroContent";

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="static min-h-[1000px] md:relative md:min-h-0">
      <div className="relative flex items-center justify-center min-h-[1000px] w-full z-10 overflow-hidden mx-auto pt-[40px] pb-[20px] px-6 md:pt-[80px] md:pb-[20px] md:px-[100px] bg-[linear-gradient(rgba(15,16,17,0),rgb(15,16,17))]">
        <HeroContent />
        <div className="absolute h-full object-cover w-full z-[1] overflow-hidden inset-0">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="absolute bg-cover h-full object-cover w-full z-[-100] bg-center m-auto -inset-full cursor-pointer"
            poster="https://cdn.prod.website-files.com/68acbc076b672f730e0c77b9%2F68bb73e8d95f81619ab0f106_Clouds1-poster-00001.jpg"
            onClick={handleVideoClick}
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
          <div className="absolute bg-black/40 bg-[linear-gradient(0deg,rgb(15,16,17),rgba(15,16,17,0))] inset-0 md:bg-transparent"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-transparent to-black pointer-events-none z-20"></div>
    </div>
  );
};
