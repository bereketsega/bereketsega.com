import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="cmd">$ greet</div>
      <div className="cout">hello world, it's bereket :)</div>
      <p className="cmd">$ whois -u bereket --about</p>
      <p className="cout">
        currently pursuing my bachelor's in computer science at towson university.
        <br></br>
        experienced with bringing my ideas to life with software.
      </p>
    </div>
  );
};

export default About;
