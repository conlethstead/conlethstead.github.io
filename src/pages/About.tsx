import React from "react";
import "../styles/About.css";
import gradPic from "../images/gradPic.png";

export const About = () => {
  return (
    <div className="about">
      <h2 className="name">Conleth Stead</h2>
      <p className="title">U of M LSA '24, Software Engineer, Ford Motor Company</p>
      <div className="profile">
        <img src={gradPic} alt="gradPic" className="pic" />
        <div className="information">
          <p className="intro">
            Welcome! I am a software engineer that enjoys
            building complex products and taking on new challenges. With a
            background in computer science and entrepreneurship, I am confident
            in my abilities both as a computer scientist and a potential leader.
            I am currently working as a software engineer in the FCG program at
            Ford Motor Company.
          </p>
          <p className="interests">
            Outside of work, I try to be active and a continuous learner. 
            I have always enjoyed being competitive through soccer, basketball, and snowboarding, and in college 
            I was a proud member of the Michigan Club Boxing Team. I also like to be creative through drawing and cooking. 
            Traveling has been a big part of my life, from Seoul to the Swizz Alps, and I am always looking forward to my next trip.
            Thanks for stopping by!
          </p>
        </div>
      </div>
    </div>
  );
};

{/* Throughout college, the Michigan Club Boxing team provided a
different kind of education, teaching me the importance of mental
and physical toughness. My commitment to self-improvement extends
beyond the classroom and the boxing ring. I satisfy my competitive
nature and maintain a healthy lifestyle by playing soccer,
basketball, and bowling! Through extensive travels from the
technologically advanced city of Seoul to the astonishing Swiss
Alps, I have broadened my worldview and deepened my understanding of
diverse cultures. I find creative balance in drawing, experimenting
with new recipes, and immersing myself in compelling books, films,
and video games. This multifaceted approach to life reflects my
dedication to continuous learning and enjoying life. */}