import React from "react";
import HeroSection from "./components/HeroSection";
import TreatmentsSection from "./components/TreatmentsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FloatingButtons from "./components/FloatingButtons";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import ClinicBranches from "./components/ClinicBranches";
import BookAppointment from "./components/BookAppointment";

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <TreatmentsSection />
      <TestimonialsSection />
      <ClinicBranches />
      <WhyChooseUs />
      <FAQSection />
      <BookAppointment />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
