import React from "react";
import { copy } from "../copy";

type HeroProps = {
  onViewProjects?: () => void;
  onDownloadResumeKr?: () => void;
};

const Hero: React.FC<HeroProps> = ({ onViewProjects, onDownloadResumeKr }) => {
  const heroCopy = copy.hero;
  const heroText = heroCopy.ko;

  const handleViewProjects = () => {
    if (onViewProjects) {
      onViewProjects();
      return;
    }

    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResumeKr = () => {
    if (onDownloadResumeKr) {
      onDownloadResumeKr();
      return;
    }

    window.open("/resume_kr.pdf", "_blank");
  };

  const strategicFocus = [
    { label: "핵심 역량", value: "Cloud Security · Web VAPT · Network Infra" },
    { label: "Target Roles", value: "보안컨설팅 · 보안/클라우드 솔루션 영업" },
  ];

  const metrics = [
    { label: "Capstone", value: "Lockument 2위", caption: "PII 암호화 서비스" },
    { label: "Reports", value: "12+", caption: "웹 취약점/인프라 문서화" },
    { label: "Certs", value: "정보보안기사, CCST", caption: "보안 & 네트워크" },
  ];

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-white/5"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.2),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-content flex-col gap-12 px-6 pb-20 pt-16 sm:px-8 sm:pt-24 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {heroCopy.pill}
          </div>

          <div className="space-y-6">
            <h1
              id="hero-title"
              className="text-hero font-semibold leading-tight tracking-tight text-white"
            >
              <span className="text-white/85">{heroText.headline.leading}</span>
              <span className="bg-gradient-to-r from-accent-violet via-accent-indigo to-sky-300 bg-clip-text text-transparent">
                {heroText.headline.highlight}
              </span>
              <span className="text-white/85">{heroText.headline.trailing}</span>
            </h1>
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-slate-400">
              {heroText.subtitle}
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-copy-base sm:text-lg">
              {heroText.body}
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
            {strategicFocus.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/15 bg-white/[0.02] p-4">
                <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-slate-300">
            {heroCopy.keywordLabels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/15 px-4 py-1.5 text-slate-200"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={handleViewProjects}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              프로젝트 바로 보기
            </button>
            <button
              type="button"
              onClick={handleDownloadResumeKr}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            >
              이력서 다운로드 (KR)
            </button>
            <span className="text-xs text-slate-500">{heroCopy.ctaNote}</span>
          </div>
        </div>

        <aside className="flex-1 rounded-[2.4rem] border border-white/10 bg-white/[0.02] p-8 shadow-panel backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 overflow-hidden rounded-2xl border border-white/10">
              <img src="/profile.jpg" alt="서상원 증명사진" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">서상원 Sangwon Seo</p>
              <p className="text-sm text-slate-300">Cloud Security &amp; Information Protection</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-200">
            {heroCopy.profileFacts.map((fact) => (
              <div key={fact.label} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-2.5">
                <span className="text-slate-400">{fact.label}</span>
                <span className="text-right font-medium text-white">{fact.value}</span>
              </div>
            ))}
          </div>

          <dl className="mt-6 grid gap-3 text-center sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 px-4 py-3">
                <dt className="text-base font-semibold text-white">{metric.value}</dt>
                <dd className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                  {metric.label}
                </dd>
                <p className="text-[11px] text-slate-500">{metric.caption}</p>
              </div>
            ))}
          </dl>

          <p className="mt-4 text-xs text-slate-500">
            현재: 웹 취약점 진단 · 네트워크 보안 · 클라우드 보안 실습에 집중하고 있습니다.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Hero;

