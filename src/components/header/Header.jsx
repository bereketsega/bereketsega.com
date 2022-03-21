import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseMenuIcon from "@mui/icons-material/Close";
import "../header/Header.css";

const Header = () => {
  // handle menu icon visibility based on window width
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="header">
      {/* logo on the top left corner */}
      <div className="logo">
        <a className="logo-txt" href="#header">
          &lt;B&gt;
        </a>
      </div>
      {/* page sections navigation menu */}
      <div className="menu">
        {/* horizontal menu navigation bar for wide screens */}
        <div className="horizontal-menu">
          <div className="menu-list">
            <div className="menu-nav">
              <a className="menu-txt" href="#about">
                About
              </a>
            </div>
            <div className="menu-nav">
              <a className="menu-txt" href="#projects">
                Projects
              </a>
            </div>
            <div className="menu-nav">
              <a className="menu-txt" href="#contact">
                Contact
              </a>
            </div>

            <div className="resume-nav">
              <a className="resume-txt" rel="noreferrer" target="_blank" href={"../assets/resume.pdf"}>
                Resume
              </a>
            </div>
          </div>
        </div>
        {/* vertical menu navigation bar for narrow screens */}
        <div className="vertical-menu">
          {isMenuOpen ? (
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i>
                <IconButton className="menu-icon" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
              </i>
            </div>
          ) : (
            <div>
              <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <i className="menu-icon">
                  <IconButton className="menu-icon" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <CloseMenuIcon />
                  </IconButton>
                </i>
              </div>
              <div className="v-menu-list">
                <div className="v-menu-nav" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <a className="menu-txt" href="#about">
                    About
                  </a>
                </div>
                <div className="v-menu-nav" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <a className="menu-txt" href="#projects">
                    Projects
                  </a>
                </div>
                <div className="v-menu-nav" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <a className="menu-txt" href="#contact">
                    Contact
                  </a>
                </div>

                <div className="resume-nav v-resume-nav" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <a className="resume-txt" rel="noreferrer" target="_blank" href={"../assets/resume.pdf"}>
                    Resume
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
