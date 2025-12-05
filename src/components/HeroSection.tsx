import React from "react";

const keywords = ["Cloud Security", "Web VAPT (Upload / XSS / CSRF)", "Network Infra & Firewall", "AWS · Docker · React"];

const profileFacts = [
  { label: "Program", value: "폴리텍 대전 · 클라우드보안과" },
  { label: "Certs", value: "정보보안기사(필기) · CCST" },
  { label: "Highlight", value: "2025 Lockument 캡스톤 2위" },
];

const profileMetrics = [
  { value: "12+", label: "Deliverables" },
  { value: "3", label: "대표 프로젝트" },
  { value: "2위", label: "2025 캡스톤" },
];

const HeroSection: React.FC = () => (
  <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#04021c] to-[#020617] text-slate-50">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-violet-700/35 blur-3xl" />
      <div className="absolute right-[-10rem] top-24 h-[26rem] w-[26rem] rounded-full bg-sky-500/30 blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,253,0.16),transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),transparent_60%)]" />
    </div>

    <div className="relative z-10 mx-auto grid max-w-[1160px] grid-cols-1 gap-12 px-6 py-28 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)] lg:py-32">
      <div className="hero-left space-y-6">
        <div className="hero-cube-orbit" aria-hidden="true">
          <img src="/security-cube.png" alt="" />
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          서상원 (Sangwon Suh) · Cloud Security Portfolio
        </div>
        <h1 className="hero-title">
          클라우드 보안 · 웹 취약점 진단에 강한 <strong>보안컨설턴트 지망생, 서상원</strong>
        </h1>
        <p className="hero-subtitle text-[var(--fs-body-lg)] leading-[1.7] text-slate-300">
          Aspiring Security Consultant &amp; Cloud Security Engineer based in Korea. 대한항공 현장 운영과 해외 경험을 바탕으로 실제 고객 환경을 이해하는 보안 설계를 추구합니다.
        </p>
        <p className="max-w-xl text-[var(--fs-body)] leading-[var(--lh-normal)] text-slate-200">
          Lockument 캡스톤을 통해 PII 마스킹 · AES-GCM 암복호화 플로우를 설계했고, Upload/XSS/CSRF 기반의 Web VAPT 리포트와 사내형 네트워크 인프라 구축 프로젝트로 컨설팅 워크플로우를 경험했습니다.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {keywords.map((label) => (
            <span key={label} className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] text-slate-100">
              {label}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#case-studies" className="btn-primary text-sm">
            Case Studies 보기
          </a>
          <a href="/resume_kr.pdf" className="btn-secondary text-sm text-slate-100 border-white/40">
            이력서 다운로드 (KR)
          </a>
        </div>
      </div>

      <aside className="hero-profile-card w-full max-w-md justify-self-center lg:justify-self-end">
        <div className="flex items-center gap-4">
          <img src="/profile.jpg" alt="서상원 증명사진" />
          <div>
            <p className="text-lg font-semibold text-white">서상원 (Sangwon Suh)</p>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Cloud Security &amp; Information Protection</p>
          </div>
        </div>
        <dl className="mt-6 space-y-3 text-sm text-slate-200/90">
          {profileFacts.map((fact) => (
            <div key={fact.label} className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-2">
              <dt className="text-xs uppercase tracking-[0.16em] text-slate-400">{fact.label}</dt>
              <dd className="font-semibold text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-center">
          {profileMetrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[0.82rem] leading-relaxed text-slate-200">
          현재 Web VAPT · Network Security · Cloud Security PoC를 중심으로 실습을 이어가며, 보안 리포트/제안서 작성과 발표를 병행하고 있습니다.
        </p>
      </aside>
    </div>
  </section>
);

export default HeroSection;

