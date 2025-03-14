// src/components/Testimonials.js
import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Data Scientist at TechCorp',
    photo: 'https://thispersondoesnotexist.com/', // Using placeholder for demo
    testimonial: 'Vanshita is an exceptional data scientist. Her analytical skills and attention to detail significantly improved our project outcomes. Highly recommended!'
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Senior Data Analyst at DataCo',
    photo: 'https://thispersondoesnotexist.com/', // Using placeholder for demo
    testimonial: 'Working with Vanshita was a pleasure. She brings a wealth of knowledge and a proactive approach to problem-solving that makes her a valuable asset to any team.'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Lead Data Engineer at AnalyticsPlus',
    photo: 'https://thispersondoesnotexist.com/', // Using placeholder for demo
    testimonial: `Vanshita's ability to translate complex data into actionable insights is impressive. Her contributions were instrumental in achieving our project goals.`
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'VP of Analytics at DataDrive',
    photo: 'https://thispersondoesnotexist.com/', // Using placeholder for demo
    testimonial: `Few professionals I've worked with match Vanshita's combination of technical expertise and collaborative spirit. She consistently delivers results that exceed expectations.`
  }
];

const TestimonialCard = ({ testimonial, isActive }) => (
  <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
    <div className="testimonial-content">
      <p className="testimonial-text">"{testimonial.testimonial}"</p>
      <div className="testimonial-profile">
        <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
        <div className="testimonial-info">
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check viewport width to determine mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Navigation handlers
  const goToPrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = () => {
    if (isMobile) {
      // Show only one testimonial on mobile
      return [testimonialsData[currentIndex]];
    } else {
      // Show 3 testimonials on desktop with sliding window
      return testimonialsData.slice(currentIndex, currentIndex + 3).concat(
        testimonialsData.slice(0, Math.max(0, 3 - (testimonialsData.length - currentIndex)))
      );
    }
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-heading">
        <h2 className="testimonials-title">What People Say</h2>
        <div className="testimonials-subtitle">Trusted by data professionals worldwide</div>
      </div>
      
      <div className="testimonials-wrapper">
        <button className="testimonial-nav prev" onClick={goToPrev}>
          &#10094;
        </button>
        
        <div className="testimonials-container">
          {visibleTestimonials().map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              isActive={index === 0}
            />
          ))}
        </div>
        
        <button className="testimonial-nav next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      
      <div className="testimonial-dots">
        {testimonialsData.map((_, index) => (
          <span 
            key={index} 
            className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;