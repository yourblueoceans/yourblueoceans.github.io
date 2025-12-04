import React, { useEffect, useState } from "react";

const navItems = [
  { label: "About", target: "about" },
  { label: "Case Studies", target: "case-studies" },
  { label: "What I Can Do", target: "services" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled ? "border-b border-slate-800/70 bg-slate-950/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:gap-6">
        <button
          type="button"
          onClick={() => handleNavigate("hero")}
          className="flex items-center gap-3 text-left text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-lg font-semibold shadow-[0_12px_30px_rgba(15,23,42,0.8)]">
            S
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Seo Sangwon</p>
            <p className="text-xs text-slate-400">Cloud Security Portfolio</p>
          </div>
        </button>

        <nav className="flex flex-1 flex-wrap items-center gap-3 text-sm text-slate-300 lg:justify-end">
          <div className="flex flex-1 flex-wrap gap-4 overflow-x-auto pb-1 lg:flex-none lg:gap-6">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleNavigate(item.target)}
                className="relative text-sm font-medium text-slate-300 transition hover:text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 hidden h-px rounded-full bg-gradient-to-r from-violet-500/0 via-violet-500/80 to-violet-500/0 opacity-0 transition group-hover:opacity-100 lg:block" />
              </button>
            ))}
          </div>
          <a
            href="mailto:bluetrees88@gmail.com?subject=Security%20Consulting%20Inquiry"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(76,29,149,0.45)] transition hover:from-violet-400 hover:to-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

