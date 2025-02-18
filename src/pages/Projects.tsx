import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';
import threadImage from '../images/threadLibrary.png';
import memoryImage from '../images/memory.jpeg';
import networkImage from '../images/networkFile.png';
import pokerImage from "../images/WelcometoPoker.png";

import { ThreadLibrary } from "../projects/threadLibrary";
import { InstagramClone } from "../projects/instagramClone";
import { MemoryManager } from "../projects/memoryManager";
import { NetworkFileSystem } from "../projects/networkFileSystem";
import { PokerHandCalculator } from "../projects/pokerHandCalculator";

export const Projects = () => {
  const projects = [
    {
      name: 'Thread Library',
      image: threadImage,
      overview: "Implemented my own thread library for a multiprocessor by writing the operating system functions for threads, mutexes, condition variables, and cpus.",
      moduleInfo: <ThreadLibrary />
    },
    {
      name: 'Memory Manager',
      image: memoryImage,
      overview: 'Created an abstraction of a shared virtual memory space for application processes using advanced caching techniques to ensure efficient memory management.',
      moduleInfo: <MemoryManager />
    },
    {
      name: 'Multithreaded Network File System',
      image: networkImage,
      overview: 'Developed a persistent network file system and interface which concurrent clients can use to read, write, and manage files across a network.',
      moduleInfo: <NetworkFileSystem />
    },
    {
      name: 'Poker Hand Calculator',
      image: pokerImage,
      overview: 'A tool to calculate the best poker hands.',
      moduleInfo: <PokerHandCalculator />
    },
    {
      name: 'Instagram Clone',
      image: pokerImage,
      overview: 'Deployed a fully-functional instagram clone complete with server & client side dynamic pages.',
      moduleInfo: <InstagramClone />
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <p>Here are some of my projects.</p>
      
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
