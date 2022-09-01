import React from "react";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";

const HomePage = () => {
  return (
    <div className="main-page">
      <div className="sections">
        <section id="about">
          <About />
        </section>
        <section id="epxerience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};
export default HomePage;
