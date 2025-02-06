import React from 'react';
import '../styles/Projects.css';

export const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <p>Here are some of my projects.</p>
      
      <div className='project-container'>
        <div>Thread Library</div>
        <div>Memory Manager</div>
        <div>Multithreaded Network File System</div>
        <div>Instagram Clone</div>
        <div>Poker Hand Calculator</div>
      </div>
    </div>
  );
}
