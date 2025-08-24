import React from "react";
import { FaPhoneAlt, FaDownload, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ResumeDownloadButton() {
  const navigate = useNavigate();

  const handleOpenContactInNewTab = () => {
    window.open("/contact", "_blank"); // Change to your real contact link
  };

  return (
    <div className="fixed bottom-0 w-full lg:w-fit left-1/2 lg:left-auto lg:right-6 -translate-x-1/2 lg:translate-x-0 flex lg:flex-col items-center lg:items-end justify-center lg:justify-end gap-12 bg-black/60 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-[0] lg:px-0 lg:py-3 px-4 py-2 z-50">
      {/* Home Button */}
      <div className="w-fit flex flex-col gap-1 py-1 items-center">
        <button
          onClick={() => navigate("/")}
          className="w-fit lg:p-4 p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md hover:scale-110 transition-transform"
        >
          <FaHome size={22} />
        </button>
        <h6 className="text-white text-[10px]">Home</h6>
      </div>

      {/* Resume Download Button */}
      <div className="flex flex-col gap-1 py-1 items-center">
        <a
          href="https://drive.google.com/uc?export=download&id=1ncfjb9UHgV9u1IoFyIsLka_8fNjy7nvm"
          className="w-fit lg:p-4 p-2 rounded-full bg-blue-600 text-white shadow-md hover:scale-110 transition-transform"
          download
        >
          <FaDownload size={22} />
        </a>
        <h6 className="text-white text-[10px]">Resume</h6>
      </div>
      {/* Contact Button */}
      <div className="flex flex-col gap-1 py-1 items-center">
        <button
          onClick={handleOpenContactInNewTab}
          className="w-fit lg:p-4 p-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md hover:scale-110 transition-transform"
        >
          <FaPhoneAlt size={22} />
        </button>
        <h6 className="text-white text-[10px]">Contact</h6>
      </div>
    </div>
  );
}
