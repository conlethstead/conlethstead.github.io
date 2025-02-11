import React, { useState } from 'react';
import "../styles/ProjectCard.css"
import { ProjectCardProps } from './Components';

const ProjectCard = ({ project } : { project: ProjectCardProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project-card">
      <h3 className="project-name">{project.name}</h3>
      <button onClick={openModal} style={{ border: 'none', background: 'none', padding: 0 }}>
        <img src={project.image} alt={project.name} />
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-overview">{project.overview}</p>
            <p className="project-technologies">{project.technologies}</p>
            <p className="project-challenges">{project.challenges}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
