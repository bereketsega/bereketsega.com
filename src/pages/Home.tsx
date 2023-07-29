import './Home.css';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Experience from '../components/experience/Experience';
import Project from '../components/project/Project';
import Skill from '../components/skill/Skill';

const Home = () => {
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
