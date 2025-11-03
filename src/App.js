import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Dziękujemy! Wkrótce się skontaktujemy.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">💪 FitTrainer</div>
          
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')}>O mnie</a>
            <a href="#services" onClick={() => scrollToSection('services')}>Usługi</a>
            <a href="#pricing" onClick={() => scrollToSection('pricing')}>Cennik</a>
            <a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Referencje</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Kontakt</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Trener Personalny & Medyczny</h1>
          <p>Kompleksowe podejście do zdrowia i kondycji fizycznej</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Zarezerwuj konsultację
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('services')}>
              Poznaj moje usługi
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <h2>O mnie</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="/images/placeholder.jpg" alt="Trainer" />
            </div>
            <div className="about-text">
              <p>
                Jestem lekarzem ortopedą z 10+ letnim doświadczeniem w medycynie sportowej 
                i treningach personalnych. Moim celem jest pomóc Ci osiągnąć optymalne zdrowienie 
                i wyniki fizyczne poprzez holistyczne podejście.
              </p>
              <h3>Certyfikaty i kwalifikacje:</h3>
              <ul className="certifications">
                <li>💪 Trener Personalny ACE</li>
                <li>🏥 Doktor Medycyny</li>
                <li>🥗 Nutrition Specialist</li>
                <li>📋 Rehabilitation Coach</li>
              </ul>
              <div className="counters">
                <div className="counter">
                  <div className="counter-number">10+</div>
                  <div className="counter-label">Lat doświadczenia</div>
                </div>
                <div className="counter">
                  <div className="counter-number">500+</div>
                  <div className="counter-label">Zadowolonych klientów</div>
                </div>
                <div className="counter">
                  <div className="counter-number">1000+</div>
                  <div className="counter-label">Sesji przeprowadzonych</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="container">
          <h2>Moje Usługi</h2>
          <div className="services-grid">
            <ServiceCard icon="🏋️" title="Trening Personalny" description="Indywidualne sesje treningowe dostosowane do Twoich celów" />
            <ServiceCard icon="🏥" title="Konsultacje Medyczne" description="Kompleksowa ocena zdrowia i rekomendacje" />
            <ServiceCard icon="📋" title="Planowanie Treningów" description="Spersonalizowane programy treningowe" />
            <ServiceCard icon="🥗" title="Coaching Żywienia" description="Plany dietetyczne i poradnictwo" />
            <ServiceCard icon="💻" title="Treningi Online" description="Profesjonalne sesje wirtualne" />
            <ServiceCard icon="🎯" title="Programy Transformacji" description="Intensywne 4, 6 lub 8-tygodniowe programy" />
            <ServiceCard icon="👥" title="Trening Grupowy" description="Zajęcia energetyczne w studio" />
            <ServiceCard icon="🏢" title="Usługi dla Firm" description="Dedykowane programy wellness" />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Pakiety Cenowe</h2>
          <div className="pricing-grid">
            <PricingCard name="Starter" price="299" popular={false} features={["5 treningów/miesiąc", "Plan treningowy", "Wsparcie mailowe", "Pomiary ciała"]} />
            <PricingCard name="Standard" price="549" popular={false} features={["10 treningów/miesiąc", "Plan treningowy", "Plan żywieniowy", "Wsparcie 24/7", "Pomiary co tydzień"]} />
            <PricingCard name="Premium" price="899" popular={true} features={["Nieograniczone treningi", "Plan treningowy", "Plan żywieniowy", "Konsultacje medyczne", "Wsparcie 24/7", "Suplementacja"]} />
            <PricingCard name="Online" price="399" popular={false} features={["Treningi zdalne", "Plan treningowy", "Wsparcie online", "Materiały wideo", "Analiza postępów"]} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Co mówią moi klienci</h2>
          <div className="testimonials-grid">
            <TestimonialCard name="Anna Kowalska" rating={5} text="Najlepszy trener, z jakim miałam przyjemność pracować! Profesjonalizm i świetne rezultaty." />
            <TestimonialCard name="Piotr Nowak" rating={5} text="Osiągnąłem cele, które wydawały się niemożliwe. Polecam każdemu!" />
            <TestimonialCard name="Karolina Wiśniewska" rating={5} text="Kompleksowe podejście do zdrowia. To naprawdę działa!" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <div className="container">
          <h2>Często Zadawane Pytania</h2>
          <div className="faq-container">
            <FAQItem question="Jak wygląda pierwsza sesja?" answer="Pierwsza sesja to poznanie się i omówienie celów. Przeprowadzam wywiad zdrowotny, pomiary i test sprawności." />
            <FAQItem question="Czy potrzebuję doświadczenia?" answer="Nie! Pracuję z osobami na każdym poziomie zaawansowania." />
            <FAQItem question="Jaka jest polityka anulowania?" answer="Zajęcia można odwołać bez konsekwencji na 24 godziny przed sesją." />
            <FAQItem question="Czy oferujesz treningi online?" answer="Tak! Oferuję pełne wsparcie online." />
            <FAQItem question="Ile czasu zanim zobaczę rezultaty?" answer="Pierwsze efekty po 2-3 tygodniach. Znaczące zmiany po 6-8 tygodniach." />
            <FAQItem question="Czy mogę trenować z urazami?" answer="Tak! Moje wykształcenie medyczne pozwala pracować z osobami po urazach." />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Skontaktuj się ze mną</h2>
          <div className="contact-content">
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Imię i nazwisko</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleFormChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Temat</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleFormChange}>
                    <option value="">Wybierz temat</option>
                    <option value="rezerwacja">Rezerwacja</option>
                    <option value="pytanie">Pytanie</option>
                    <option value="wspolpraca">Współpraca</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Wiadomość</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleFormChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Wyślij wiadomość</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Informacje kontaktowe</h3>
              <div className="info-item">
                <strong>Adres:</strong>
                <p>ul. Pracka 12, 00-000 Warszawa</p>
              </div>
              <div className="info-item">
                <strong>Telefon:</strong>
                <p><a href="tel:+48123456789">+48 123 456 789</a></p>
              </div>
              <div className="info-item">
                <strong>Email:</strong>
                <p><a href="mailto:kontakt@trenermedyczny.pl">kontakt@trenermedyczny.pl</a></p>
              </div>
              <div className="info-item">
                <strong>Godziny pracy:</strong>
                <p>Pn-Pt: 6:00 - 21:00<br />Sb: 8:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 FitTrainer. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function PricingCard({ name, price, popular, features }) {
  return (
    <div className={`pricing-card ${popular ? 'popular' : ''}`}>
      {popular && <div className="popular-badge">POPULARNE</div>}
      <h3>{name}</h3>
      <div className="price"><span className="amount">{price}</span><span className="currency">PLN</span></div>
      <ul className="features">
        {features.map((f, i) => <li key={i}>✓ {f}</li>)}
      </ul>
      <button className="btn btn-primary">Zarezerwuj</button>
    </div>
  );
}

function TestimonialCard({ name, rating, text }) {
  return (
    <div className="testimonial-card">
      <div className="stars">{'⭐'.repeat(rating)}</div>
      <p>"{text}"</p>
      <p className="testimonial-author">— {name}</p>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className={`faq-question ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-arrow">›</span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

export default App;
