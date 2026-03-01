import React from "react";
import "../styles/About.css";
import gradPic from "../images/gradPic.png";
import linkedinIcon from "../images/linkedinIcon.svg";
import githubIcon from "../images/githubIcon.svg";

export const About = () => {
  return (
    <div className="about">
      <h2 className="name">Conleth Stead</h2>
      <p className="title">
        U of M LSA '24, Software Engineer, Ford Motor Company
      </p>
      <div className="profile">
        <img src={gradPic} alt="gradPic" className="pic" />
        <div className="information">
          <h3 className="aboutMe">About Me</h3>
          <p className="intro">
            Welcome! My love for computer science was born from the rush of
            solving complex problems in projects throughout my education. My
            coursework reflects my diverse interests in computer science,
            entrepreneurship, language, and more! With this background, I am
            confident in my abilities both as a software engineer and a
            potential leader. Currently, I am working as a software engineer in
            the FCG program at Ford Motor Company.
          </p>
          <p className="interests">
            Beyond my professional life, I'm active, curious, and thrive on
            new challenges. I love the thrill of competition in sports like
            soccer, basketball, and snowboarding. My experience with the
            Michigan Club Boxing Team taught me invaluable lessons in mental and
            physical toughness. I also enjoy expressing my creativity through
            drawing and cooking, and I'm always eager to explore new cultures
            and landscapes through travel. Thanks for stopping by!
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/conlethstead"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
            <a
              href="https://github.com/conlethstead"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
