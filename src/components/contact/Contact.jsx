import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <p className="cmd">$ whois -u bereket --contact</p>
      <a className="cout">
        connect with me
        <br></br>
        <a href="https://www.linkedin.com/in/bereket-sega-674b51210/" target={"_blank"}>
          <i>https://www.linkedin.com/in/bereket-sega-674b51210/</i>
        </a>
        <br></br>
        <a href="https://github.com/bereketsega" target="_blank">
          <i>https://github.com/bereketsega</i>
        </a>
        <br></br>
        <a href="mailto:bereketsega1@gmail.com" target={"_blank"}>
          <i>bereketsega1@gmail.com</i>
        </a>
        <br></br>
      </a>
      <br></br>
      <div className="cmd">$ whois -u bereket --resume</div>
      <div className="cout">
        <a href={"../assets/resume.pdf"} target={"_blank"}>
          <i>resume.pdf</i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
