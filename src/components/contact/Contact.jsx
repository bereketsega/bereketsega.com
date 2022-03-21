import React from "react";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import "../contact/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">Connect With Me</div>
      <div className="contact-list">
        <div className="contact-link">
          <IconButton>
            <Link href={"https://www.linkedin.com/in/bereket-sega-674b51210/"} target="_blank">
              <LinkedInIcon sx={{ fontSize: 30 }} className="contact-icon"></LinkedInIcon>
            </Link>
          </IconButton>
        </div>
        <div className="contact-link">
          <IconButton>
            <Link href="https://github.com/bereketsega" target="_blank">
              <GitHubIcon sx={{ fontSize: 30 }} className="contact-icon"></GitHubIcon>
            </Link>
          </IconButton>
        </div>
        <div className="contact-link">
          <IconButton>
            <Link href="https://twitter.com/bereket_4r" target="_blank">
              <TwitterIcon sx={{ fontSize: 30 }} className="contact-icon"></TwitterIcon>
            </Link>
          </IconButton>
        </div>
        <div className="contact-link">
          <IconButton>
            <Link href="mailto:bereketsega1@gmail.com" target="_blank">
              <EmailIcon sx={{ fontSize: 30 }} className="contact-icon"></EmailIcon>
            </Link>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
