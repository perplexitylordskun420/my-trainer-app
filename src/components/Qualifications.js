import React from 'react';
import '../styles/Qualifications.css';

function Qualifications() {
  const qualifications = [
    { icon: '🎓', title: 'Magister Wychowania Fizycznego', issuer: 'AWF Warszawa' },
    { icon: '🏥', title: 'Studia Podyplomowe - Fizjoterapia w Sporcie', issuer: '2024' },
    { icon: '🏆', title: 'REPs Poland Certified Personal Trainer', issuer: 'REPs Poland' },
    { icon: '🎖️', title: 'Oficer Wojska Polskiego - Aktywna Służba', issuer: '15+ lat' },
    { icon: '📊', title: 'Certyfikowany Operator Tanita RD-545', issuer: 'Body Composition' }
  ];

  return (
    <section id="certificates" className="qualifications">
      <div className="container">
        <h2>Profesjonalne Kwalifikacje</h2>
        <div className="qualifications-grid">
          {qualifications.map((qual, index) => (
            <div key={index} className="qualification-card">
              <div className="qual-icon">{qual.icon}</div>
              <h3>{qual.title}</h3>
              <p>{qual.issuer}</p>
            </div>
          ))}
        </div>
        {/* Link do certyfikatów - widoczny, estetyczny */}
        <a
          href="https://sites.google.com/view/trener-personalny-warszawa/referencje"
          target="_blank"
          rel="noopener noreferrer"
          className="link-btn"
          style={{ marginTop: '20px', display: 'inline-block', background: '#4682B4', color: '#fff', padding: '10px 18px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          📄 Zobacz moje pełne certyfikaty
        </a>
      </div>
    </section>
  );
}

export default Qualifications;
