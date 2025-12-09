import React from "react";
import { Shield, Cloud, Network, Award, Layers } from "lucide-react";

const metrics = [
  { icon: Layers, label: "74-day AWS PII PoC" },
  { icon: Shield, label: "Cloud · Web VAPT · Infra" },
  { icon: Award, label: "Capstone Gold Award" },
];

const HeroSection: React.FC = () => (
  <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 snap-start">
    <div className="hero-grid-bg pointer-events-none" aria-hidden="true" />
    <div className="pointer-events-none absolute left-[-12%] top-[-8%] h-72 w-72 rounded-full bg-cyan-500/18 blur-3xl" aria-hidden="true" />
    <div className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-80 w-80 rounded-full bg-violet-500/18 blur-3xl" aria-hidden="true" />

    <div className="hero-inner">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 ring-1 ring-slate-700/70 backdrop-blur">
            <span>Cloud Security · Web VAPT · Network &amp; Infra</span>
          </div>

          <h1 className="hero-title space-y-2 leading-tight tracking-tight text-white">
            <span className="hero-line text-balance text-3xl md:text-4xl lg:text-5xl">
              앞에서는 서비스, 뒤에서는 보안.
            </span>
            <span className="hero-line text-balance text-3xl md:text-4xl lg:text-5xl">
              <span className="paint-pill">모르는 건 빠르게 만들면서 배우는</span> 서상원입니다.
            </span>
          </h1>

          <p className="text-sm font-semibold text-slate-200/90 md:text-base">Security Consultant in training</p>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-200/80 md:text-base">
            74일 동안 AWS 기반 개인정보 보호 PoC를 직접 설계·구축하며 클라우드 보안, 웹 취약점, 네트워크 인프라를 한 번에 경험했습니다. 모르는 기술은 빠르게 흡수해서 직접 환경을 만들어 보고, PoC를 끝까지 완성하는 과정에서 가장 많이 성장해 왔습니다.
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-slate-200/80 md:text-sm">
            {metrics.map((m) => (
              <span key={m.label} className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-2 ring-1 ring-slate-700/70 backdrop-blur">
                <m.icon className="h-4 w-4 text-indigo-200" />
                {m.label}
              </span>
            ))}
          </div>

          <div className="hero-cta-row">
            <a href="#case-studies" className="hero-cta-main">
              Case Studies 보기
            </a>
            <a href="#contact" className="hero-cta-ghost">
              Contact
            </a>
          </div>
        </div>

        <aside className="relative flex justify-end">
          <div className="paint-blob absolute inset-[-32px]" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-[440px] rounded-[28px] bg-slate-950/80 p-4 ring-1 ring-slate-700/80 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-lg">
            <div className="overflow-hidden rounded-3xl bg-slate-900/60 ring-1 ring-slate-700/60">
              <img src="/main-me.png" alt="서상원 프로필" className="h-full w-full object-cover" />
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[0.7rem] font-semibold text-slate-200 ring-1 ring-slate-700/60">
              <span>서상원 · Cloud Security &amp; VAPT</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default HeroSection;

