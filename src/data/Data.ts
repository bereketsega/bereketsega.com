import { AboutType } from '../types/About';
import { ExperienceType } from '../types/Experience';
import { ProjectType, ProjectStatus } from '../types/Project';
import { SKILLCATEGORY, SkillType } from '../types/Skill';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';
import { ContactType } from '../types/Contact';

/**
 * About Data
 */
export const about: AboutType = {
    name: 'Bereket Sega',
    title: 'Software Engineer',
    location: 'Washington DC-Baltimore Area',
    description: 'Experienced with bringing my ideas to life with software.',
    email: 'mailto:bereketsega1@gmail.com',
};

/**
 * Experience Data
 */
export const experiences: ExperienceType[] = [
    {
        id: '1',
        position: 'Junior Software Developer',
        company: 'SecurEd Inc.',
        companyWebsite: 'https://www.secured.team/',
        companyLogo: './assets/SecurEdLogo.png',
        description:
            'Maintained CLARK, a cybersecurity education curriculum platform utilized by over 10,000 users. Developed a high-quality, robust production code in an agile environment. Worked with the project manager to implement new features.',
        tools: ['Angular', 'TypeScript', 'Node', 'MongoDB', 'CircleCI'],
        startDate: 'JUNE 2023',
        endDate: 'PRESENT',
    },
    {
        id: '2',
        position: 'Mathematics Tutor',
        company: 'Towson University',
        companyWebsite: 'https://towson.edu/',
        companyLogo: './assets/TowsonLogo.jpg',
        description:
            'Tutored college students in 5+ math courses. Mentored and guided students through challenging coursework, resulting in a 30% increase in exam scores.',
        tools: [
            'Calculus',
            'Discrete Mathematics',
            'College Algebra',
            'Trigonometry',
        ],
        startDate: 'SEP 2022',
        endDate: 'AUG 2023',
    },
    {
        id: '3',
        position: 'Junior Software Developer Intern',
        company: 'SecurEd Inc.',
        companyWebsite: 'https://www.secured.team/',
        companyLogo: './assets/SecurEdLogo.png',
        description:
            'Developed and styled interactive web apps using Angular. Worked with the UI team to design and implement new features.',
        tools: ['Angular', 'TypeScript', 'Node', 'Figma', 'Sass'],
        startDate: 'JAN 2023',
        endDate: 'MAY 2023',
    },
];

/**
 * Project Data
 */
export const projects: ProjectType[] = [
    {
        id: '1',
        title: 'Flower Classifier',
        description:
            'A web app that classifies images of flowers using an image classification model trained with TensorFlow. The model can classify 10 types of flowers with accuracy of 92%.',
        sourceCode: 'https://github.com/bereketsega/flower-classifier',
        demo: 'https://flower-classifier-client.onrender.com/',
        tools: ['Tensorflow', 'Python', 'React', 'JavaScript', 'CSS'],
        image: './assets/flowerclassifier.png',
        status: ProjectStatus.DONE,
        createdAt: 'June 2023',
    },
    {
        id: '2',
        title: 'Lost And Found',
        description:
            'A web app that allows users to post their lost items and connect with others who have found items. It is a one-stop-shop for all lost and found items.',
        sourceCode: 'https://github.com/COSC484-Project-Group-3/LostAndFound',
        demo: 'https://lostandfound-aani.onrender.com/',
        tools: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
        image: './assets/lostandfound.png',
        status: ProjectStatus.DONE,
        createdAt: 'Jan 2023',
    },
    {
        id: '3',
        title: 'Premier League Predictor',
        description:
            'A model that predicts the outcome of Premier League games. The model uses Poisson Distribution to decide the probability of an event occurring again.',
        sourceCode: 'https://github.com/bereketsega/Predict-Game',
        tools: ['Jupyter Notebook', 'Python', 'Pandas', 'Matplotlib'],
        image: './assets/premierleaguepredictor.png',
        status: ProjectStatus.DONE,
        createdAt: 'Nov 2020',
    },
];

/**
 * Skill Data
 */
