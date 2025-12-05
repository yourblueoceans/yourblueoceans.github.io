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
    <div className="relative min-h-screen bg-slate-950 text-slate-50 antialiased">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-700/25 via-transparent to-sky-500/10" />
      <Topbar />
      <main className="relative pt-32">
        <HeroSection />
        <FeaturedCaseStudy />
        <CaseStudiesSection />
        <WhatICanDoSection />
        <MediaDeliverablesSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
