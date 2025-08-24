import React from "react";

export default function ExperienceBar({ text = "+1 Year Experience" }) {
  return (
    <div className="h-10 w-full bg-[#181515] flex items-center px-4 relative overflow-hidden group">
      {/* Golden Gradient Text (left aligned) */}
      <span className="text-lg font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#FF8C00] bg-clip-text text-transparent">
        {text}
      </span>

      {/* Shiny Tilt Overlay (on top of all) */}
      <div className="shine pointer-events-none absolute top-0 left-[-50%] h-full w-[10px] scale-[3] rotate-42 bg-white/80 z-20"></div>

      {/* Inline CSS */}
      <style>{`
        @keyframes shine {
          0%   { left: 100%; }
          100% { left: -50%; }
        }
        /* Trigger once on hover */
        .group:hover .shine {
          animation: shine .5s linear 1 forwards;
        }
      `}</style>
    </div>
  );
}
