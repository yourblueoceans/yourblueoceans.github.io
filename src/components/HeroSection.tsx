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
  <section id="hero" className="section section-hero text-slate-50">
    <div className="hero-cube">
      <img src="/security-cube.png" alt="Security cube" />
    </div>
    <div className="section-inner relative z-10">
      <div className="hero-grid">
        <div className="space-y-6">
          <span className="hero-pill">서상원 (Sangwon Suh) · Security Consulting &amp; Information Security</span>
          <h1 className="hero-title">
            클라우드 보안 · 웹 취약점 진단에 강한
            <br />
            주니어 정보보안 엔지니어,
            <br />
            보안컨설턴트를 지향하는 서상원
          </h1>
          <p className="hero-subtitle max-w-2xl">
            Junior Information Security Engineer focusing on Security Consulting, Web VAPT, and Cloud & Infra Security.
          </p>
          <p className="max-w-xl text-base leading-7 text-slate-200">
            대한항공 현장 운영과 해외 경험을 바탕으로 실제 고객 환경을 이해하는 보안 설계와 컨설팅을 지향합니다.
          </p>
          <p className="max-w-xl text-base leading-7 text-slate-200">
            Lockument 캡스톤에서 PII 마스킹과 AES-GCM 암·복호화 플로우를 설계했고, Upload/XSS/CSRF 기반 Web VAPT와 사내형 네트워크 인프라 구축 프로젝트를 통해 요구사항 정의–진단–리포트–발표에 이르는 컨설팅 워크플로우를 경험했습니다.
          </p>
          <div className="flex flex-wrap gap-2">
            {keywords.map((label) => (
              <span key={label} className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.08em]">
                {label}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#case-studies" className="btn-primary text-sm">
              Case Studies 보기
            </a>
            <a
              href="/resume_kr.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              이력서 다운로드 (KR)
            </a>
          </div>
        </div>
        <aside className="hero-profile-card w-full max-w-md justify-self-center lg:justify-self-end">
          <div className="flex flex-col gap-6 text-white">
            <div className="flex items-center gap-4">
              <img src="/profile.jpg" alt="서상원 증명사진" />
              <div>
                <p className="text-lg font-semibold">서상원 (Sangwon Suh)</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Cloud Security &amp; Information Protection</p>
              </div>
            </div>
            <dl className="space-y-3 text-sm text-slate-200">
              {profileFacts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-2">
                  <dt className="text-xs uppercase tracking-[0.16em] text-slate-300">{fact.label}</dt>
                  <dd className="font-semibold text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-center">
              {profileMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-slate-200">
              현재 Web VAPT · Network Security · Cloud Security PoC를 중심으로 실습을 이어가며, 보안 리포트/제안서 작성과 발표를 병행하고 있습니다.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default HeroSection;

