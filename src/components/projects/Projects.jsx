import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <p className="cmd">$ whois -u bereket --projects</p>
      <p className="cout">
        a wordle bot on discord.
        <br></br>
        <a href="https://github.com/bereketsega/Not-Wordle-Bot" target={"_blank"}>
          <i>https://github.com/bereketsega/Not-Wordle-Bot</i>
        </a>
      </p>
      <p className="cout">
        an algorithm that predicts premier league games. 88% accuracy :)
        <br></br>
        <a href="https://github.com/bereketsega/Predict-Game" target={"_blank"}>
          <i>https://github.com/bereketsega/Predict-Game</i>
        </a>
      </p>
      <p className="cout">
        calculates your gpa.
        <br></br>
        <a href="https://bereketsega.github.io/gpapad/" target={"_blank"}>
          <i>https://bereketsega.github.io/gpapad/</i>
        </a>
      </p>
      <p className="cout">
        <a href="https://github.com/bereketsega" target={"_blank"}>
          <i>more on github...</i>
        </a>
      </p>
    </div>
  );
};

export default Projects;
