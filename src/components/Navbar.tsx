import React from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 sm:px-8 xl:px-0">
        <a href="#hero" className="flex items-center gap-3 text-sm font-semibold text-slate-900">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-white text-base shadow-sm">
            S
          </div>
          <div className="leading-tight">
            <p>서상원 (Sangwon Suh)</p>
            <p className="text-xs font-normal text-slate-500">Cloud Security Portfolio</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:border-indigo-300 hover:text-indigo-700"
        >
          프로젝트 보기
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

