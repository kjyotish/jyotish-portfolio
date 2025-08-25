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
        title: "Video Editing Website UI",
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
        description: "An interactive scalable vector motion graphic.",
        type: "image",
        src: "/HeroBack.svg",
      },
    ],
    // ✅ NEW: Video Editing section
    "Video Editings": [
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
