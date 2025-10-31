import React from 'react';
import './Qualifications.css';

function Qualifications() {
  return (
    <section className="qualifications-section">
      <div className="container">
        <h2>Profesjonalne Kwalifikacje</h2>
        <div className="qualifications-content">
          <p>Poznaj moje certyfikaty i kwalifikacje zawodowe.</p>
          <a 
            href="https://sites.google.com/view/trener-personalny-warszawa/referencje" 
            target="_blank" 
            rel="noopener noreferrer"
            className="certyfikaty-button"
          >
            Zobacz Pełne Certyfikaty →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
