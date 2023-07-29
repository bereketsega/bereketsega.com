import './Project.css';
import { FaArrowRight, FaGithub, FaLink } from 'react-icons/fa';
import { projects, contacts } from '../../data/Data';
import { ProjectType } from '../../types/Project';

const Project = () => {
    return (
        <div>
            <pre className="command">
                <FaArrowRight
                    size=".6rem"
                    className="commandArrow"
                ></FaArrowRight>{' '}
                <span className="tilde">~</span> whois -u bereket --projects
            </pre>
            {projects.map((project) => (
                <div key={project.id}>
                    <ProjectOutput {...project}></ProjectOutput>
                    <br></br>
                    <br></br>
                </div>
            ))}
            <div className="moreLinkWrapper">
                <a
                    className="moreLink"
                    href={contacts[1].link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="moreLinkText">View More on GitHub</span>
                    <FaArrowRight className="commandArrow"></FaArrowRight>
                </a>
            </div>
        </div>
    );
};

/**
 * ProjectOutput is a component that displays the project data
 *
 * @param props the project data to be displayed
 * @returns a div containing the project data
 */
const ProjectOutput = (props: ProjectType) => {
    return (
        <a
            href={props.demo || props.sourceCode}
            target="_blank"
            rel="noreferrer"
        >
            <div className="outputWrapper">
                <div className="projectWrapper">
                    <div className="projectLeftWrapper">
                        <p className="projectDate">{props.createdAt}</p>
                        <div className="projectImageWrapper">
                            <img
                                className="projectImage"
                                src={props.image}
                                alt=""
                            ></img>
                        </div>
                    </div>
                    <div className="projectInfoWrapper">
                        <div className="projectTextWrapper">
                            <p className="projectName">{props.title}</p>
                            <p className="projectDescription">
                                {props.description}
                            </p>
                            <ul className="tools">
                                {props.tools.map((tool, i) => (
                                    <li className="tool" key={i}>
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="projectLinkWrapper">
                            <a
                                className="projectLink"
                                href={props.sourceCode}
                                target="_blank"
                                rel="noreferrer"
                                title="source code link"
                            >
                                <FaGithub
                                    className="projectSourceCodeLinkIcon"
                                    size="1.8rem"
                                ></FaGithub>
                            </a>
                            {props.demo && (
                                <a
                                    className="projectLink"
                                    href={props.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    title="demo link"
                                >
                                    <FaLink
                                        size="1.5rem"
                                        className="projectDemoLinkIcon"
                                    ></FaLink>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Project;
