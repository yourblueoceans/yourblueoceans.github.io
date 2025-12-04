import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LockumentHighlight from "./components/LockumentHighlight";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsMediaRail from "./components/ProjectsMediaRail";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 antialiased">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-700/25 via-transparent to-sky-500/10" />
      <Header />
      <main className="relative pt-32">
        <HeroSection />
        <LockumentHighlight />
        <CaseStudiesSection />
        <ServicesSection />
        <ProjectsMediaRail />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
