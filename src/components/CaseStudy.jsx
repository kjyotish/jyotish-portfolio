import React from "react";

const CaseStudySection = () => {
  return (
    <section id="case-study" className="w-full bg-[#212121] py-12">
      <h2 class="text-3xl font-bold text-center mb-8 text-white">Case Study</h2>
      <div className="mx-auto max-w-5xl px-4 space-y-6">
        {/* Case Study 1 */}
        <div className="flex flex-col md:flex-row items-center lg:gap-6 gap:4 bg-black/20 p-4 rounded-2xl shadow">
          {/* Left Button */}
          <div className="w-full md:w-1/4">
            <button className="w-full rounded-xl bg-[#F24E1E] text-white px-5 py-3 font-medium ">
              Problem
            </button>
          </div>
          {/* Right Description */}
          <div className="w-full md:w-3/4 flex items-center">
            <p className="mt-2 lg:m-0 text-gray-200">
              How I can show my skills and projects at one place so that anyone
              can believe, I can do work on real world project without
              internship.
            </p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="flex flex-col md:flex-row items-center lg:gap-6 gap:4 bg-black/20 p-4 rounded-2xl shadow">
          {/* Left Button */}
          <div className="w-full md:w-1/4">
            <button className="w-full rounded-xl bg-[#04AA6D] text-white px-5 py-3 font-medium ">
              Solution
            </button>
          </div>
          {/* Right Description */}
          <div className="w-full md:w-3/4">
            <p className="mt-2 lg:m-0 text-gray-200">
              So I created this portfolio website in which all things are at one
              place also it is based on real world project. This whole website
              logics and all motion graphics are designed by me.
            </p>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="flex flex-col md:flex-row items-center lg:gap-6 gap-4 bg-black/20 p-4 rounded-2xl shadow">
          <div className="w-full md:w-1/4">
            <button className="w-full rounded-xl bg-[#F2A500] text-white px-5 py-3 font-medium">
              Pain-Point
            </button>
          </div>
          <div className="w-full md:w-3/4">
            <p className="mt-2 lg:m-0 text-gray-200">
              Before this website, I used pdf to show my skill but I feel that's
              not affecting the HR, and they can't believe a student can learn
              anything individually at home with online resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
