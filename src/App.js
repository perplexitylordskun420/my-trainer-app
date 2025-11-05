import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScMH0fF5ZID6zY5PeC5Wp7xXjTf1VHND4Pert7cbUI7pRWEIQ/viewform?usp=sharing";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const trustMetrics = {
    clients: "500+",
    satisfaction: "4.9/5",
    yearsExperience: "15+"
  };

  const pricing = [
    { emoji: "💪", title: "Personal Training", price: "200", unit: "PLN/sesja (60 min)" },
    { emoji: "📱", title: "Online Konsultacja", price: "100", unit: "PLN (30 min)" },
    { emoji: "💻", title: "Programy Cyfrowe", price: "79", unit: "PLN/miesiąc" },
    { emoji: "🏢", title: "Wellness Korporacyjny", price: "500", unit: "PLN/miesiąc" }
  ];

  const beforeAfter = [
    { name: "Anna K.", before: -15, after: "+8kg mięśni", duration: "3 miesiące" },
    { name: "Piotr N.", before: -20, after: "+25kg siły", duration: "4 miesiące" },
    { name: "Karolina L.", before: -12, after: "+6kg mięśni", duration: "2.5 miesiąca" }
  ];

  const personalTraining = {
    title: "💪 Personal Training with Sports Rehabilitation",
    price: "200 PLN",
    duration: "sesja 60 minut",
    features: [
      "🎯 Ocena wzorców ruchowych",
      "📊 Analiza składu ciała na profesjonalnym analizatorze",
      "📋 Indywidualny program treningowy",
      "📈 Monitoring postępów",
      "⚕️ Korekcja techniki ćwiczeń",
      "🕒 Harmonogram treningów"
    ],
    description: "Indywidualny trening z elementami rehabilitacji sportowej dla osób powracających do aktywności po kontuzjach. Każda sesja zawiera profesjonalną analizę składu ciała.",
    analyzerInfo: "Otrzymasz szczegółowy raport z analizy oraz dostęp do aplikacji mobilnej, w której będziesz śledzić swoje postępy."
  };

  const digitalPrograms = [
    {
      icon: "🔄",
      title: "Return to Movement Program",
      price: "79 PLN",
      duration: "/miesiąc",
      subtitle: "Po kontuzjach sportowych",
      description: "8-tygodniowy program powrotu do aktywności po kontuzjach z 40+ ćwiczeniami wideo",
      features: ["40+ ćwiczeń wideo z instrukcjami", "8-tygodniowa progresja treningowa", "Wskazówki bezpiecznego powrotu", "Śledzenie postępów", "Wsparcie przez chat"]
    },
    {
      icon: "🎖️",
      title: "Military Fitness Prep",
      price: "99 PLN",
      duration: "/miesiąc",
      subtitle: "Przygotowanie do służby",
      featured: true,
      description: "Kompletne przygotowanie fizyczne do testów sprawności w strukturach wojskowych i służbach",
      features: ["Testy sprawności wojskowej", "Protokoły wytrzymałościowe", "Trening funkcjonalny", "Przygotowanie mentalne", "Plan żywieniowy"]
    },
    {
      icon: "👶",
      title: "Post-Pregnancy Fitness Program",
      price: "89 PLN",
      duration: "/miesiąc",
      subtitle: "Powrót do formy po ciąży",
      description: "Bezpieczny powrót do aktywności fizycznej po porodzie z uwzględnieniem okresu regeneracji",
      features: ["Ćwiczenia głębokich mięśni", "Stopniowa progresja obciążeń", "Korekcja postawy ciała", "Wsparcie społeczności matek", "Elastyczność i mobilność"]
    }
  ];

  const certifications = [
    { icon: "🎓", title: "REPs Poland", subtitle: "Certified Personal Trainer", status: "Aktywny" },
    { icon: "🏥", title: "AWF Warszawa", subtitle: "Magister Wychowania Fizycznego", status: "Aktywny" },
    { icon: "⚕️", title: "Fizjoterapia", subtitle: "Studia Podyplomowe w Sporcie", status: "2024" },
    { icon: "🎖️", title: "Oficer WP", subtitle: "Aktywna Służba - 15+ lat", status: "Aktywny" }
  ];

  const testimonials = [
    { name: "Anna Kowalska", role: "Biznesmenka", text: "Najlepszy trener jaki miałam! Wyniki widoczne po 4 tygodniach. Polecam!", rating: 5, image: "👩‍💼" },
    { name: "Piotr Nowak", role: "Wojskowy", text: "Profesjonalizm, wiedza medyczna i indywidualne podejście. Poleciłem do wszystkich kolegów!", rating: 5, image: "🪖" },
    { name: "Karolina Lewandowska", role: "Mama", text: "Po ciąży czułam się bezradna. Dzięki programowi wróciłam do formy w 3 miesiące!", rating: 5, image: "👩‍🦰" }
  ];

  return (
    <div className="app">
      <a href={formUrl} target="_blank" rel="noopener noreferrer" className="sticky-cta">
        <div className="sticky-cta-btn">
          📞 503-975-998<br/><span className="cta-label">ZAREZERWUJ</span>
        </div>
      </a>

      <div className="urgency-banner">
        <div className="urgency-content">
          <span className="urgency-icon">🎁</span>
          <span className="urgency-text"><strong>BONUS:</strong> Darmowa analiza ciała - do końca listopada!</span>
          <span className="urgency-icon">⏳</span>
          <span className="urgency-text"><strong>Tylko 5 miejsc dostępnych</strong></span>
        </div>
      </div>

      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">🏋️ SPORT AREA</div>
          <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span><span></span><span></span>
          </button>
          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('home')}>Usługi</a>
            <a onClick={() => scrollToSection('pricing')}>Cennik</a>
            <a onClick={() => scrollToSection('digital-programs')}>Programy Cyfrowe</a>
            <a onClick={() => scrollToSection('wellness')}>Wellness</a>
            <a onClick={() => scrollToSection('about')}>O Mnie</a>
            <a onClick={() => scrollToSection('certifications')}>Certyfikaty</a>
            <a onClick={() => scrollToSection('contact')}>Kontakt</a>
            <a href="tel:+48503975998" className="phone-link">📞 503-975-998</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero-sport">
        <div className="hero-content-sport">
          <div className="hero-badge-sport">🎖️ Oficer WP • REPs Poland Certified • Magister AWF</div>
          <h1>SPORT AREA</h1>
          <p className="tagline">Wojskowa Precyzja w Nowoczesnym Fitness</p>
          <p className="subtitle">Profesjonalny Trening z 15+ Letnim Doświadczeniem</p>
          <div className="trust-section">
            <div className="trust-stat">
              <span className="trust-number">{trustMetrics.clients}</span>
              <span className="trust-label">Zadowolonych Klientów</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-stat">
              <span className="trust-number">{trustMetrics.satisfaction}</span>
              <span className="trust-label">Średnia Ocena</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-stat">
              <span className="trust-number">{trustMetrics.yearsExperience}</span>
              <span className="trust-label">Lat Doświadczenia</span>
            </div>
          </div>
          <p className="description">
            Łączę wojskową dyscyplinę z najnowszymi metodami fitness. Specjalizuję się w treningu personalnym, rehabilitacji sportowej i wellness korporacyjnym. Profesjonalne podejście oparte na precyzji wojskowej i nowoczesnej wiedzy fitness.
          </p>
          <div className="unique-selling-points">
            <div className="usp">✅ Jedynym trenera z dyplomem MEDYCZNYM w Warszawie</div>
            <div className="usp">✅ System "Precyzja Wojskowa" - dostownie do 0,1%</div>
            <div className="usp">✅ Gwarancja: wyniki w 30 dni lub zwrot pieniędzy</div>
          </div>
          <div className="hero-buttons-sport">
            <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Rozpocznij Bezpłatną Ocenę
            </a>
            <a href="tel:+48503975998" className="btn btn-outline">Zadzwoń: 503-975-998</a>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2>Przejrzysty Cennik</h2>
          <p className="section-desc">Nie ma ukrytych kosztów - wszystko jasne od początku</p>
          <div className="pricing-grid">
            {pricing.map((item, idx) => (
              <div key={idx} className="pricing-card">
                <div className="pricing-emoji">{item.emoji}</div>
                <h3>{item.title}</h3>
                <div className="pricing-amount">
                  <span className="amount">{item.price}</span>
                  <span className="unit">{item.unit}</span>
                </div>
                <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">Zarezerwuj</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="before-after-section">
        <div className="container">
          <h2>Rzeczywiste Metamorfozy</h2>
          <p className="section-desc">Rzeczywiste wyniki z moimi klientami</p>
          <div className="before-after-grid">
            {beforeAfter.map((item, idx) => (
              <div key={idx} className="ba-card">
                <div className="ba-header">{item.name}</div>
                <div className="ba-comparison">
                  <div className="ba-before">
                    <span className="ba-emoji">😟</span>
                    <span className="ba-label">PRZED</span>
                  </div>
                  <div className="ba-arrow">→</div>
                  <div className="ba-after">
                    <span className="ba-emoji">💪</span>
                    <span className="ba-label">PO</span>
                  </div>
                </div>
                <div className="ba-result">
                  <span className="ba-weight">{item.before}kg</span>
                  <span className="ba-gain">{item.after}</span>
                </div>
                <div className="ba-duration">⏱️ {item.duration}</div>
              </div>
            ))}
          </div>
          <div className="ba-note">
            <p>💡 Rezultaty mogą się różnić w zależności od zaangażowania i przyczyn startu</p>
          </div>
        </div>
      </section>

      <section className="qualifications-section">
        <div className="container">
          <h2>Profesjonalne Kwalifikacje</h2>
          <div className="qualifications-list">
            <div className="qual-item">🎓 Magister Wychowania Fizycznego (AWF Warszawa)</div>
            <div className="qual-item">🏥 Studia Podyplomowe - Fizjoterapia w Sporcie</div>
            <div className="qual-item">🏆 REPs Poland Certified Personal Trainer</div>
            <div className="qual-item">🎖️ Oficer Wojska Polskiego - Aktywna Służba</div>
          </div>
          <a href="https://sites.google.com/view/trener-personalny-warszawa/referencje" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Zobacz Pełne Certyfikaty
          </a>
        </div>
      </section>

      <section id="services" className="services-sport">
        <div className="container">
          <h2>Najpopularniejsza Usługa</h2>
          <div className="service-main">
            <div className="service-badge">Najpopularniejsze</div>
            <h3>{personalTraining.title}</h3>
            <p className="service-desc">{personalTraining.description}</p>
            <div className="service-price">
              <span className="price">{personalTraining.price}</span>
              <span className="duration">/ {personalTraining.duration}</span>
            </div>
            <ul className="features-list">
              {personalTraining.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <div className="analyzer-info">
              <p><strong>📊 Analiza Składu Ciała:</strong> {personalTraining.analyzerInfo}</p>
            </div>
            <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">
              Umów Trening
            </a>
          </div>
        </div>
      </section>

      <section id="digital-programs" className="digital-section">
        <div className="container">
          <h2>💻 Programy Cyfrowe</h2>
          <p className="section-desc">Strukturalne programy treningowe online z instrukcjami wideo i śledzeniem postępów</p>
          <div className="programs-grid">
            {digitalPrograms.map((prog, idx) => (
              <div key={idx} className={`program-card ${prog.featured ? 'featured' : ''}`}>
                {prog.featured && <div className="featured-badge">Polecane</div>}
                <div className="program-icon">{prog.icon}</div>
                <h3>{prog.title}</h3>
                <p className="program-subtitle">{prog.subtitle}</p>
                <div className="program-price">
                  <span>{prog.price}</span>
                  <span>{prog.duration}</span>
                </div>
                <p className="program-description">{prog.description}</p>
                <h4>Co zawiera:</h4>
                <ul className="program-features">
                  {prog.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">
                  Rozpocznij Program
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="wellness" className="wellness-section">
        <div className="container">
          <h2>🏢 Wellness Korporacyjny</h2>
          <p className="section-desc">Kompleksowe programy zdrowia i aktywności fizycznej dla firm różnej wielkości</p>
          <div className="wellness-grid">
            <div className="wellness-card">
              <div className="wellness-icon">🚀</div>
              <h3>Startup Package</h3>
              <p className="wellness-size">do 20 pracowników</p>
              <div className="wellness-price"><span>500</span> PLN/miesiąc</div>
              <ul className="wellness-features">
                <li>Miesięczna konsultacja grupowa</li>
                <li>Podstawowe zajęcia fitness</li>
                <li>Poradnictwo w zakresie aktywności fizycznej</li>
                <li>Wsparcie mailowe</li>
              </ul>
              <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">Sprawdź Pakiet</a>
            </div>
            <div className="wellness-card featured">
              <div className="featured-badge">Polecane</div>
              <div className="wellness-icon">💼</div>
              <h3>Business Package</h3>
              <p className="wellness-size">21-50 pracowników</p>
              <div className="wellness-price"><span>1500</span> PLN/miesiąc</div>
              <ul className="wellness-features">
                <li>Regularna ocena fitness pracowników</li>
                <li>Zajęcia w firmie</li>
                <li>Szkolenia z ergonomii</li>
                <li>Raportowanie dla HR</li>
                <li>Dedykowany opiekun</li>
              </ul>
              <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">Otrzymaj Ofertę</a>
            </div>
            <div className="wellness-card">
              <div className="wellness-icon">🏢</div>
              <h3>Enterprise Package</h3>
              <p className="wellness-size">50+ pracowników</p>
              <div className="wellness-price"><span>3000+</span> PLN/miesiąc</div>
              <ul className="wellness-features">
                <li>Kompleksowe programy wellness</li>
                <li>Obsługa wielu lokalizacji</li>
                <li>Zaawansowana analityka</li>
                <li>Rozwiązania indywidualne</li>
                <li>Dedykowany zespół</li>
              </ul>
              <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">Skontaktuj się</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>O Trenerze</h2>
          <p className="about-lead">15+ lat doświadczenia w służbie Twojej formy</p>
          <div className="about-content">
            <div className="about-text">
              <p>
                Jestem magistrem wychowania fizycznego z AWF Warszawa oraz oficerem Wojska Polskiego z 15-letnim doświadczeniem. Łączę wojskową dyscyplinę z najnowszymi metodami fitness i rehabilitacji sportowej. Moja specjalność to profesjonalny trening personalny, wellness korporacyjny i programy cyfrowe.
              </p>
              <h3>Wykształcenie i Certyfikaty:</h3>
              <ul className="about-list">
                <li>Magister Wychowania Fizycznego - AWF Warszawa</li>
                <li>Studia Podyplomowe - Fizjoterapia w Sporcie</li>
                <li>REPs Poland - Certified Personal Trainer</li>
                <li>Oficer Wojska Polskiego - aktywna służba (15+ lat)</li>
              </ul>
              <h3>Profesjonalne Usługi Fitness i Wellness:</h3>
              <ul className="about-list">
                <li>Personal Training z rehabilitacją sportową</li>
                <li>Analiza składu ciała na profesjonalnym analizatorze</li>
                <li>Programy cyfrowe fitness</li>
                <li>Wellness korporacyjny dla firm</li>
                <li>Konsultacje online</li>
                <li>Trening oparty na precyzji wojskowej</li>
              </ul>
            </div>
            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-number">15+</div>
                <div className="stat-label">lat doświadczenia</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">500+</div>
                <div className="stat-label">zadowolonych klientów</div>
              </div>
            </div>
          </div>
          <div className="studio-info">
            <h3>Studio Fitness w Lesie</h3>
            <p><strong>Lokalizacja:</strong> Ulica Pracka, Prace Duże</p>
            <p><strong>Koncepcja:</strong> Unikatowe studio w naturalnym środowisku leśnym</p>
            <p><strong>Godziny Dostępności:</strong></p>
            <ul>
              <li>Pon-Pią: 16:00-21:00</li>
              <li>Sobota: Dostępny</li>
              <li>Niedziela: Na życzenie</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="certifications" className="certifications-section">
        <div className="container">
          <h2>Certyfikaty i Kwalifikacje</h2>
          <p className="section-subtitle">15+ lat profesjonalizmu potwierdzonego certyfikatami</p>
          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-icon">{cert.icon}</div>
                <h3>{cert.title}</h3>
                <p className="cert-subtitle">{cert.subtitle}</p>
                <p className="cert-status">{cert.status}</p>
              </div>
            ))}
          </div>
          <div className="full-certs-box">
            <h3>Zobacz Pełne Certyfikaty i Referencje</h3>
            <p>Wszystkie certyfikaty, dyplomy i kwalifikacje dostępne w pełnej galerii z możliwością weryfikacji.</p>
            <a href="https://sites.google.com/view/trener-personalny-warszawa/referencje" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Zobacz Wszystkie Certyfikaty →
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>Opinie Klientów</h2>
          <div className="testimonials-slider">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className={`testimonial-item ${idx === currentSlide ? 'active' : ''}`}>
                <div className="testimonial-card">
                  <div className="testimonial-avatar">{testimonial.image}</div>
                  <h3>{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <div className="testimonial-stars">{'⭐'.repeat(testimonial.rating)}</div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {testimonials.map((_, idx) => (
              <button key={idx} className={`dot ${idx === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)}></button>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Kontakt & Rezerwacja</h2>
          <p className="contact-subtitle">Skontaktuj się, aby omówić swoje cele fitness</p>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h4>Bezpośredni Kontakt</h4>
              <a href="tel:+48503975998">503-975-998</a>
              <p>Dostępny: Pon-Pią 16:00-21:00</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h4>Studio w Lesie</h4>
              <p>Ulica Pracka, Prace Duże</p>
              <p>Unikatowe środowisko treningowe</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <h4>Godziny</h4>
              <p>Pon-Pią: 16:00-21:00</p>
              <p>Sobota: Dostępny</p>
            </div>
          </div>
          <div className="process-box">
            <h3>Proces Rezerwacji</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-num">1</div>
                <h4>Zarezerwuj</h4>
                <p>Kliknij przycisk poniżej</p>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <h4>Pierwszy Kontakt</h4>
                <p>Dzwonię w ciągu 24h</p>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <h4>Konsultacja</h4>
                <p>Omówienie celów i planu</p>
              </div>
            </div>
          </div>
          <div className="final-cta">
            <h2>Gotowy na zmianę?</h2>
            <p>15+ lat doświadczenia, 500+ zadowolonych klientów</p>
            <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Zarezerwuj Bezpłatną Konsultację
            </a>
            <a href="tel:+48503975998" className="btn btn-outline">Lub zadzwoń: 503-975-998</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🏋️ SPORT AREA</h4>
              <p>Wojskowa Precyzja w Nowoczesnym Fitness</p>
              <p>15+ lat profesjonalnego doświadczenia</p>
            </div>
            <div className="footer-section">
              <h4>Usługi</h4>
              <ul>
                <li>Personal Training - 200 PLN/sesja</li>
                <li>Online Konsultacje - 100 PLN/sesja</li>
                <li>Programy Cyfrowe - od 79 PLN/miesiąc</li>
                <li>Wellness Korporacyjny - od 500 PLN/miesiąc</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Programy Cyfrowe</h4>
              <ul>
                <li>Return to Movement - 79 PLN/miesiąc</li>
                <li>Military Fitness Prep - 99 PLN/miesiąc</li>
                <li>Post-Pregnancy Fitness - 89 PLN/miesiąc</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Kontakt</h4>
              <p>📞 <a href="tel:+48503975998">503-975-998</a></p>
              <p>📍 Ulica Pracka, Prace Duże</p>
              <p>🕒 Pon-Pią: 16:00-21:00</p>
              <a href="https://sites.google.com/view/trener-personalny-warszawa/referencje" target="_blank" rel="noopener noreferrer">
                Zobacz certyfikaty
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 SPORT AREA. Wszystkie prawa zastrzeżone.</p>
            <p>15+ lat doświadczenia • 500+ zadowolonych klientów</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
