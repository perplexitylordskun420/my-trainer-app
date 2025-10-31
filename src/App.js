import React from "react";
import HeroSection from "./components/HeroSection";
import OfertaSection from "./components/OfertaSection";
import ReferencjeSection from "./components/ReferencjeSection";
import OmnieSection from "./components/OmnieSection";
import FAQSection from "./components/FAQSection";
import KontaktForm from "./components/KontaktForm";

function App() {
  return (
    <div>
      <HeroSection />
      <OfertaSection />
      <ReferencjeSection />
      <OmnieSection />
      <FAQSection />
      <KontaktForm />
    </div>
  );
}

export default App;
