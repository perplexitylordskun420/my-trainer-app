import React from 'react';
import '../styles/DigitalPrograms.css';

function DigitalPrograms() {
  const programs = [
    {
      name: 'Return to Movement Program',
      price: '79 PLN/miesiąc',
      duration: '8 tygodni',
      target: 'Po kontuzjach sportowych',
      features: ['40+ ćwiczeń wideo', '8-tygodniowa progresja', 'Wskazówki bezpiecznego powrotu', 'Śledzenie postępów', 'Wsparcie przez chat'],
      popular: false
    },
    {
      name: 'Military Fitness Prep',
      price: '99 PLN/miesiąc',
      duration: 'Continuous',
      target: 'Przygotowanie do służby',
      features: ['Testy sprawności wojskowej', 'Protokoły wytrzymałościowe', 'Trening funkcjonalny', 'Przygotowanie mentalne', 'Plan żywieniowy'],
      popular: true
    },
    {
      name: 'Post-Pregnancy Fitness Program',
      price: '89 PLN/miesiąc',
      duration: '12 tygodni',
      target: 'Powrót do formy po ciąży',
      features: ['Ćwiczenia głębokich mięśni', 'Stopniowa progresja', 'Korekcja postawy', 'Wsparcie społeczności', 'Elastyczność i mobilność'],
      popular: false
    }
  ];

  return (
    <section id="programs" className="digital-programs">
      <div className="container">
        <h2>💻 Programy Cyfrowe</h2>
        <p className="section-subtitle">Strukturalne programy treningowe online z instrukcjami wideo i śledzeniem postępów</p>
        
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className={`program-card ${program.popular ? 'popular' : ''}`}>
              {program.popular && <div className="popular-badge">Popularny</div>}
              
              <h3>{program.name}</h3>
              <div className="program-price">{program.price}</div>
              <p className="program-target">{program.target}</p>
              
              <ul className="program-features">
                {program.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              
              <button className="btn btn-outline">Rozpocznij Program</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DigitalPrograms;
