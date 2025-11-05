import React, { useState } from 'react';
import '../styles/Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span>🏋️ SPORT AREA</span>
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('services')}>Usługi</a></li>
          <li><a onClick={() => scrollToSection('programs')}>Programy Cyfrowe</a></li>
          <li><a onClick={() => scrollToSection('wellness')}>Wellness</a></li>
          <li><a onClick={() => scrollToSection('about')}>O Mnie</a></li>
          <li><a onClick={() => scrollToSection('certificates')}>Certyfikaty</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Kontakt</a></li>
          <li>
            <a href="tel:503975998" className="phone-btn">
              📞 503-975-998
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
