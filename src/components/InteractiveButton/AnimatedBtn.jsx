import { useState } from "react";
import { ArrowRight } from "lucide-react";

const AnimatedBtn = ({ name, link, newTab = true }) => {
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    if (newTab) {
      window.open(link, "_blank", "noopener,noreferrer"); // ✅ open in new tab safely
    } else {
      window.location.href = link; // same tab
    }
  };
  return (
    <button
      className={`
        relative 
        px-5
        w-full h-10      
        md:w-full md:h-12 
        lg:w-fit lg:h-14 
        bg-blue-600 text-white font-bold 
        overflow-hidden rounded-none 
        flex items-center justify-center
        transition-all duration-300 ease-in-out cursor-pointer
        ${hover ? "w-32 md:w-40 lg:w-56" : ""}
      `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <span className="font-roboto z-10 flex items-center text-sm md:text-base lg:text-xl">
        {name}
        <ArrowRight
          size={20}
          className={`ml-2 transition-transform duration-300 ${
            hover ? "translate-x-2" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
};

export default AnimatedBtn;
