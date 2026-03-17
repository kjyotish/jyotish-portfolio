import React from "react";

const VideoGallery = () => {
  // Sample video data
  const videos = [
    { id: 1, title: "Marketing Video 1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "Content Video 2", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 3, title: "Shooting Video 3", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, title: "Marketing Video 4", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 5, title: "Content Video 5", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ];

  const tags = ["Marketing Videos", "Content Type", "Shooting Videos", "Editing Tips", "Final Output"];

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white min-h-screen p-6">
      {/* Left Side - Videos */}
      <div className="md:w-4/5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <video
              controls
              className="w-full h-48 object-cover"
              src={video.src}
            />
            <div className="p-4 text-center font-semibold text-gray-200">
              {video.title}
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Tags */}
      <div className="md:w-1/5 w-full mt-8 md:mt-0 md:ml-8">
        <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
          Tags
        </h2>
        <div className="flex flex-wrap md:flex-col gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 hover:bg-gray-700 text-sm px-4 py-2 rounded-full cursor-pointer text-center transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
