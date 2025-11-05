import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="services" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">🎖️ Oficer WP • REPs Poland Certified • Magister AWF</div>
          
          <h1>SPORT AREA</h1>
          <p className="subtitle">Wojskowa Precyzja w Nowoczesnym Fitness</p>
          <p className="description">
            Profesjonalny Trening z 15+ Letnim Doświadczeniem - Łączę wojskową dyscyplinę z najnowszymi metodami fitness. Specjalizuję się w treningu personalnym, rehabilitacji sportowej i wellness korporacyjnym.
          </p>
          
          <div className="stats">
            <div className="stat-card">
              <h3>15+</h3>
              <p>lat doświadczenia</p>
            </div>
            <div className="stat-card">
              <h3>500+</h3>
              <p>zadowolonych klientów</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>precyzja wojskowa</p>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">Rozpocznij Bezpłatną Ocenę</button>
            <a href="tel:503975998" className="btn btn-secondary">Zadzwoń: 503-975-998</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
