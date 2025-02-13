import React, { useState, useEffect } from 'react';
import "../styles/ProjectCard.css"
import { ProjectCardProps } from './Components';

const ProjectCard = ({ project } : { project: ProjectCardProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.classList.add('no-scroll');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

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
        <div className="overlay">
          <p>{project.overview}</p>
          <p>Click to learn more about this project!</p>
        </div>
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="module-info">
              {project.moduleInfo}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
