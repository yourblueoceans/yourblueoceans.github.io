import React from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-canvas-subtle/80 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 xl:px-0">
        <a
          href="#hero"
          className="flex items-center gap-3 text-sm font-semibold text-white"
        >
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/20 text-base">
            S
          </div>
          <div className="leading-tight">
            <p>서상원 (Sangwon Suh)</p>
            <p className="text-xs font-normal text-slate-400">
              Cloud Security Portfolio
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40"
        >
          프로젝트 보기
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

