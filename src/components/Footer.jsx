import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";
const handleOpenContactInNewTab = () => {
  window.open("/contact", "_blank"); // always opens Contact in a fresh tab
};
const handleOpenPortfolioInNewTab = () => {
  window.open("/portfolio", "_blank"); // always opens Contact in a fresh tab
};
export default function Footer() {
  return (
    <footer className="bg-[#181515] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-start text-left">
          <img
            src="/profile.jpg"
            alt="My Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
          <h3 className="mt-4 text-lg font-semibold">Jyotish Kumar</h3>
          <p className="text-gray-400">UI/UX & Graphic Designer</p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center space-y-2 lg:space-y-0 lg:space-x-6">
          <button
            onClick={() => scrollToSection("Home")}
            className="hover:text-blue-400 transition cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={handleOpenPortfolioInNewTab}
            className="hover:text-blue-400 transition"
          >
            Portfolio
          </button>
          <a
            href="https://www.behance.net/jyotishkumar46"
            className="hover:text-blue-400 transition"
          >
            Behance
          </a>
          <button
            onClick={handleOpenContactInNewTab}
            className="hover:text-blue-400 transition cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex justify-start md:justify-end space-x-4 h-[100%]">
          <div className="flex h-full align-center items-center">
            <div className="flex gap-3 h-fit">
              <a
                href="https://linkedin.com/in/jyotish-kumar-aa723823a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#212121] hover:bg-blue-600 transition"
              >
                <FaLinkedinIn className="lg:h-[24px] lg:w-[24px]" />
              </a>
              <a
                href="https://github.com/kjyotish"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#212121] hover:bg-sky-500 transition"
              >
                <FaGithub className="lg:h-[24px] lg:w-[24px]" />
              </a>
              <a
                href="https://instagram.com/jk__editings"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#212121] transition hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600"
              >
                <FaInstagram className="lg:h-[24px] lg:w-[24px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom small text */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Jyotish Kumar. All rights reserved.
      </div>
    </footer>
  );
}
