import React from "react";

function OfertaSection() {
  return (
    <section>
      <h2>Oferta</h2>
      <ul>
        <li>
          <strong>Starter – analiza i 3 treningi:</strong> 800 zł / 14 dni <br />
          Pełna analiza, plan na start.<br />
          <a href="#kontakt">Zarezerwuj termin</a>
        </li>
        <li>
          <strong>Trening personalny 1:1:</strong> 150 zł / sesja<br />
          Indywidualizacja, motywacja.<br />
          <a href="#kontakt">Sprawdź dostępność</a>
        </li>
        <li>
          <strong>Pakiet 8 treningów:</strong> 1100 zł / 40 dni<br />
          Postęp, monitoring efektów.<br />
          <a href="#kontakt">Rezerwuj pakiet</a>
        </li>
        <li>
          <strong>Grupowy (2-4 os.):</strong> 900 zł / 8 treningów<br />
          Kamralność, wsparcie eksperta.<br />
          <a href="#kontakt">Zapisz się</a>
        </li>
        <li>
          <strong>Online (4 tyg.):</strong> 400 zł<br />
          Trenuj z domu i progresuj.<br />
          <a href="#kontakt">Spróbuj online</a>
        </li>
      </ul>
    </section>
  );
}

export default OfertaSection;
