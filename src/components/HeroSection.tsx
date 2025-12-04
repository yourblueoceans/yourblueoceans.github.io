import React from "react";

const keywords = ["Security Consultant in Training", "Web VAPT · Upload/XSS/CSRF", "Cloud & Infra Security", "Security Solution PoC & Pre-sales"];

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
  <section id="about" className="hero">
    <div className="hero-cube">
      <img src="/security-cube.png" alt="Security cube visual" />
    </div>
    <div className="hero-inner">
      <div className="hero-layout">
        <div className="hero-text">
          <p className="hero-kicker">서상원 (Sangwon Suh) · Security Consulting &amp; Information Security</p>
          <h1 className="hero-heading">
            클라우드 보안 · 웹 취약점 진단에 강한
            <br />
            보안컨설턴트 지망생, 서상원
          </h1>
          <p className="hero-subtext">
            웹 VAPT, 클라우드 보안, 네트워크 인프라를 직접 설계·실습하며 고객 환경을 이해하는 주니어 정보보안 엔지니어를 지향합니다.
          </p>
          <p className="hero-subtext hero-subtext-secondary">
            Security Consultant in training · Web VAPT · Cloud Security · Network &amp; Infra Security · Security Solution PoC &amp; Pre-sales Collaboration.
          </p>
          <p className="hero-subtext hero-subtext-secondary">
            Lockument 캡스톤에서 PII 마스킹과 AES-GCM 암·복호화 플로우를 설계했고, Upload/XSS/CSRF 기반 Web VAPT와 사내형 네트워크 인프라 구축 프로젝트를 통해 요구사항 정의–진단–리포트–발표에 이르는 컨설팅 워크플로우를 경험했습니다.
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

