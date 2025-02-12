import React from 'react';
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';
import threadImage from '../images/threadLibrary.png'
import memoryImage from '../images/memory.jpeg'
import networkImage from '../images/networkFile.png'
import pokerImage from "../images/WelcometoPoker.png";

export const Projects = () => {
  const projects = [
    {
      name: 'Thread Library',
      image: threadImage,
      description: "A thread library",
      overview: "A custom C++ thread library featuring multithreading, mutexes, condition variables, and CPU management for efficient concurrent execution.",
      technologies: "Technologies",
      challenges: "Challenges"
    },
    {
      name: 'Memory Manager',
      image: memoryImage,
      overview: "A virtual memory management system for an Operating System, handling memory allocation, page faults, and process management with swap and file-backed pages.",
      description: 'A memory management system for efficient allocation.',
      technologies: "Technologies",
      challenges: "Challenges"
    },
    {
      name: 'Multithreaded Network File System',
      image: networkImage,
      overview: "A file server with a hierarchical file structure, inode-based storage, and network operations for reading, writing, creating, and deleting files and directories.",
      description: 'A file system supporting multithreaded operations.',
      technologies: "Technologies",
      challenges: "Challenges"
    },
    {
      name: 'Instagram Clone',
      image: "image.png",
      description: 'A clone of the popular social media app Instagram.',
      overview: "Overview",
      technologies: "Technologies",
      challenges: "Challenges"
    },
    {
      name: 'Poker Hand Calculator',
      image: pokerImage,
      description: 'A tool to calculate the best poker hands.',
      overview: "Overview",
      technologies: "Technologies",
      challenges: "Challenges"
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <p>Here are some of my projects.</p>
      
      <div className='project-container'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
