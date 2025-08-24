import Chips from "./Chips";
import ExperienceBar from "./ExperienceBar";
import Coding from "./illustrations/Coding";
import FigmaLogo from "./illustrations/FigmaLogo";
import GraphicDesign from "./illustrations/GraphicDesign";
import VideoEditing from "./illustrations/VideoEditing";
const SkillSection = () => {
  const skills = [
    {
      title: "Website Frontend Designing",
      desc: "In our BCA course the website designing was the subject in 4th semester and when I started to learn this, I liked it most. In frontend design I have learned following concepts.",
      chips: [
        "HTML5",
        "CSS4",
        "JavaScript",
        "Responsiveness",
        "Flex",
        "Margin",
        "Pading",
        "Header",
        "Footer",
        "TailwindCSS",
        "Bootstrap",
        "ReactJS",
        "Animations",
      ],
      content: (
        <div className="w-fit lg:h-fit h-fit bg-blue-100 flex flex-col items-center justify-between rounded-2xl shadow-md gap-0 overflow-hidden">
          {/* You can place ANYTHING here */}
          <div className="flex h-[100%] w-full text-blue-800 font-bold text-lg items-center justify-center">
            <Coding className="scale-[1.02]" />
          </div>
          <ExperienceBar text="8 Months Experience" />
        </div>
      ),
    },
    {
      title: "UIUX Designing",
      desc: "After learning web designing then I started to learn UI designing, because without UI the digital platform cannot developed in right manner. And when I was learning this then I feel one more thing that’s ideation, how any interfaces are ideate before start designing, then I found UX is the method in which everything is defined how the interface actually will be. So in this I covered following things.",
      chips: [
        "Research",
        "Wireframing",
        "Information Architecture",
        "UX Laws",
        "Prototyping",
        "Design Thinking",
        "Iconography",
        "Typography",
        "Color Theory",
        "Materials Guidelines",
        "Figma A to Z",
      ],
      content: (
        <div className="w-fit lg:h-fit h-fit bg-blue-100 flex flex-col items-center justify-between rounded-2xl shadow-md gap-0 overflow-hidden">
          {/* You can place ANYTHING here */}
          <div className="flex h-[100%] w-full text-blue-800 font-bold text-lg items-center justify-center">
            <FigmaLogo className="scale-[1.02]" />
          </div>
          <ExperienceBar text="1 Year Experience" />
        </div>
      ),
    },
    {
      title: "Graphic Designing",
      desc: "This is the base of all my designing skills, I started poster and graphics design when i am in 10th class, after two years I started freelancing work in graphic designing.",
      chips: [
        "Design Principle's",
        "Color Theory",
        "Typography",
        "Illustrations",
        "Vector Graphics",
        "Raster Graphics",
        "Different Image Formats",
        "Motion Graphics",
        "Scalable Vector Graphics",
        "SVG",
      ],
      content: (
        <div className="w-fit lg:h-fit h-fit bg-blue-100 flex flex-col items-center justify-between rounded-2xl shadow-md gap-0 overflow-hidden">
          {/* You can place ANYTHING here */}
          <div className="flex h-[100%] w-full text-blue-800 font-bold text-lg items-center justify-center">
            <GraphicDesign className="scale-[1.02]" />
          </div>
          <ExperienceBar text="1+ Years Experience" />
        </div>
      ),
    },
    {
      title: "Video Editing",
      desc: "Video editing is my first skill, I did approx. 2 years plus freelance work of video editing, I edited many types of videos that’s mentioned in below.",
      chips: [
        "Talking Head Videos",
        "Doctor Videos",
        "Gym Reels",
        "Tech Videos",
        "Long Videos",
        "Podcasts",
        "Reels",
        "Music Reels",
        "Color Corrections",
        "Motion Graphics",
        "Capcut",
        "Premeire Pro",
      ],
      content: (
        <div className="w-fit lg:h- h-fit bg-blue-100 flex flex-col items-center justify-between rounded-2xl shadow-md gap-0 overflow-hidden">
          {/* You can place ANYTHING here */}
          <div className="flex h-[100%] w-full text-blue-800 font-bold text-lg items-center justify-center">
            <VideoEditing className="scale-[1.02]" />
          </div>
          <ExperienceBar text="2+ Year Experience" />
        </div>
      ),
    },
  ];

  return (
    <section
      id="Skills"
      className="flex flex-col w-full h-full py-10 space-y-10 px-6 lg:px-30 bg-[#2E2E2E] scroll-mt-20"
    >
      <h2 class="text-3xl font-bold text-center mb-8 text-white">Skills</h2>
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`h-fit w-[100%] flex flex-col lg:flex-row items-center justify-center gap-0 pb-2 lg:pb-4 lg:gap-50 lg:justify-between ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content Box (instead of img) */}
          <div className="h-full flex items-center justify-center w-full lg:w-1/2 lg:scale-[1.4]">
            {skill.content}
          </div>

          {/* Description Box */}
          <div className="w-full h-auto lg:w-1/2 py-6 bg-transparent text-center lg:text-left flex flex-col items-center lg:items-start space-y-2">
            <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
            <p className="text-gray-300 text-justify text-sm lg:leading-6">
              {skill.desc}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {skill.chips.map((chip, i) => (
                <Chips key={i} label={chip} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillSection;
