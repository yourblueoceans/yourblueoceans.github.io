import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 antialiased">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-slate-900/90 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        콘텐츠로 바로가기
      </a>

      <div className="relative isolate overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_55%)] opacity-80"
          aria-hidden="true"
        />

        <Navbar />

        <main className="relative flex flex-col">
          <Hero />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};

export default App;
