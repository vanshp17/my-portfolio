import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css'; // Import the CSS for styling

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Overlay for mobile menu */}
      {isOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
      
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="#hero">Portfolio</a>
          </div>
          
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          
          <div className={`navbar-drawer ${isOpen ? 'active' : ''}`}>
            <ul className="navbar-menu">
              <li className="navbar-item">
                <a 
                  href="#hero" 
                  className={`navbar-link ${activeSection === 'hero' ? 'active' : ''}`} 
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a 
                  href="#about" 
                  className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`} 
                  onClick={closeMenu}
                >
                  About Me
                </a>
              </li>
              <li className="navbar-item">
                <a 
                  href="#skills" 
                  className={`navbar-link ${activeSection === 'skills' ? 'active' : ''}`} 
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>
              <li className="navbar-item">
                <a 
                  href="#projects" 
                  className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`} 
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li className="navbar-item">
                <a 
                  href="#testimonials" 
                  className={`navbar-link ${activeSection === 'testimonials' ? 'active' : ''}`} 
                  onClick={closeMenu}
                >
                  Testimonials
                </a>
              </li>
              <li className="navbar-item">
                <a 
                  href="#contact" 
                  className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`} 
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;