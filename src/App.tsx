import React from "react";
import Topbar from "./components/Topbar";
import HeroSection from "./components/HeroSection";
import FeaturedCaseStudy from "./components/FeaturedCaseStudy";
import CaseStudiesSection from "./components/CaseStudiesSection";
import WhatICanDoSection from "./components/WhatICanDoSection";
import MediaDeliverablesSection from "./components/MediaDeliverablesSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f6fc] text-slate-900 antialiased">
      <Topbar />
      <main className="pt-28">
        <HeroSection />
        <AboutSection />
        <FeaturedCaseStudy />
        <CaseStudiesSection />
        <WhatICanDoSection />
        <MediaDeliverablesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
