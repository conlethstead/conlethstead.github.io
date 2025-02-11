import React from 'react';
import '../styles/Projects.css';
import ProjectCard from '../components/ProjectCard';
import threadImage from '../images/thread.jpeg'
import memoryImage from '../images/memory.jpeg'
import networkImage from '../images/network.jpeg'

export const Projects = () => {
  const projects = [
    {
      name: 'Thread Library',
      image: threadImage,
      description: "A thread library",
      overview: "Overview",
      technologies: "Technologies",
      challenges: "Challenges"
    },
    {
      name: 'Memory Manager',
      image: memoryImage,
      description: 'A memory management system for efficient allocation.',
      overview: "Overview",
      technologies: "Technologies",
      challenges: "Challenges"
    },
    {
      name: 'Multithreaded Network File System',
      image: networkImage,
      description: 'A file system supporting multithreaded operations.',
      overview: "Overview",
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
      image: "image.png",
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