export const skills: SkillType[] = [
    {
        id: '1',
        name: 'Java',
        link: 'https://www.java.com/',
        icon: BrandIcons.faJava,
        hexColor: '#B07219',
        type: SKILLCATEGORY.LANGUAGE,
    },
    {
        id: '2',
        name: 'Python',
        link: 'https://www.python.org/',
        icon: BrandIcons.faPython,
        hexColor: '#3776AB',
        type: SKILLCATEGORY.LANGUAGE,
    },
    {
        id: '3',
        name: 'C++',
        link: 'https://www.cplusplus.com/',
        icon: BrandIcons.faCuttlefish,
        hexColor: '#00599C',
        type: SKILLCATEGORY.LANGUAGE,
    },
    {
        id: '4',
        name: 'Bash',
        link: 'https://www.gnu.org/software/bash/',
        icon: SolidIcons.faTerminal,
        hexColor: '#4EAA25',
        type: SKILLCATEGORY.LANGUAGE,
    },
    {
        id: '5',
        name: 'JavaScript',
        link: 'https://www.javascript.com/',
        icon: BrandIcons.faJs,
        hexColor: '#F7DF1E',
        type: SKILLCATEGORY.LANGUAGE,
    },
    {
        id: '6',
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        icon: BrandIcons.faJsSquare,
        hexColor: '#007ACC',
        type: SKILLCATEGORY.LANGUAGE,
    },
    {
        id: '7',
        name: 'HTML',
        link: 'https://html.com/',
        icon: BrandIcons.faHtml5,
        hexColor: '#E34F26',
        type: SKILLCATEGORY.LANGUAGE,
    },
    {
        id: '8',
        name: 'CSS',
        link: 'https://www.w3.org/Style/CSS/Overview.en.html',
        icon: BrandIcons.faCss3Alt,
        hexColor: '#1572B6',
        type: SKILLCATEGORY.LANGUAGE,
    },
    {
        id: '9',
        name: 'MongoDB',
        link: 'https://www.mongodb.com/',
        icon: SolidIcons.faDatabase,
        hexColor: '#47A248',
        type: SKILLCATEGORY.DATABASE_MANAGEMENT_SYSTEM,
    },
    {
        id: '10',
        name: 'MySQL',
        link: 'https://www.mysql.com/',
        icon: SolidIcons.faDatabase,
        hexColor: '#4479A1',
        type: SKILLCATEGORY.DATABASE_MANAGEMENT_SYSTEM,
    },
    {
        id: '11',
        name: 'PostgreSQL',
        link: 'https://www.postgresql.org/',
        icon: SolidIcons.faDatabase,
        hexColor: '#336791',
        type: SKILLCATEGORY.DATABASE_MANAGEMENT_SYSTEM,
    },
    {
        id: '12',
        name: 'Docker',
        link: 'https://www.docker.com/',
        icon: BrandIcons.faDocker,
        hexColor: '#2496ED',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '13',
        name: 'Angular',
        link: 'https://angular.io/',
        icon: BrandIcons.faAngular,
        hexColor: '#DD0031',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '14',
        name: 'React',
        link: 'https://reactjs.org/',
        icon: BrandIcons.faReact,
        hexColor: '#61DAFB',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '15',
        name: 'React Native',
        link: 'https://reactnative.dev/',
        icon: BrandIcons.faReact,
        hexColor: '#61DAFB',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '16',
        name: 'Jest',
        link: 'https://jestjs.io/',
        icon: SolidIcons.faFlask,
        hexColor: '#C21325',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '17',
        name: 'Node',
        link: 'https://nodejs.org/en/',
        icon: BrandIcons.faNodeJs,
        hexColor: '#339933',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '19',
        name: 'Git',
        link: 'https://git-scm.com/',
        icon: BrandIcons.faGitAlt,
        hexColor: '#F05032',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '20',
        name: 'GitHub',
        link: 'https://github.com/',
        icon: BrandIcons.faGithub,
        hexColor: '#ffffff',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '21',
        name: 'AWS',
        link: 'https://aws.amazon.com/',
        icon: BrandIcons.faAws,
        hexColor: '#FF9900',
        type: SKILLCATEGORY.CLOUD_COMPUTING,
    },
    {
        id: '22',
        name: 'Google Cloud',
        link: 'https://cloud.google.com/',
        icon: BrandIcons.faGoogle,
        hexColor: '#4285F4',
        type: SKILLCATEGORY.CLOUD_COMPUTING,
    },
    {
        id: '23',
        name: 'Azure',
        link: 'https://azure.microsoft.com/',
        icon: BrandIcons.faMicrosoft,
        hexColor: '#0089D6',
        type: SKILLCATEGORY.CLOUD_COMPUTING,
    },
    {
        id: '24',
        name: 'Linux',
        link: 'https://www.linux.org/',
        icon: BrandIcons.faLinux,
        hexColor: '#FCC624',
        type: SKILLCATEGORY.OPERATING_SYSTEMS,
    },
    {
        id: '25',
        name: 'Windows',
        link: 'https://www.microsoft.com/en-us/windows',
        icon: BrandIcons.faWindows,
        hexColor: '#0078D6',
        type: SKILLCATEGORY.OPERATING_SYSTEMS,
    },
    {
        id: '26',
        name: 'MacOS',
        link: 'https://www.apple.com/macos/',
        icon: BrandIcons.faApple,
        hexColor: '#ffffff',
        type: SKILLCATEGORY.OPERATING_SYSTEMS,
    },
    {
        id: '27',
        name: 'Communication',
        type: SKILLCATEGORY.SOFT_SKILLS,
    },
    {
        id: '28',
        name: 'Teamwork',
        type: SKILLCATEGORY.SOFT_SKILLS,
    },
    {
        id: '29',
        name: 'Problem Solving',
        type: SKILLCATEGORY.SOFT_SKILLS,
    },
    {
        id: '30',
        name: 'TensorFlow',
        link: 'https://www.tensorflow.org/',
        icon: BrandIcons.faPython,
        hexColor: '#FF6F00',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '34',
        name: 'Figma',
        link: 'https://www.figma.com/',
        icon: BrandIcons.faFigma,
        hexColor: '#F24E1E',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '35',
        name: 'Sass',
        link: 'https://sass-lang.com/',
        icon: BrandIcons.faSass,
        hexColor: '#CC6699',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '36',
        name: 'CircleCI',
        link: 'https://circleci.com/',
        icon: SolidIcons.faCodePullRequest,
        hexColor: '#4DC234',
        type: SKILLCATEGORY.TOOLS_AND_FRAMEWORKS,
    },
    {
        id: '37',
        name: 'GraphQL',
        link: 'https://graphql.org/',
        icon: SolidIcons.faCircleNodes,
        hexColor: '#E10098',
        type: SKILLCATEGORY.LANGUAGE,
    },
];

/**
 * Contact Data
 */
export const contacts: ContactType[] = [
    {
        id: '1',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/bereketsega/',
        icon: BrandIcons.faLinkedin,
        hexColor: '#0077B5',
    },
    {
        id: '2',
        name: 'GitHub',
        link: 'https://www.github.com/bereketsega/',
        icon: BrandIcons.faGithub,
        hexColor: '#ffffff',
    },
    {
        id: '3',
        name: 'Email',
        link: 'mailto:bereketsega1@gmail.com',
        icon: SolidIcons.faEnvelope,
        hexColor: '#D44638',
    },
];
