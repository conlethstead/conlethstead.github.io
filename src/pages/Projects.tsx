import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';
import threadImage from '../images/threadLibrary.png';
import memoryImage from '../images/memory.jpeg';
import networkImage from '../images/networkFile.png';
import pokerImage from "../images/WelcometoPoker.png";
import instaImage from "../images/homeInstaPic.png";
import bankingSupportImage from "../images/BankingSupport.png";
import insightForgeImage from "../images/InsightForge.png";

import { ThreadLibrary } from "../projects/threadLibrary";
import { InstagramClone } from "../projects/instagramClone";
import { MemoryManager } from "../projects/memoryManager";
import { NetworkFileSystem } from "../projects/networkFileSystem";
import { PokerHandCalculator } from "../projects/pokerHandCalculator";
import { BankingSupport } from "../projects/bankingSupport";
import { InsightForge } from "../projects/insightForge";

export const Projects = () => {
  const projects = [
    {
      name: 'Banking Support',
      image: bankingSupportImage,
      overview: 'Multi-agent GenAI system for banking customer support: classification, personalized responses, and ticket tracking via LangGraph and Streamlit on Google Cloud Run.',
      moduleInfo: <BankingSupport />
    },
    {
      name: 'InsightForge',
      image: insightForgeImage,
      overview: 'BI chat app: upload CSV, ask questions (RAG) or request visualizations (LLM-generated code in sandbox). Streamlit on Google Cloud Run.',
      moduleInfo: <InsightForge />
    },
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
      overview: 'Real-time analytics and strategic recommendations for poker hands, leveraging computer vision and probability calculations to enhance their decision-making and improve their overall gameplay.',
      moduleInfo: <PokerHandCalculator />
    },
    {
      name: 'Instagram Clone',
      image: instaImage,
      overview: 'Deployed a fully-functional instagram clone complete with server & client side dynamic pages.',
      moduleInfo: <InstagramClone />
    },
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
