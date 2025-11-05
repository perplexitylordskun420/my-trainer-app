import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Dziękuję za wiadomość! Skontaktuję się z Tobą wkrótce.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Kontakt</h2>
        <p className="contact-subtitle">Skontaktuj się, aby omówić swoje cele fitness</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>📞 Bezpośredni Kontakt</h3>
              <a href="tel:503975998">503-975-998</a>
              <p>Dostępny: Pon-Pią 16:00-21:00</p>
            </div>

            <div className="info-card">
              <h3>📍 Studio w Lesie</h3>
              <p>Ulica Pracka, Prace Duże</p>
              <p>Unikatowe środowisko treningowe</p>
            </div>

            <div className="info-card">
              <h3>🕒 Godziny</h3>
              <p>Pon-Pią: 16:00-21:00</p>
              <p>Sobota: Dostępny</p>
              <p>Niedziela: Na życzenie</p>
            </div>

            <div className="process-card">
              <h3>Proces Rezerwacji</h3>
              <ol>
                <li><strong>Wypełnij Ocenę</strong> - Ankieta medyczna</li>
                <li><strong>Zadzwoń</strong> - 503-975-998</li>
                <li><strong>Rozpocznij</strong> - Pierwszy trening</li>
              </ol>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Imię i nazwisko</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Telefon</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Wiadomość</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Wyślij Wiadomość</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
