import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>🏋️ SPORT AREA</h4>
            <p>Wojskowa Precyzja w Nowoczesnym Fitness</p>
            <p>15+ lat doświadczenia • 500+ zadowolonych klientów</p>
          </div>

          <div className="footer-section">
            <h4>Usługi</h4>
            <ul>
              <li><a href="#services">Personal Training</a></li>
              <li><a href="#programs">Programy Cyfrowe</a></li>
              <li><a href="#wellness">Wellness Korporacyjny</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>📍 Ulica Pracka, Prace Duże</p>
            <p>📞 <a href="tel:503975998">503-975-998</a></p>
            <p>🕒 Pon-Pią: 16:00-21:00</p>
          </div>

          <div className="footer-section">
            <h4>Certyfikaty</h4>
            <p>✓ AWF Warszawa</p>
            <p>✓ REPs Poland Certified</p>
            <p>✓ Oficer Wojska Polskiego</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 SPORT AREA. Wszystkie prawa zastrzeżone.</p>
          <p>Profesjonalne usługi fitness i wellness • Zgodność z RODO</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
