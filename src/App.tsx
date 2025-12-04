import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-slate-900/90 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        콘텐츠로 바로가기
      </a>

      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/3 -top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
          <div className="absolute right-1/4 top-1/3 h-80 w-80 translate-x-1/2 rounded-full bg-indigo-500/20 blur-[160px]" />
          <div className="absolute inset-0 opacity-40">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_65%)]" />
          </div>
        </div>

        <main className="relative flex flex-col gap-0">
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
