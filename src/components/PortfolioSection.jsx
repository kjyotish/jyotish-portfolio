// src/components/PortfolioSection.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ResumeDownloadButton from "./ResumeDownloadButton";

export default function PortfolioSection({ data = {} }) {
  const tabs = Object.keys(data);
  const [activeTab, setActiveTab] = useState(tabs[0] || "");

  // ✅ keep activeTab in sync with data
  useEffect(() => {
    if (tabs.length && !tabs.includes(activeTab)) {
      setActiveTab(tabs[0]);
    }
  }, [data]);

  if (!tabs.length) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-500">No portfolio data available.</p>
      </section>
    );
  }

  //carousal

  const [activeTab2, setActiveTab2] = useState(Object.keys(data)[0]);
  // State for each carousel (tracks active slide per index)
  const [carouselIndexes, setCarouselIndexes] = useState({});

  const handlePrev = (idx, imagesLength) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [idx]: prev[idx] > 0 ? prev[idx] - 1 : imagesLength - 1,
    }));
  };

  const handleNext = (idx, imagesLength) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [idx]: prev[idx] < imagesLength - 1 ? prev[idx] + 1 : 0,
    }));
  };

  const handleDotClick = (idx, dotIndex) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [idx]: dotIndex,
    }));
  };

  return (
    <section className="w-full min-h-screen bg-[#2E2E2E] flex flex-col items-center lg:mb-0 mb-10">
      {/* HEADER with gradient blur */}
      <div className="relative bg-[#181515] w-full lg:h-56 h-40 flex items-center justify-center overflow-hidden ">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-60"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
        <h1 className="relative z-10 lg:text-5xl text-3xl font-extrabold text-white drop-shadow-lg">
          Portfolio
        </h1>
      </div>
      {/* NAVBAR */}
      <div className="mt-6 flex gap-auto bg-black/40 backdrop-blur-lg lg:px-4 lg:py-3 px-2 py-2 rounded-full shadow-md mx-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`lg:px-4 lg:py-2 lg:text-lg px-3 py-2 text-[16px] w-fit font-medium rounded-full transition-all cursor-pointer ${
              activeTab === tab
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* CONTENT SECTIONS */}
      <div className="mt-10 w-11/12 max-w-5xl mb-10">
        {data[activeTab] && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {data[activeTab].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-black/40 rounded-2xl shadow hover:shadow-lg transition flex flex-col gap-4"
              >
                <h2 className="lg:text-xl text-sm font-semibold text-white">
                  {item.title}
                </h2>

                {/* Render content based on type */}
                {item.type === "image" && (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="rounded-xl shadow-md"
                  />
                )}
                {item.type === "video" && (
                  <video controls className="rounded-xl shadow-md">
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {item.type === "embed" && (
                  <iframe
                    src={item.src}
                    title={item.title}
                    className="w-full h-56 rounded-xl shadow-md"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}

                {/* ✅ Carousel type */}
                {item.type === "carousel" && (
                  <div className="relative w-full overflow-hidden rounded-xl shadow-md">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateX(-${
                          (carouselIndexes[index] || 0) * 100
                        }%)`,
                      }}
                    >
                      {item.images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`Slide ${idx}`}
                          className="w-full flex-shrink-0 object-cover rounded-xl"
                        />
                      ))}
                    </div>
                    {/* Navigation buttons */}
                    <button
                      onClick={() => handlePrev(index, item.images.length)}
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                    >
                      ◀
                    </button>
                    <button
                      onClick={() => handleNext(index, item.images.length)}
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                    >
                      ▶
                    </button>
                    {/* ✅ Dot indicators */}
                    <div className="flex justify-center mt-3 space-x-2 pb-3">
                      {item.images.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => handleDotClick(index, dotIdx)}
                          className={`w-3 h-3 rounded-full ${
                            (carouselIndexes[index] || 0) === dotIdx
                              ? "bg-white"
                              : "bg-gray-500"
                          }`}
                        ></button>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-gray-200 text-[16px] lg:leading-8 leading-6 tracking-[2px]">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
      <ResumeDownloadButton />
    </section>
  );
}
