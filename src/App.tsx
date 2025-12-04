import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      <Header />
      <main className="pt-32">
        <HeroSection />
        <CaseStudiesSection />
        <ServicesSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
