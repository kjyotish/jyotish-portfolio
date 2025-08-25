// App.jsx
import React from "react";
import RecentProjects from "./RecentProjects";

function RecentProjectAdd() {
  const projects = [
    {
      title: "Website Landing Page UI",
      description:
        "In this project I have created  a modern ui design with illustrations, modern cards design, pricing cards, content hide/show button and latest design footer",
      image: "",
      embed:
        "https://embed.figma.com/proto/NDUg66oD664sEY3Hg5lcyq/Abun-landing-page-UI?page-id=38%3A64&node-id=38-65&viewport=374%2C111%2C0.07&scaling=scale-down-width&content-scaling=fixed&embed-host=share", // optional embed link
      buttonText: "View Project",
      buttonLink: "https://www.behance.net/jyotishkumar46",
    },
    {
      title: "Construction Website Frontend",
      description:
        "In this project I have created  a constructions work portfolio website, used latest forms design for contact, cards and the website are fully responsive.",
      image: "/ConstructionWebsiteTumbnail.png",
      embed: "",
      buttonText: "Live View",
      buttonLink: "https://kjyotish.github.io/building-construction/",
    },
  ];

  return <RecentProjects projects={projects} />;
}

export default RecentProjectAdd;
