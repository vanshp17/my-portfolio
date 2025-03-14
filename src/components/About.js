import React from 'react';
import '../styles/About.css';
import profileImg from '../assets/images/profile.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image">
              <img src={profileImg} alt="Vanshita Patil" />
            </div>
            <div className="image-decoration"></div>
          </div>
          
          <div className="about-text">
            <p className="about-description">
              Hi! I'm <span className="highlight">Vanshita Patil,</span> a passionate <span className="highlight">Data Scientist & Analyst</span> with a love for uncovering insights from data. 
              I specialize in machine learning, data visualization, and statistical analysis. My journey in data science 
              has equipped me with the skills to solve complex problems and drive data-informed decisions.
            </p>
            <p className="about-description">
              With hands-on experience in various data projects and a commitment to continuous learning, I am always 
              exploring new technologies and methodologies to enhance my skills. <span className="highlight">Let's connect and explore</span> how we can 
              work together to turn data into actionable insights!
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;