import React from "react";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import projectsData from "../../utils/projects.json";
import "../projects/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-section-title">What I've Done</div>
      <div className="projects-list">
        {projectsData.map((elements) => {
          return (
            <div className="project-card">
              <div className="left">
                <div className="project-title">{elements.name}</div>
                <div className="project-description">{elements.description}</div>
                <div className="project-tools">
                  {elements.tools.map((tools) => {
                    return <div className="project-tool">{tools}</div>;
                  })}
                </div>
                <div className="project-links">
                  <IconButton>
                    <Link href={elements.github} target="_blank">
                      <GitHubIcon sx={{ fontSize: 30 }} className="link-icon"></GitHubIcon>
                    </Link>
                  </IconButton>
                  <IconButton>
                    <Link href={elements.demo} target="_blank">
                      <LaunchIcon sx={{ fontSize: 30 }} className="link-icon"></LaunchIcon>
                    </Link>
                  </IconButton>
                </div>
              </div>
              <div className="right">
                <div className="project-img-container">
                  <img className="project-img" alt="Loading..." src={elements.image}></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
