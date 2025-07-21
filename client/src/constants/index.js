// FILE: src/constants/index.js

// Import local images
import kingTerminalImg from '../assets/images/King-Terminal.jpg';
import netflixCloneImg from '../assets/images/NETFLIX-CLONE.jpg';
import capgeminiLogo from '../assets/images/capgemini.jpg';
import moodIndigoLogo from '../assets/images/mood-indigo.jpg';

// For external URLs, just assign them to a variable. Do NOT use import.
const udemyLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png';

// Your Project Data
export const projects = [
  {
    title: 'King Portfolio Terminal',
    description: "My favorite portfolio easter egg: a fully interactive hacker-style terminal. You'll be amazed at the features hidden inside this unique project.",
    tags: ['JavaScript', 'HTML', 'CSS'],
    image: kingTerminalImg,
    source_code_link: 'https://github.com/Kalamberahul/king-portfolio-terminal',
    live_demo_link: 'https://kalamberahul.github.io/king-portfolio-terminal',
  },
  {
    title: 'Netflix MERN Clone',
    description: "A full-stack MERN clone of Netflix that's so realistic, it's smoother on the eyes than the original. A testament to building polished, production-level user interfaces.",
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: netflixCloneImg,
    source_code_link: 'https://github.com/Kalamberahul/netflix-mern-clone',
    live_demo_link: null,
  },
  {
    title: 'Task Management API',
    description: 'A robust RESTful API built with Spring Boot and Java for managing tasks and users. Features JWT-based security and follows best practices for API design.',
    tags: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL'],
    image: 'https://placehold.co/600x400/1e293b/94a3b8?text=Project+3',
    source_code_link: 'https://github.com/your-username/project-3',
    live_demo_link: null,
  },
];


// Your Certifications Data
export const certifications = [
  {
    title: 'Java Full Stack Development',
    issuer: 'EduBridge (In partnership with Capgemini)',
    date: 'July 2025',
    logo: capgeminiLogo, // Use imported logo
    credential_url: '/java-full-stack-certificate.pdf',
  },
  {
    title: 'Web Development Training',
    issuer: 'Acmegrade (In collaboration with Mood Indigo, IIT Bombay)',
    date: 'May 2024',
    logo: moodIndigoLogo, // Use imported logo
    credential_url: '/web-development-certificate.jpg',
  },
  {
    title: 'Python 100 Days 100 Projects',
    issuer: 'Udemy (In Progress)',
    date: 'Ongoing',
    logo: udemyLogo, // Use the variable with the URL
    credential_url: null,
  },
];
