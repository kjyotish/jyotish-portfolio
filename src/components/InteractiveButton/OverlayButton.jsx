import AnimatedOverlay from "../Animations/AnimatedOverlay";
import { useState, useEffect } from "react";

export default function PortfolioButton() {
  const [overlayKey, setOverlayKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // change key → React re-mounts the component
      setOverlayKey((prev) => prev + 1);
    }, 6000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shadow-lg">
      <a
        href="#portfolio"
        className="relative px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base 
        bg-blue-600 backdrop-blur-sm border border-white/40 
        hover:bg-white transition-none rounded-none text-white hover:text-gray-800
        overflow-hidden flex items-center justify-center"
      >
        {/* Button text */}
        <span className="relative z-0">View Portfolio</span>

        {/* Overlay reloads every 10s because key changes */}
        <span className="absolute scale-200 inset-0 z-10 flex items-center justify-center">
          <AnimatedOverlay key={overlayKey} />
        </span>
      </a>
    </div>
  );
}
