import React, { useState, useEffect } from 'react';
import '../styles/Hero.css'; // Import the CSS for styling

function Hero() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const titles = ["Data Scientist", "Data Analyst", "Machine Learning Engineer", "AI Enthusiast"];
  const [currentTitle, setCurrentTitle] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentPhrase = titles[currentTitle];
    
    if (index < currentPhrase.length) {
      // Still typing the current phrase
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentPhrase[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Finished typing, pause before deleting
      const timeout = setTimeout(() => {
        setIndex(0);
        setText('');
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, currentTitle, titles]);

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Hello, I'm</span>
          <span className="name">Vanshita Patil</span>
        </h1>
        <p className="hero-subtitle">
          <span className="profession">I'm a </span>
          <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary-btn">See My Work</a>
          <a href="#contact" className="hero-button secondary-btn">Contact Me</a>
        </div>
      </div>
      <div className="scroll-down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;