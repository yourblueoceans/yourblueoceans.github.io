// src/components/HeroSection.tsx
import React from "react";

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
      {/* 부드러운 백그라운드 그라데이션 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-200px] h-[420px] bg-[radial-gradient(circle_at_top,_rgba(109,40,217,0.35),_transparent_55%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_55%)] opacity-80"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-24 lg:flex-row lg:items-center lg:pb-28 lg:pt-28">
        {/* LEFT: 텍스트 */}
        <div className="flex-1 space-y-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-medium">서상원 Sangwon Seo</span>
            <span className="text-slate-500">· Security Consulting &amp; Cloud Security</span>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="max-w-xl text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              클라우드 보안·웹 취약점 진단에 강한
              <span className="block text-violet-300">보안컨설턴트 지망생, 서상원입니다.</span>
            </h1>
            <p className="max-w-xl text-sm font-medium text-slate-400 sm:text-base">
              Aspiring Security Consultant &amp; Cloud Security Engineer based in Korea.
            </p>
          </div>

          {/* Body */}
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            대한항공 현장 운영과 해외 생활 경험을 바탕으로, 지금은 클라우드 보안과 웹 취약점 진단, 네트워크 인프라 보안에 집중하고 있습니다.
            Lockument 캡스톤(PII 마스킹 &amp; 암호화 웹서비스)과 웹 취약점 진단, 네트워크 인프라 구축 프로젝트를 통해 실제 환경에 적용 가능한
            보안 설계를 만들어가고 있습니다.
          </p>

          {/* 키워드 태그 */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Cloud Security", "Web VAPT (Upload / XSS / CSRF)", "Network Infra & Firewall", "AWS · Docker · React"].map((label) => (
              <span key={label} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300">
                {label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3 pt-5">
            <button
              type="button"
              onClick={scrollToCaseStudies}
              className="inline-flex items-center justify-center rounded-full bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-violet-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Case Studies 보기
            </button>
            <button
              type="button"
              onClick={openResume}
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-800/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              이력서 다운로드 (KR)
            </button>
          </div>
        </div>

        {/* RIGHT: 프로필 카드 */}
        <div className="flex w-full justify-center lg:w-[320px]">
          <div className="w-full max-w-xs rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.9)] backdrop-blur">
            <div className="mx-auto h-28 w-28 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
              <img src="/profile.jpg" alt="서상원 증명사진" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-slate-50">서상원 Sangwon Seo</p>
              <p className="mt-1 text-xs text-slate-400">Cloud Security &amp; Information Protection</p>
            </div>
            <dl className="mt-5 space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <dt className="text-slate-500">Program</dt>
                <dd className="text-right text-[11px] text-slate-200">폴리텍 대전 · 클라우드보안과</dd>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <dt className="text-slate-500">Certs</dt>
                <dd className="text-right text-[11px] text-slate-200">정보보안기사 · CCST</dd>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-3 py-2">
                <dt className="text-slate-500">Highlight</dt>
                <dd className="text-right text-[11px] text-slate-200">2025 캡스톤 2위 (Lockument)</dd>
              </div>
            </dl>
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

