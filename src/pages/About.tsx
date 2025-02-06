import React from 'react';
import '../styles/About.css';
import gradPic from "../images/gradPic.png";

export const About = () => {
  return (
    <div className="about">
      <div className="profile"> 
        <div className="information">
          <h2 className='name'>Conleth Stead</h2>
          <p className='title'>U of M '24, LSA Student, Software Engineer</p>
          <p className='intro'>I am a recent grad from the University of Michigan,
            where I studied Computer Science and Entrpreneurship.
            I enjoyed the opportunity to work on a variety of projects from 
            a 
            I also was a proud member of the Michigan Club Boxing team. 
            I am currently a first-year FCG at Ford. </p>
          <p className='interests'>
            I have interests in full stack development, UI/UX design, 
            and AI.
          </p>
        </div>
        <img src={gradPic} alt="gradPic" className='pic'/>
      </div>
    </div>
  );
}
