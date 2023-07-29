import './Experience.css';
import { FaArrowRight } from 'react-icons/fa';
import { experiences } from '../../data/Data';
import { ExperienceType } from '../../types/Experience';

const Experience = () => {
    return (
        <div>
            <pre className="command">
                <FaArrowRight
                    size=".6rem"
                    className="commandArrow"
                ></FaArrowRight>{' '}
                <span className="tilde">~</span> whois -u bereket --experience
            </pre>
            {experiences.map((experience) => (
                <div key={experience.id}>
                    <ExperienceOutput {...experience}></ExperienceOutput>
                    <br></br>
                    <br></br>
                </div>
            ))}
            <div className="moreLinkWrapper">
                <a
                    className="moreLink"
                    href="./assets/BereketSegaResume.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="moreLinkText">View Full Résumé</span>
                    <FaArrowRight className="commandArrow"></FaArrowRight>
                </a>
            </div>
        </div>
    );
};

/**
 * ExperienceOutput is a component that displays the experience data
 *
 * @param props the experience data to be displayed
 * @returns a div containing the experience data
 */
const ExperienceOutput = (props: ExperienceType) => {
    return (
        <a href={props.companyWebsite} target="_blank" rel="noreferrer">
            <div className="outputWrapper">
                <div className="experienceLeftWrapper">
                    <p className="experienceDate">
                        {props.startDate} &mdash; {props.endDate}
                    </p>
                    <div className="companyLogoWrapper">
                        <img
                            className="companyLogo"
                            src={props.companyLogo}
                            alt=""
                        ></img>
                    </div>
                </div>
                <div className="experienceInfoWrapper">
                    <div className="experienceTextWrapper">
                        <p className="experiencePosition">{props.position}</p>
                        <p className="experienceCompany">{props.company}</p>
                        <p className="experienceDescription">
                            {props.description}
                        </p>
                    </div>
                    <ul className="tools">
                        {props.tools.map((tool, i) => (
                            <li className="tool" key={i}>
                                {tool}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </a>
    );
};

export default Experience;
