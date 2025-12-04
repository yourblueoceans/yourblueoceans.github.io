import React from "react";

const keywords = [
  "Cloud Security",
  "Web VAPT (Upload / XSS / CSRF)",
  "Network Infra & Firewall",
  "AWS · Docker · React",
];

const metrics = [
  { label: "Case Work", value: "12+", caption: "리포트 & Deliverables" },
  { label: "Projects", value: "3", caption: "대표 보안 프로젝트" },
  { label: "Awards", value: "2위", caption: "2025 캡스톤" },
];

const HeroSection: React.FC = () => {
  const scrollToCaseStudies = () => {
    const el = document.getElementById("case-studies");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openResume = () => {
    window.open("/resume_kr.pdf", "_blank");
  };

  return (
    <section id="hero" className="relative overflow-hidden border-b border-slate-800/60 bg-slate-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.45),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.3),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(8,47,73,0.6),transparent_55%)]"
      />

      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col gap-12 px-6 pb-24 pt-32 sm:px-8 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-1 text-xs text-slate-300 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-medium">서상원 Sangwon Seo</span>
            <span className="text-slate-500">· Security Consulting &amp; Cloud Security</span>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              클라우드 보안 · 웹 취약점 진단에 강한
              <span className="block text-violet-200">보안컨설턴트 지망생, 서상원입니다.</span>
            </h1>
            <p className="text-sm font-medium text-slate-400 sm:text-base">
              Aspiring Security Consultant &amp; Cloud Security Engineer based in Korea.
            </p>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            대한항공 현장 운영과 해외 생활 경험을 바탕으로, 지금은 클라우드 보안과 웹 취약점 진단, 네트워크 인프라 보안에 집중하고 있습니다.
            Lockument 캡스톤 프로젝트와 웹 취약점 진단, 네트워크 인프라 구축을 통해 적용 가능한 보안 설계를 만들고 있습니다.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {keywords.map((label) => (
              <span key={label} className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1 text-[11px] text-slate-300">
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={scrollToCaseStudies}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(76,29,149,0.55)] transition hover:from-violet-400 hover:to-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
            >
              Case Studies 보기
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </button>
            <button
              type="button"
              onClick={openResume}
              className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              이력서 다운로드 (KR)
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-[360px]">
          <div className="relative w-full max-w-sm rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.95)] backdrop-blur">
            <div className="pointer-events-none absolute -left-8 top-8 h-32 w-32 rounded-full bg-violet-500/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-sky-400/40 blur-3xl" />

            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
              Cloud Security &amp; Web VAPT
            </div>
            <div className="mx-auto h-28 w-28 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900">
              <img src="/profile.jpg" alt="서상원 증명사진" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-base font-semibold text-white">서상원 Sangwon Seo</p>
              <p className="mt-1 text-xs text-slate-400">Cloud Security &amp; Information Protection</p>
            </div>

            <dl className="mt-6 space-y-2 text-sm text-slate-100">
              {[
                { label: "Program", value: "폴리텍 대전 · 클라우드보안과" },
                { label: "Certs", value: "정보보안기사 · CCST" },
                { label: "Highlight", value: "2025 캡스톤 2위 (Lockument)" },
              ].map((fact) => (
                <div key={fact.label} className="flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-2.5">
                  <dt className="text-xs text-slate-400">{fact.label}</dt>
                  <dd className="text-right text-[12px] text-slate-100">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 grid gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-center text-slate-200 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-xs">
                  <p className="text-lg font-semibold text-white">{metric.value}</p>
                  <p className="font-semibold text-slate-400">{metric.caption}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
              현재: 웹 취약점 진단 · 네트워크 보안 · 클라우드 보안 실습에 집중하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

