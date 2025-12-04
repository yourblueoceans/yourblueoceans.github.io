import React from "react";
import HeroSection from "./components/HeroSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      {/* 상단 네비게이션(이미 따로 있다면 여기에 포함하면 됨) */}
      {/* <Header /> */}
      <main>
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
