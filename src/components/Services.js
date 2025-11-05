import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services-content">
          <div className="service-card featured">
            <div className="service-badge">💪 Najpopularniejsza Usługa</div>
            <h3>Personal Training with Sports Rehabilitation</h3>
            <div className="price">200 PLN <span>/ sesja 60 minut</span></div>
            
            <p className="description">
              Indywidualny trening z elementami rehabilitacji sportowej dla osób powracających do aktywności po kontuzjach
            </p>
            
            <ul className="benefits">
              <li>🎯 Ocena wzorców ruchowych</li>
              <li>📋 Indywidualny program treningowy</li>
              <li>📊 Analiza składu ciała (Tanita RD-545)</li>
              <li>📈 Monitoring postępów</li>
              <li>⚕️ Korekcja techniki ćwiczeń</li>
              <li>🕒 Harmonogram treningów</li>
            </ul>
            
            <button className="btn btn-primary">Umów Trening</button>
          </div>

          <div className="service-card">
            <h3>Online Consultations</h3>
            <div className="price">100 PLN <span>/ sesja 30 minut</span></div>
            
            <p className="description">
              Online coaching i ocena wzorców ruchowych przez widekonferencję
            </p>
            
            <ul className="benefits">
              <li>📹 Ocena ruchu przez kamerę</li>
              <li>📋 4-tygodniowy plan ćwiczeń</li>
              <li>🎥 Instrukcje wideo do ćwiczeń</li>
              <li>💬 Wsparcie przez chat</li>
              <li>📞 Follow-up po 2 tygodniach</li>
              <li>📅 Rezerwacja online</li>
            </ul>
            
            <button className="btn btn-secondary">Umów Konsultację</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
