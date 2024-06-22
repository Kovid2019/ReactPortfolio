import React from "react";
import a2 from "../assets/a2.png";
import { Title } from "./Title";
import { Card } from "./Card";

export const Project = () => {
  const projects = [
    {
      image: a2,
      github: "https://github.com",
      url: "",
      title: "My P1 portfolio",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: a2,
      github: "https://github.com",
      url: "",
      title: "My P2 portfolio",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: a2,
      github: "https://github.com",
      url: "",
      title: "My P3 portfolio",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
    {
      image: a2,
      github: "https://github.com",
      url: "",
      title: "My P4 portfolio",
      description: "Techstack: HTML, CSS, Javascript, React",
    },
  ];
  return (
    <section className="projects container" id="projects">
      <Title title="My Projects" />
      <div className="grid project-container">
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
    </section>
  );
};
