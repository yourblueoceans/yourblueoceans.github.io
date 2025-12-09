import React from "react";

import { Shield, Server, Cloud, Network, Database } from "lucide-react";
import { pillClass } from "@/ui/tokens";

const capabilityCards = [
  {
    title: "Cloud & Infra Architecture",
    lines: ["AWS EC2 · VPC · KMS", "Linux · Docker · Nginx"],
    icon: Cloud,
  },
  {
    title: "Web VAPT & App Security",
    lines: ["File Upload / XSS / CSRF", "보고서 작성 · 재현/재검증"],
    icon: Shield,
  },
  {
    title: "Data & PII Protection",
    lines: ["AES-GCM · AWS KMS 연동", "마스킹·암복호화 흐름 설계"],
    icon: Database,
  },
];

const techPills = [
  { label: "Backend", value: "Python / Flask", icon: Server },
  { label: "Database", value: "PostgreSQL", icon: Database },
  { label: "Cloud", value: "AWS (KMS, EC2, VPC)", icon: Cloud },
  { label: "Web", value: "React / Vite", icon: Network },
];

const HeroSection: React.FC = () => (
  <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 snap-start">
    <div className="hero-grid-bg pointer-events-none" aria-hidden="true" />
    <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true" />
    <div className="pointer-events-none absolute right-[-8%] bottom-[-8%] h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" aria-hidden="true" />

    <div className="hero-inner">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200 ring-1 ring-slate-700/70 backdrop-blur">
            <span>Cloud Security · Web VAPT · Network &amp; Infra</span>
            <span className="text-slate-400">|</span>
            <span>React · Python(Flask) · PostgreSQL · AWS KMS · Docker</span>
          </div>

          <h1 className="hero-title space-y-2">
            <span className="hero-line">
              <span className="gradient-pulse">74일 동안 AWS 기반</span>{" "}
              개인정보 보호 솔루션을 직접 설계·구축해 본,
            </span>
            <span className="hero-line">
              <span className="gradient-pulse">클라우드 보안·웹 취약점·네트워크 인프라</span>를 함께 경험한
            </span>
            <span className="hero-line">성장 속도가 빠른 신입 보안지원자 서상원입니다.</span>
          </h1>

          <p className="text-sm text-slate-200/90 md:text-base">보이지 않는 보안을 설계하는 Security Consultant in training</p>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-200/80 md:text-base">
            한 번에 모든 것을 완벽히 알지는 못하지만, 필요한 기술을 빠르게 흡수해서 직접 환경을 만들고 PoC를 끝까지 완성하는 과정에서 가장 많이 성장해 왔습니다. 클라우드 보안, 웹 취약점 진단, 네트워크 인프라를 실제
            프로젝트로 연결해 보며 설계–구현–보고서까지 이어지는 흐름을 몸으로 익히는 데 집중했습니다. 입사 후에는 선배들의 노하우를 배우며, 맡은 영역을 깊게 파고드는 주니어 보안컨설턴트로 성장하고 싶습니다.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {capabilityCards.map((cap) => (
              <div
                key={cap.title}
                className="group flex flex-col gap-2 rounded-2xl bg-slate-900/70 p-4 text-slate-100 ring-1 ring-slate-700/70 transition duration-200 hover:-translate-y-1 hover:ring-indigo-400/60"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <cap.icon className="h-4 w-4 text-indigo-200" />
                  <span>{cap.title}</span>
                </div>
                <ul className="text-sm text-slate-300 leading-relaxed space-y-1">
                  {cap.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {techPills.map((pill) => (
              <span key={pill.label} className={`${pillClass} flex items-center gap-2 text-xs text-slate-100`}>
                <pill.icon className="h-4 w-4 text-indigo-200" />
                <span className="font-semibold">{pill.label}</span>
                <span className="text-slate-300">{pill.value}</span>
              </span>
            ))}
          </div>

          <div className="hero-cta-row">
            <a href="#case-studies" className="hero-cta-main">
              Case Studies 보기
            </a>
            <a href="#contact" className="hero-cta-ghost">
              협업·채용 문의
            </a>
          </div>
        </div>

        <aside className="relative flex justify-end">
          <div className="absolute inset-[-40px] z-0 rounded-[32px] bg-gradient-to-br from-indigo-500/20 via-cyan-400/15 to-purple-500/10 blur-3xl" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-[420px] rounded-[28px] bg-slate-950/80 p-4 ring-1 ring-slate-700/80 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-lg">
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

