import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import fileIcon from "./images/fileIcon.svg";

function Layout() {
  return (
    <div className="App">
      <header className="nav-header">
        <div className="nav">
          <Link to="/" className="nav-logo">Conleth</Link>
          <ul className="nav-list">
            <li><Link to="/works">Works</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li>
              <a href="/pdfs/ConlethSteadResume.pdf" download="Conleth_Stead_Resume.pdf" className="nav-resume">
                <img src={fileIcon} alt="Resume" className="icon" /> Resume
              </a>
            </li>
          </ul>
          <a href="mailto:conleth@example.com" className="nav-cta">Let's Talk</a>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="works" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
