// HeroIllustration.jsx
import HeroSection2 from "./HeroSection2";
import Devices from "./illustrations/Devices";
import MoonBackground from "./illustrations/MoonBackground";
export default function HeroIllustration({ onContactClick }) {
  return (
    <section id="3" className="relative lg:pt-[5%] pt-[13%] overflow-hidden">
      <MoonBackground className="z-0 absolute inset-0 w-full h-full scale-[1.8] " />
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-6">
        {/* Left: HeroSection2 with contact button */}
        <HeroSection2 onContactClick={onContactClick} />

        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end w-[100%] h-[100%] ">
          <div className="lg:h-fit h-0 w-[100%] invisible lg:visible">
            <Devices />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
