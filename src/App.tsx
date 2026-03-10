import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { EmailModal } from './components/EmailModal';
import fileIcon from "./images/fileIcon.svg";

function Layout() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);

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
          <button type="button" className="nav-cta" onClick={() => setEmailModalOpen(true)}>
            Let's Talk
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <EmailModal isOpen={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
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
