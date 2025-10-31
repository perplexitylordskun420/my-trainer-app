import React, { useState } from "react";

function KontaktForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Wiadomość wysłana! (Zaimplementuj EmailJS lub własny backend.)");
  };

  return (
    <section id="kontakt">
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit}>
        <input required name="name" placeholder="Imię" />
        <input required type="email" name="email" placeholder="Adres e-mail" />
        <textarea required name="message" placeholder="Wiadomość"></textarea>
        <button type="submit">Wyślij</button>
      </form>
      <div>{status}</div>
      <p>
        <strong>Telefon:</strong> 123-456-789 <br />
        <strong>Email:</strong> kontakt@twojastrona.pl
      </p>
    </section>
  );
}

export default KontaktForm;
