import { Link } from 'react-router-dom';
import '../styles/Home.css';
import gradPic from '../images/gradPic.png';
import linkedinIcon from '../images/linkedinIcon.svg';
import githubIcon from '../images/githubIcon.svg';

export const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hi there, I'm Conleth</p>
          <h1 className="hero-headline">
            I build <span className="hero-accent">wonderful</span> products.
          </h1>
          <p className="hero-tagline">
            I help businesses build beautiful websites, mobile apps, and grow their brand through a great experience. Software Engineer at Ford Motor Company.
          </p>
          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/conlethstead"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
            <a
              href="https://github.com/conlethstead"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
          </div>
          <Link to="/works" className="hero-cta">
            See my projects →
          </Link>
        </div>
        <div className="hero-image-wrap">
          <img src={gradPic} alt="Conleth Stead" className="hero-image" />
        </div>
      </section>
    </div>
  );
};
