import { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import SmallAnimatedText from "./SmallAnimatedText";
import OverlayButton from "./InteractiveButton/OverlayButton";
const handleOpenContactInNewTab = () => {
  window.open("/contact", "_blank"); // always opens Contact in a fresh tab
};
const handleOpenPortfolioInNewTab = () => {
  window.open("/portfolio", "_blank"); // always opens Contact in a fresh tab
};
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className=" min-h-fit flex flex-col lg:flex-row items-center justify-center gap-6 px-6 pt-12 lg:pb-[5%] bg-transparent">
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div
          className="w-fit bg-[#ffffff] ml-0 lg:ml-6 mb-0 lg:mb-6 px-3 lg:px-5 py-1 lg:py-2 flex items-center 
             justify-center lg:justify-start text-[#001D66] lg:font-bold font-semibold"
          style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)" }}
        >
          Hi.. It's Jyotish
        </div>

        {isMobile ? <SmallAnimatedText /> : <AnimatedText />}

        {/* Short Intro */}
        <p className="w-full max-w-xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 px-3 sm:px-0 lg:ml-6">
          I’m Jyotish, a{" "}
          <span className="font-semibold text-white">
            Frontend and Graphic Designer
          </span>{" "}
          skilled in
          <span className="font-semibold text-white">
            {" "}
            Figma, Photoshop, Illustrator
          </span>
          ,<span className="font-semibold text-white"> HTML</span>,
          <span className="font-semibold text-white"> CSS</span>,
          <span className="font-semibold text-white"> JavaScript</span>, This
          website and all graphics are created by me. Watch my design portfolio.
        </p>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:ml-6">
          {/* View Portfolio Button */}
          <button
            onClick={handleOpenPortfolioInNewTab}
            className="transition-all hover:translate-y-[-3px]"
          >
            <OverlayButton />
          </button>

          {/* Contact Me Button */}
          <button
            onClick={handleOpenContactInNewTab}
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base 
      bg-white backdrop-blur-sm border border-white/40 shadow-md text-gray-800
      transition-all hover:bg-blue-600 rounded-none hover:text-white  hover:translate-y-[-3px]
      flex items-center justify-center cursor-pointer"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
