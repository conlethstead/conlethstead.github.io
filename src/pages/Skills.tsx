import React from 'react';
import '../styles/Skills.css';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <p>Here are some of my skills, I am working to grow the list!</p>

      <div className='languages'>
        <SkillCard skill={{ name: 'C++', description: 'I have been using C++ for 4 years.' }} />
        <SkillCard skill={{ name: 'Javascript, HTML, CSS', description: 'I have been using Javascript, HTML, and CSS for 3 years.' }} />
        <SkillCard skill={{ name: 'Kotlin', description: 'I have been using Kotlin for 2 years.' }} />
        <SkillCard skill={{ name: 'Swift', description: 'I have been using Swift for 2 years.' }} />
        <SkillCard skill={{ name: 'Java', description: 'I have been using Java for 5 years.' }} />
        <SkillCard skill={{ name: 'React', description: 'I have been using React for 3 years.' }} />
        <SkillCard skill={{ name: 'Springboot', description: 'I have been using Springboot for 2 years.' }} />
      </div>
    </div>
  );
};
