import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <Link to="/" className="logo">
            <h1>Simon Coelho</h1>
          </Link>
          <nav className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>
            © 2025 Simon Coelho |{" "}
            <a
              href="https://linkedin.com/in/simon-coelho"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;