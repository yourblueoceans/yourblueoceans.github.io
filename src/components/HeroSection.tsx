import React from "react";
import { Shield, Award, Layers } from "lucide-react";

const metrics = [
  { icon: Layers, label: "74-day AWS PII PoC" },
  { icon: Shield, label: "Cloud · Web VAPT · Infra" },
  { icon: Award, label: "Capstone Gold Award" },
];

const HeroSection: React.FC = () => (
  <section id="hero" className="relative overflow-hidden bg-[#f4f5f7] snap-start">
    <div className="hero-grid-bg pointer-events-none opacity-25" aria-hidden="true" />
    <div className="pointer-events-none absolute left-[-12%] top-[-8%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />
    <div className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />

    <div className="hero-inner max-w-6xl px-6 py-16 sm:px-8 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 ring-1 ring-slate-200 shadow-sm backdrop-blur">
            <span>Cloud Security · Web VAPT · Network &amp; Infra</span>
          </div>

          <h1 className="space-y-3 leading-tight tracking-tight text-slate-900">
            <span className="hero-line text-balance text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold">앞에서는 서비스, 뒤에서는 보안.</span>
            <span className="hero-line text-balance text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold">
              <span className="relative inline-block align-middle">
                <img src="/brush.png" alt="" className="h-14 w-auto object-contain select-none pointer-events-none md:h-16" />
                <span className="absolute inset-0 flex items-center justify-center px-6 text-white text-[1.05em] font-extrabold">
                  모르는 건 빠르게 만들면서 배우는
                </span>
              </span>{" "}
              서상원입니다.
            </span>
          </h1>

          <p className="text-sm font-semibold text-slate-600 md:text-base">Security Consultant in training</p>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
            74일 동안 AWS 기반 개인정보 보호 PoC를 직접 설계·구축하며 클라우드 보안, 웹 취약점, 네트워크 인프라를 한 번에 경험했습니다. 모르는 기술은 빠르게 흡수해서 직접 환경을 만들어 보고, PoC를 끝까지 완성하는 과정에서 가장 많이 성장해 왔습니다.
          </p>

          <div className="relative inline-block mt-2">
            <img src="/brush2.png" alt="" className="h-16 w-auto object-contain select-none pointer-events-none md:h-20" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-sm font-semibold text-slate-900">
              Cloud Security · Web VAPT · Network &amp; Infra
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-slate-700 md:text-sm">
            {metrics.map((m) => (
              <span key={m.label} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 ring-1 ring-slate-200 shadow-sm">
                <m.icon className="h-4 w-4 text-indigo-500" />
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
          <div className="relative z-10 w-full max-w-[460px] rounded-[28px] bg-white/90 p-4 ring-1 ring-slate-200 shadow-[0_25px_90px_rgba(15,23,42,0.12)] backdrop-blur-lg">
            <div className="overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-200">
              <video
                src="/main-me.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
                poster="/itsme.png"
              />
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-900/85 px-3 py-1 text-[0.7rem] font-semibold text-slate-100 ring-1 ring-slate-800/70 shadow-sm">
              <span>서상원 · Cloud Security &amp; VAPT</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default HeroSection;

