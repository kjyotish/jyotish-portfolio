import React from "react";
import AnimatedBtn from "./InteractiveButton/AnimatedBtn";

const RecentProjects = ({ projects }) => {
  return (
    <section id="Projects" className="w-full py-10 bg-[#212121] px-6 lg:px-30 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Recent Projects</h2>

      <div className="space-y-8">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`lg:gap-[100px] flex flex-col md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } md:space-x-6 bg-transparent overflow-hidden`}
            >
              {/* Left/Right: Image or Embed */}
              <div className="bg-transparent md:w-1/2 w-full flex items-center justify-center">
                {project.embed ? (
                  <div className="relative w-full pb-[56.25%] mb-4 lg:mb-0">
                    <iframe
                      src={project.embed}
                      title={project.title}
                      className="absolute left-0 w-full h-full  rounded-0 lg:rounded-2xl"
                      style={{
                        background: "url(/Loading-Canvas.svg)",
                        backgroundSize: "cover",
                        backgroundPositionY: "-22px",
                      }}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <a href={project.buttonLink}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="mb-4 lg:mb-0 h-[100%] w-[100%] rounded-0 lg:rounded-2xl"
                    />
                  </a>
                )}
              </div>

              {/* Left/Right: Description */}
              <div className="md:w-1/2 w-full flex flex-col justify-center lg:gap-5">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                </div>
                {/* Dynamic Button */}

                <AnimatedBtn
                  name={project.buttonText || "Explore"}
                  link={project.buttonLink}
                ></AnimatedBtn>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentProjects;
