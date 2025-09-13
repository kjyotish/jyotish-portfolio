// src/components/AddPortfolio.jsx
import PortfolioSection from "./PortfolioSection";

export default function AddPortfolio() {
  // ✅ Portfolio data that you can expand anytime
  const portfolioData = {
    "UIUX Designs": [
      {
        title: "Landing Page Design",
        description:
          "This landing page is crafted with a clean, modern layout that highlights key information at a glance. It applies UX laws like Hick’s Law (simple navigation), Fitts’s Law (easy-to-reach call-to-action), and Gestalt Principles (clear visual hierarchy). The UI design emphasizes minimalism, consistent typography, and engaging colors to guide users naturally toward conversion.",
        type: "image",
        src: "/portfolio/landing-page.jpg", // put your image inside public folder
      },

      {
        title: "Website UI Design",
        description:
          "A sleek and intuitive interface designed to make video editing effortless. Built with clean layouts, clear visual hierarchy, and smooth interactions to enhance both creativity and usability.",
        type: "embed",
        src: "https://embed.figma.com/proto/vHL2e5qDHQTfTNP6nguYhd/Video-Editing-Portfolio-Website?page-id=0%3A1&node-id=1-4&viewport=352%2C173%2C0.13&scaling=scale-down-width&content-scaling=fixed&embed-host=share", // example embed
      },
      {
        title: "My Portfolio Website",
        description:
          "This portfolio site is designed with clarity and usability at its core. It applies UX laws such as Miller’s Law (organized information), Hick’s Law (simplified choices), and Fitts’s Law (accessible actions) to guide visitors smoothly. With minimal UI, balanced typography, and smooth transitions, the design ensures an intuitive browsing experience.",
        type: "image",
        src: "portfolio/jyotish-portfolio.png", // example embed
      },
    ],
    "Graphics Designs": [
      {
        title: "Motion Graphic",
        description:
          "An interactive, scalable vector motion graphic adapts seamlessly to any screen size without losing clarity. It combines smooth animations with user interaction, creating an engaging experience. Designed for flexibility and precision, it delivers both visual appeal and functional impact.",
        type: "image",
        src: "/HeroBack.svg",
      },
      {
        title: "Instagram Post Design",
        description:
          "Typography gives words a voice, while colors set the emotion. With balance and contrast, design turns visuals into unforgettable experiences.",
        type: "carousel",
        images: [
          "/portfolio/carousal-1/1.jpg",
          "/portfolio/carousal-1/2.jpg",
          "/portfolio/carousal-1/3.jpg",
          "/portfolio/carousal-1/4.jpg",
          "/portfolio/carousal-1/5.jpg",
          "/portfolio/carousal-1/6.jpg",
          "/portfolio/carousal-1/7.jpg",
        ],
      },
      {
        title: "Teacher Day Card Design",
        description:
          "A simple, minimal Teacher’s Day card crafted in Photoshop — where elegance meets gratitude. Clean design, heartfelt message, timeless impact.",
        type: "image",
        src: "/portfolio/graphic-design/teacher-day-card.jpg",
      },
      {
        title: "Call-To-Action Design",
        description:
          "Call-to-Action for video-ending, Used color-theory and also focused on brand color.",
        type: "video",
        src: "/portfolio/graphic-design/KsonEndGraphic.mp4",
      },
    ],
    // ✅ NEW: Video Editing section
    "Video Editings": [
      {
        title: "KSONS Coconut Oil Branding",
        description:
          "AI Script, AI Voice, Used footages to create video more engaging and realistic.",
        type: "embed",
        src: "https://youtube.com/embed/aoc61y2Dwaw?feature=share", // place sample.mp4 inside /public folder
      },
      {
        title: "KSONS Coconut Oil Branding",
        description:
          "AI Script, AI Voice, Shooting plus Editing whole thing covered by me.",
        type: "embed",
        src: "https://youtube.com/embed/ji7RYYynDnY?feature=share", // place sample.mp4 inside /public folder
      },
      {
        title: "Sembel AI-Voice-Generated video editing",
        description:
          "In this video I used text to voice AI model for voice and the script provided by client, all visuals are used according content.",
        type: "embed",
        src: "https://youtube.com/embed/FAGEkqxgCDc?feature=share", // place sample.mp4 inside /public folder
      },
      {
        title: "Ruggd Indian, Product-Branding",
        description:
          "Not something unusual are used in this video, Just focused on product, and I tried to keep it simple as client needs.",
        type: "embed",
        src: "https://youtube.com/embed/WZqYSsP0gPE?feature=share", // place sample.mp4 inside /public folder
      },
      {
        title: "KSONS Tea Product Branding",
        description:
          "In video, I used AI voice with cool and focused background music, the goal of video is to promote Ksons Tea.",
        type: "embed",
        src: "https://youtube.com/embed/zmdZO2kI0ZQ?feature=share", // place sample.mp4 inside /public folder
      },
      {
        title: "RGHC Promotional Video",
        description:
          "The main goal of this video editing is to promote RGHC No.1 Healthcare Center.",
        type: "embed",
        src: "https://youtube.com/embed/s_dSfTfi-5A?feature=share", // place sample.mp4 inside /public folder
      },

      {
        title: "Finance/Share Market Reel Editings",
        description: "Short-form content with motion graphics overlays.",
        type: "embed",
        src: "https://www.youtube.com/embed/OIm-xvj2IDA", // place sample.mp4 inside /public folder
      },
      {
        title: "Doctor Reel",
        description:
          "Using well aligned footages and proper research based edit.",
        type: "embed",
        src: "https://www.youtube.com/embed/MU8k7JqUnIY", // Example YouTube video
      },
      {
        title: "Share Market Reel",
        description: "Motion graphics and typography.",
        type: "embed",
        src: "https://www.youtube.com/embed/Ig8zpNDwkPM", // Example YouTube video
      },
      {
        title: "Finance Related",
        description: "Motion graphics and typography and smooth animations.",
        type: "embed",
        src: "https://www.youtube.com/embed/invufulSMbQ", // Example YouTube video
      },
      {
        title: "Share Market",
        description:
          "Motion graphics, smooth animations and with sound effects.",
        type: "embed",
        src: "https://www.youtube.com/embed/HnoMRR1CTaM", // Example YouTube video
      },
    ],
  };

  return <PortfolioSection data={portfolioData} />;
}

/*

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/vHL2e5qDHQTfTNP6nguYhd/poster-design-for-portfolio?page-id=0%3A1&node-id=1-4&viewport=352%2C173%2C0.13&scaling=scale-down-width&content-scaling=fixed&embed-host=share" allowfullscreen></iframe>




*/
