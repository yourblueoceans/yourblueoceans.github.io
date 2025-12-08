import React from "react";

const keywords = ["Lockument · PII Masking", "Drop the Port · Segmentation", "Web VAPT Lab · Upload/XSS/CSRF"];

const profileFacts = [
  { label: "Program", value: "폴리텍 대전 · 클라우드보안과" },
  { label: "Certs", value: "정보보안기사(필기) · CCST" },
  { label: "Highlight", value: "2025 Lockument(SecureDoc Cloud PoC) 캡스톤 금상" },
];

const profileMetrics = [
  { value: "금상", label: "2025 캡스톤" },
  { value: "12+", label: "Deliverables" },
  { value: "3", label: "대표 프로젝트" },
];

const HeroSection: React.FC = () => (
  <section id="about" className="hero">
    <div className="hero-cube" aria-hidden="true">
      <div className="hero-cube-glow" />
      <div className="hero-cube-orbit">
        <img src="/security-cube2.png" alt="Cloud security crystal cube" className="animate-security-cube mix-blend-screen" />
      </div>
    </div>
    <div className="hero-inner">
      <div className="hero-layout">
        <div className="hero-text">
          <p className="hero-kicker">SECURITY CONSULTING &amp; CLOUD / WEB VAPT PORTFOLIO</p>
          <h1 className="hero-title text-balance">
            <span className="hero-title-main">74일간 AWS 기반 개인정보 보호 솔루션을 구축한,</span>
            <span className="hero-title-accent">가장 빠르게 배우는 신입 서상원입니다</span>
          </h1>
          <p className="hero-subheadline">
            클라우드 보안·웹 취약점 진단으로 고객 환경을 이해하는 Security Consultant in training.
          </p>
          <p className="hero-subtext hero-subtext-secondary max-w-[640px] leading-[1.8]">
            Lockument(PII 마스킹 &amp; AES-GCM 암복호화), Drop the Port(네트워크 세그멘테이션), Web VAPT Lab(Upload/XSS/CSRF) 프로젝트를 통해 요구사항 정의 → 설계 → 테스트 → 리포트까지 PoC
            워크플로우를 반복했습니다.
          </p>
          <p className="hero-subtext hero-subtext-secondary max-w-[640px] leading-[1.8]">
            AWS KMS와 AES-GCM으로 PoC 수준 문서 암복호화 파이프라인을 설계하고, 세그멘테이션/방화벽 정책과 Web VAPT 보고서를 교육·캡스톤 환경에서 완주하며 빠른 학습 속도를 증명했습니다. 세부
            스토리는{" "}
            <a href="#case-studies" className="font-semibold text-white underline-offset-4 hover:underline">
              Case Studies
            </a>
            에 정리되어 있습니다.
          </p>
          <div className="hero-tags">
            {keywords.map((label) => (
              <span key={label} className="hero-tag">
                {label}
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
        <aside className="hero-profile">
          <div className="profile-card">
            <div className="profile-photo-wrap">
              <img src="/profile.jpg" alt="서상원 프로필" className="profile-photo" />
            </div>
            <div className="profile-meta">
              <h2 className="profile-name">서상원 (Sangwon Suh)</h2>
              <p className="profile-role">Security Consultant in Training · Cloud Security &amp; Information Protection</p>
            </div>
            <dl className="profile-list">
              {profileFacts.map((fact) => (
                <div key={fact.label} className="profile-item">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="profile-stats-row">
              {profileMetrics.map((metric) => (
                <div key={metric.label} className="profile-stat">
                  <span className="profile-stat-num">{metric.value}</span>
                  <span className="profile-stat-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default HeroSection;

