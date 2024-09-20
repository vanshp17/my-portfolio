// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import specific icons
import '../styles/Footer.css'; // Import the specific styles for Footer component

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h3>About</h3>
        <p>Thank you for visiting my portfolio. I’m passionate about data science and eager to explore opportunities to make a difference.</p>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p><FaEnvelope /> Email: <a href="mailto:your-mastervansh01@gmail.com">mastervansh01@gmail.com</a></p>
        <p><FaPhone /> Phone: <a href="tel:+1234567890">+91 9833121608</a></p>
      </div>
      <div className="footer-section">
        <h3>Follow Me</h3>
        <ul className="social-links">
          <li><a href="https://www.linkedin.com/in/vanshita-patil" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
          <li><a href="https://github.com/vanshp17" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
          {/* <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a></li> */}
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Vanshita Patil. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
