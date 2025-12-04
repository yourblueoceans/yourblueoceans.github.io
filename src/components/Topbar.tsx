import React, { useEffect, useState } from "react";

const navItems = [
  { label: "About", target: "about" },
  { label: "Case Studies", target: "case-studies" },
  { label: "What I Can Do", target: "what-i-can-do" },
  { label: "Media & Deliverables", target: "media-deliverables" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

const Topbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navItems[0].target);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    const observed = navItems
      .map((item) => document.getElementById(item.target))
      .filter(Boolean) as Element[];

    observed.forEach((node) => observer.observe(node));
    return () => {
      observed.forEach((node) => observer.unobserve(node));
    };
  }, []);

  const handleNavigate = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-slate-800/70 transition ${
        scrolled ? "bg-slate-950/85 py-3 shadow-[0_20px_70px_rgba(2,6,23,0.75)] backdrop-blur-2xl" : "bg-slate-950/60 py-4 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto hidden max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:flex">
        <button
          type="button"
          onClick={() => handleNavigate("about")}
          className="flex items-center gap-3 text-left text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-lg font-semibold shadow-[0_12px_30px_rgba(15,23,42,0.8)]">
            S
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">서상원 (Sangwon Suh)</p>
            <p className="text-xs text-slate-400">Cloud Security Portfolio</p>
          </div>
        </button>

        <nav className="flex items-center gap-6 text-sm text-slate-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.target;
            return (
              <button
                key={item.target}
                type="button"
                onClick={() => handleNavigate(item.target)}
                className={`relative text-[0.95rem] font-medium transition ${
                  isActive ? "text-violet-300" : "text-slate-300 hover:text-slate-50"
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-violet-500 via-sky-400 to-violet-500 transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <a
          href="mailto:bluetrees88@gmail.com?subject=Security%20Consulting%20Inquiry"
          className="inline-flex items-center justify-center rounded-full bg-violet-500/90 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(139,92,246,0.5)] transition hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          Contact
        </a>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:px-6 lg:hidden">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavigate("about")}
            className="flex items-center gap-3 text-left text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-lg font-semibold shadow-[0_12px_30px_rgba(15,23,42,0.8)]">
              S
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">서상원 (Sangwon Suh)</p>
              <p className="text-xs text-slate-400">Cloud Security Portfolio</p>
            </div>
          </button>
          <a
            href="mailto:bluetrees88@gmail.com?subject=Security%20Consulting%20Inquiry"
            className="rounded-full bg-violet-500/90 px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(139,92,246,0.45)]"
          >
            Contact
          </a>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1 text-xs text-slate-400">
          {navItems.map((item) => (
            <button key={item.target} type="button" onClick={() => handleNavigate(item.target)} className="px-2 py-1">
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Topbar;

