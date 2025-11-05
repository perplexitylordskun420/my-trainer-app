import React from 'react';
import '../styles/CorporateWellness.css';

function CorporateWellness() {
  const packages = [
    {
      name: 'Startup Package',
      price: '500 PLN/miesiąc',
      employees: 'do 20 pracowników',
      features: ['Miesięczna konsultacja grupowa', 'Podstawowe zajęcia fitness', 'Poradnictwo w aktywności', 'Wsparcie mailowe'],
      popular: false
    },
    {
      name: 'Business Package',
      price: '1500 PLN/miesiąc',
      employees: '21-50 pracowników',
      features: ['Regularna ocena fitness', 'Zajęcia w firmie', 'Szkolenia z ergonomii', 'Raportowanie dla HR', 'Dedykowany opiekun'],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: '3000+ PLN/miesiąc',
      employees: '50+ pracowników',
      features: ['Kompleksowe programy wellness', 'Obsługa wielu lokalizacji', 'Zaawansowana analityka', 'Rozwiązania indywidualne', 'Dedykowany zespół'],
      popular: false
    }
  ];

  return (
    <section id="wellness" className="corporate-wellness">
      <div className="container">
        <h2>🏢 Wellness Korporacyjny</h2>
        <p className="section-subtitle">Kompleksowe programy zdrowia i aktywności fizycznej dla firm różnej wielkości</p>
        
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="recommended-badge">Polecane</div>}
              
              <h3>{pkg.name}</h3>
              <div className="package-price">{pkg.price}</div>
              <p className="employees">{pkg.employees}</p>
              
              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              
              <button className="btn btn-primary">Otrzymaj Ofertę</button>
            </div>
          ))}
        </div>

        <div className="benefits-section">
          <h3>Korzyści z Programów Wellness</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <h4>Zwiększona Produktywność</h4>
              <p>Aktywni pracownicy są bardziej efektywni w pracy</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">❤️</div>
              <h4>Lepsza Kondycja Zespołu</h4>
              <p>Regularna aktywność poprawia samopoczucie</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h4>Lepsze Relacje</h4>
              <p>Wspólne ćwiczenia budują więzi w zespole</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h4>Mniej Zwolnień Chorobowych</h4>
              <p>Zdrowsi pracownicy = mniej absencji</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorporateWellness;
