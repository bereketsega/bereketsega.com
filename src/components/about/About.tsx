import './About.css';
import { FaArrowRight, FaLocationArrow } from 'react-icons/fa';
import { about } from '../../data/Data';

const About = () => {
    return (
        <div className="componentWrapper">
            <pre className="command">
                <FaArrowRight
                    size=".6rem"
                    className="commandArrow"
                ></FaArrowRight>{' '}
                <span className="tilde">~</span> whois -u bereket --about
            </pre>
            <div className="outputWrapper">
                <div className="aboutWrapper">
                    <div className="profileImageWrapper">
                        <img
                            src="./assets/icon.png"
                            alt=""
                            className="profileImage"
                        ></img>
                    </div>
                    <div className="aboutTextWrapper">
                        <p className="aboutName">{about.name}</p>
                        <p className="aboutTitle">{about.title}</p>
                        <div className="locationDescriptionWrapper">
                            <p className="aboutLocation">
                                <FaLocationArrow
                                    size=".7rem"
                                    color="#0dff05"
                                ></FaLocationArrow>{' '}
                                {about.location}
                            </p>
                            <p className="aboutDescription">
                                {about.description}
                            </p>
                            <p>
                                <a href={about.email} className="aboutContact">
                                    Contact Me
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    );
};

export default About;
