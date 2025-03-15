// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Me</h3>
          <p>
            I'm a passionate data scientist dedicated to transforming complex data into actionable insights. With expertise in machine learning and analytics, I help businesses make data-driven decisions.
          </p>
          <p>
            Looking to collaborate on innovative projects that make a meaningful impact.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Contact Information</h3>
          <ul className="contact-info">
            <li>
              <FaEnvelope />
              <a href="mailto:mastervansh01@gmail.com">mastervansh01@gmail.com</a>
            </li>
            <li>
              <FaPhone />
              <a href="tel:+919833121608">+91 9833121608</a>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span>Mumbai, India</span>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Me</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.linkedin.com/in/vanshita-patil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
            </li>
            <li>
              <a href="https://github.com/vanshp17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Vanshita Patil. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;