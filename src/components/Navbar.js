import React from 'react';
import '../styles/Navbar.css'; // Import the CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#hero" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="#about" className="navbar-link">About Me</a></li>
        <li className="navbar-item"><a href="#skills" className="navbar-link">Skills</a></li>
        <li className="navbar-item"><a href="#projects" className="navbar-link">Projects</a></li>
        <li className="navbar-item"><a href="#testimonials" className="navbar-link">Testimonials</a></li>
        <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
