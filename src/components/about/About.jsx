import React from "react";
import "../about/About.css";
import tools from "../../utils/tools.json";

const About = () => {
  return (
    <div className="about-section">
      {/* some information about me */}
      <div className="about">
        <div className="info-txt">
          <span className="about-title">
            Hi, I'm<span className="name">Bereket.</span>
          </span>
          <div className="description">
            <p>
              Computer Science - Software Engineering Student at Towson University. I am passionate about solving
              problems through programming and making the world a better place.
            </p>
          </div>
        </div>

        {/* image on about section */}
        <div className="image">
          <img className="about-img" alt="404 Not Found" src={"../assets/coding.png"}></img>
        </div>
      </div>

      {/* tools I use for programming */}
      <div className="tools">
        <div className="tools-title">I'm Working With</div>
        {tools.map((tools) => {
          return (
            <div className="tools-list" key={tools}>
              <span className="tool">{tools}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
