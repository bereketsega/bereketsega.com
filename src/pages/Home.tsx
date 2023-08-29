import './Home.css';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Experience from '../components/experience/Experience';
import Project from '../components/project/Project';
import Skill from '../components/skill/Skill';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const Home = () => {
    // Google Analytics
    useEffect(() => {
        ReactGA.initialize('UA-223513042-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <div className="homeWrapper">
            <About></About>
            <Experience></Experience>
            <Project></Project>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;
