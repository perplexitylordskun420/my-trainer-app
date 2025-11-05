import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>O Trenerze</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Jestem magistrem wychowania fizycznego z AWF Warszawa oraz oficerem Wojska Polskiego z 15-letnim doświadczeniem. Łączę wojskową dyscyplinę z najnowszymi metodami fitness i rehabilitacji sportowej.
            </p>
            <p>
              Moja specjalność to profesjonalny trening personalny, wellness korporacyjny i programy cyfrowe. Każdy klient otrzymuje program dostosowany do swoich potrzeb, z wykorzystaniem nowoczesnych technologii i sprawdzonych metod treningowych.
            </p>
            
            <h3>Wykształcenie i Certyfikaty:</h3>
            <ul className="about-list">
              <li>🎓 Magister Wychowania Fizycznego - AWF Warszawa</li>
              <li>🏥 Studia Podyplomowe - Fizjoterapia w Sporcie</li>
              <li>🏆 REPs Poland - Certified Personal Trainer</li>
              <li>🎖️ Oficer Wojska Polskiego - aktywna służba (15+ lat)</li>
              <li>📊 Certyfikowany Operator - Tanita RD-545</li>
            </ul>

            <h3>Profesjonalne Usługi:</h3>
            <ul className="about-list">
              <li>Personal Training z rehabilitacją sportową</li>
              <li>Programy cyfrowe fitness</li>
              <li>Wellness korporacyjny dla firm</li>
              <li>Konsultacje online</li>
              <li>Trening oparty na precyzji wojskowej</li>
            </ul>
          </div>
          
          <div className="about-stats">
            <div className="about-stat">
              <h3>15+</h3>
              <p>Lat doświadczenia</p>
            </div>
            <div className="about-stat">
              <h3>500+</h3>
              <p>Zadowolonych klientów</p>
            </div>
            <div className="about-stat">
              <h3>100%</h3>
              <p>Dedykacja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
