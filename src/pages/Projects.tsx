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
      overview: "A thread library",
      moduleInfo: <ThreadLibrary />
    },
    {
      name: 'Memory Manager',
      image: memoryImage,
      overview: 'A memory management system for efficient allocation.',
      moduleInfo: <MemoryManager />
    },
    {
      name: 'Multithreaded Network File System',
      image: networkImage,
      overview: 'A file system supporting multithreaded operations.',
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
      overview: 'A clone of Instagram.',
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
