import React from 'react';
import '../styles/About.css'; // Import the CSS for styling
// import profileImg from '../assets/images/vanshitaprofile.jpg';
import profileImg from '../assets/images/profile.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hi! I'm <b>Vanshita Patil,</b> a passionate <b>Data Scientist & Analyst </b>with a love for uncovering insights from data. 
            I specialize in machine learning, data visualization, and statistical analysis. My journey in data science 
            has equipped me with the skills to solve complex problems and drive data-informed decisions.
          </p>
          <p className="about-description">
            With hands-on experience in various data projects and a commitment to continuous learning, I am always 
            exploring new technologies and methodologies to enhance my skills. <b>Let's connect and explore </b> how we can 
            work together to turn data into actionable insights!
          </p>
        </div>
        <div className="about-image">
          {/* <img src="../assets/images/vanshitaprofile.jpg" alt="Profile" /> */}
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default About;
