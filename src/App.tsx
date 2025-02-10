import './App.css';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="nav-header">
        <div className="nav">
          <a href="#home">Conleth</a>   
          {/* put in home icon ^ */}
          <ul className="nav-list">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          </ul>
            
          {/* <a href="#contact">Contact</a> */}
          {/* <a href="#timeline">Timeline</a>
          <a href="#resume">Resume</a> */}
          {/* add resume link */}
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
      {/* <section id="contact">
        <Contact />
      </section> */}
    </div>
  );
}

export default App;
