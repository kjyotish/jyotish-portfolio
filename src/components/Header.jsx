import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { scrollToSection } from "../utils/scrollToSection";
export default function Header() {
  const handleOpenContactInNewTab = () => {
    window.open("/contact", "_blank"); // always opens Contact in a fresh tab
  };
  const handleOpenPortfolioInNewTab = () => {
    window.open("/portfolio", "_blank"); // always opens Contact in a fresh tab
  };
  const [isDropdownOpenDesktop, setDropdownOpenDesktop] = useState(false);
  const [isDropdownOpenMobile, setDropdownOpenMobile] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSliderOpen, setSliderOpen] = useState(false);

  const sliderRef = useRef(null);
  const dropdownDesktopRef = useRef(null);
  const dropdownMobileRef = useRef(null);
  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownDesktopRef.current &&
        !dropdownDesktopRef.current.contains(event.target)
      ) {
        setDropdownOpenDesktop(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownMobileRef.current &&
        !dropdownMobileRef.current.contains(event.target)
      ) {
        setDropdownOpenMobile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close slider on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sliderRef.current && !sliderRef.current.contains(e.target)) {
        setSliderOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 shadow-md z-50 px-6 py-3 flex justify-between items-center bg-black/80 text-white">
      {/* Links */}
      <div className="hidden sm:flex space-x-6 text-sm sm:text-base text-white">
        <button
          onClick={handleOpenPortfolioInNewTab}
          className="hover:text-blue-700 transition-colors cursor-pointer"
        >
          Portfolio
        </button>

        <button
          onClick={() => scrollToSection("Projects")}
          className="hover:text-blue-700 transition-colors cursor-pointer"
        >
          Projects
        </button>

        {/* Desktop Dropdown */}
        <div ref={dropdownDesktopRef} className="relative">
          <button
            onClick={() => setDropdownOpenDesktop(!isDropdownOpenDesktop)}
            className="hover:text-blue-700 transition-colors flex items-center cursor-pointer text-white"
          >
            Learned from <span className="ml-1">▾</span>
          </button>
          {isDropdownOpenDesktop && (
            <ul className="absolute mt-2 w-56 text-sm bg-black/30 backdrop-blur-xl border border-white/40 shadow-lg rounded-0">
              {[
                {
                  name: "GFX Mentor (YouTube)",
                  link: "https://www.youtube.com/@GfxMentor",
                },
                {
                  name: "Material Guidelines",
                  link: "https://m3.material.io/",
                },
                { name: "W3Schools", link: "https://www.w3schools.com/" },
                {
                  name: "Psychology of Design",
                  link: "https://www.interaction-design.org/literature/topics/psychology-of-design",
                },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-black/50 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={() => scrollToSection("Skills")}
          className="hover:text-blue-700 transition-colors cursor-pointer"
        >
          Skills
        </button>
        <button
          onClick={handleOpenContactInNewTab}
          className="hover:text-blue-700 transition-colors cursor-pointer"
        >
          Contact
        </button>
        <a
          href="https://www.behance.net/jyotishkumar46"
          className="hover:text-blue-400 transition"
        >
          Behance
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="sm:hidden" tran>
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="focus:outline-none text-gray-700 text-2xl relative w-10 h-10 flex items-center justify-center "
        >
          <span
            className={`absolute transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-0 scale-0 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
          >
            <FiMenu color="white" />
          </span>
          <span
            className={`absolute transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-0 -rotate-90"
            }`}
          >
            <FiX color="white" />
          </span>
        </button>
      </div>

      {/* Right side: Profile */}
      <div
        onClick={() => setSliderOpen(true)}
        className="flex items-center space-x-3 cursor-pointer"
      >
        <a
          onClick={() => setSliderOpen(true)}
          className="hover:text-blue-700 transition-colors invisible lg:visible"
        >
          About Me
        </a>
        <div class="profile-container-header ">
          <div class="profile-border-wrapper-header">
            <div class="profile-border-header"></div>

            <img src="/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full sm:hidden
    bg-white/30 backdrop-blur-lg border border-white/40 shadow-md
    overflow-hidden
    transition-[max-height,opacity,transform] duration-300 ease-in
    ${
      isMenuOpen
        ? "max-h-[60vh] opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-0 pointer-events-none"
    }
  `}
      >
        <div className="flex flex-col space-y-2 p-4 text-gray-800 text-white bg-black/30">
          <button
            onClick={handleOpenPortfolioInNewTab}
            className="hover:text-blue-700 text-left"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("Projects")}
            className="hover:text-blue-700 text-left"
          >
            Projects
          </button>

          {/* Mobile Dropdown */}
          <div ref={dropdownMobileRef} className="relative">
            <button
              onClick={() => setDropdownOpenMobile(!isDropdownOpenMobile)}
              className="text-white hover:text-blue-600 flex items-center"
            >
              Learned from <span className="ml-1">▾</span>
            </button>
            {isDropdownOpenMobile && (
              <ul className="mt-2 bg-[#212121] shadow-lg w-full text-sm text-gray-300 rounded-0">
                {[
                  {
                    name: "GFX Mentor (YouTube)",
                    link: "https://youtube.com/@GfxMentor",
                  },
                  {
                    name: "Material Guidelines",
                    link: "https://m3.material.io/",
                  },
                  { name: "W3Schools", link: "https://www.w3schools.com/" },
                  {
                    name: "Psychology of Design",
                    link: "https://www.interaction-design.org/literature/topics/psychology-of-design",
                  },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-black/40 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={() => scrollToSection("Skills")}
            className="hover:text-blue-700 text-left"
          >
            Skills
          </button>
          <a
            href="https://www.behance.net/jyotishkumar46"
            className="hover:text-blue-400 transition"
          >
            Behance
          </a>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-black/70 backdrop-blur-lg border border-white/40 shadow-lg transform transition-transform duration-500 ease-in-out z-40 p-6 overflow-y-auto ${
          isSliderOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-white hover:text-red-600 mb-4"
          onClick={() => setSliderOpen(false)}
        >
          ✕ Close
        </button>
        <div className="space-y-3 pt-[0px]">
          <div class="profile-container ">
            <div class="profile-border-wrapper">
              <div class="profile-border"></div>
              <img src="/profile.jpg" alt="Profile" />
            </div>
          </div>

          <h2 className="text-lg font-bold text-center">Jyotish Kumar</h2>
          <p className="text-center text-white">UI/UX & Graphic Designer</p>

          <div>
            <h3 className="font-semibold mb-2">Skills</h3>
            <ul className="mt-3 flex flex-col lg:gap-3 gap-5">
              <li className="flex items-center space-x-1">
                <img src="/Photoshop.svg" alt="Photoshop" />
                <span>Photoshop</span>
              </li>
              <li className="flex items-center space-x-1">
                <img src="/illustrator.svg" alt="Illustrator" />
                <span>Illustrator</span>
              </li>
              <li className="flex items-center space-x-1">
                <img src="/Figma.svg" alt="Figma" />
                <span>Figma</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Education</h3>
            <ul className="list-disc list-inside text-white">
              <li>BCA</li>
              <li>12th</li>
              <li>10th</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <p className="text-white">Phagwara 144401, Punjab</p>
            <iframe
              title="map"
              className="w-full h-40 mt-2 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.1753024242!2d75.7717!3d31.2241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5a8f7c2f07%3A0xf433d0a2621c4b8!2sPhagwara%2C%20Punjab!5e0!3m2!1sen!2sin!4v1693131000000!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen=""
            ></iframe>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Contact</h3>
            <p className="text-white">📞 9855893037</p>
            <p className="text-white">✉️ kjyotish124@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
