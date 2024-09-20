import React from 'react';
import '../styles/Hero.css'; // Import the CSS for styling

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle typing-animation">I'm a Data Scientist & Analyst</p>
        <a href="#projects" className="hero-button">See My Work</a>
      </div>
    </section>
  );
}

export default Hero;
