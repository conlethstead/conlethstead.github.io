import './App.css';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import fileIcon from "./images/fileIcon.svg";

function App() {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId!);
    const headerOffset = document.querySelector('.nav-header')?.clientHeight || 0;
    const elementPosition = targetElement?.getBoundingClientRect().top || 0;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <header className="nav-header">
        <div className="nav">
          <a href="#about" onClick={handleNavClick}>Conleth</a>   
          <ul className="nav-list">
            <a href="#projects" onClick={handleNavClick}>Projects</a>
            <a href="#skills" onClick={handleNavClick}>Skills</a>
            <a href={"/pdfs/ConlethSteadResume.pdf"} download="Conleth_Stead_Resume.pdf">
              <img src={fileIcon} alt="Resume Icon" className='icon' /> Resume
            </a>
          </ul>
        </div>
      </header>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </div>
  );
}

export default App;
