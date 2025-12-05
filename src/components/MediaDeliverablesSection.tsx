import React from "react";
import { motion } from "framer-motion";
import { bodyText, cardClass, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

type ProjectAsset = {
  label: string;
  href: string;
  badge: string;
};

type ProjectMedia = {
  id: string;
  title: string;
  category: string;
  timeline: string;
  summary: string;
  assets: ProjectAsset[];
};

const projects: ProjectMedia[] = [
  {
    id: "web-vapt",
    title: "웹 취약점 분석 – Upload / XSS / CSRF 실습",
    category: "웹 취약점 분석",
    timeline: "웹 취약점 분석 (2025.11~12)",
    summary: "Upload, XSS, CSRF 취약점을 실제로 재현하고 Burp Suite·브라우저 DevTools를 활용해 요청/응답을 분석한 뒤 Web VAPT 리포트 형식으로 정리한 실습 프로젝트입니다.",
    assets: [
      { label: "취약점 진단 리포트", href: "/assets/web-vapt-report.pdf", badge: "PDF" },
      { label: "발표 슬라이드", href: "/assets/web-vapt-presentation.pdf", badge: "PDF" },
    ],
  },
  {
    id: "network-infra",
    title: "Drop the Port – 사내형 네트워크 인프라 & 방화벽 설계",
    category: "Drop the Port",
    timeline: "Drop the Port (2025.08.21~11.03, 4인 팀장, CB 정보통신(가상의 스타트업))",
    summary:
      "가상의 스타트업 ‘CB 정보통신’ 사내망을 가정하고 L2/L3 스위치, VLAN, 방화벽, DMZ를 설계·구성한 인프라 보안 프로젝트입니다. 서비스/관리/DMZ 세그먼트 분리와 트래픽 분석을 통해 보안 인프라 설계와 운영을 실습했습니다.",
    assets: [
      { label: "설계/구성 문서", href: "/assets/network-design.pdf", badge: "PDF" },
      { label: "패킷 캡처 분석", href: "/assets/network-packet-report.pdf", badge: "PDF" },
    ],
  },
  {
    id: "lockument-assets",
    title: "SecureDoc Cloud – PII 마스킹 & 암호화 웹서비스",
    category: "SecureDoc Cloud",
    timeline: "SecureDoc Cloud (2025.08~11, 2인 팀장, 캡스톤 금상)",
    summary:
      "PII 필드 자동 탐지·마스킹과 AES-GCM 암호화를 결합한 문서 보안 SaaS PoC입니다. AWS KMS 기반 키 관리와 웹 VAPT 대응까지 포함해 실제 기업 솔루션에 가깝다는 평가를 받은 프로젝트입니다.",
    assets: [
      { label: "보안 설계 & 리포트", href: "/assets/lockument-report.pdf", badge: "PDF" },
      { label: "캡스톤 발표 자료", href: "/assets/lockument-presentation.pdf", badge: "PDF" },
    ],
  },
];

const MediaDeliverablesSection: React.FC = () => (
  <motion.section id="media-deliverables" className={sectionClass} {...sectionMotion}>
    <div className={innerClass}>
      <div>
        <p className={overline}>MEDIA &amp; DELIVERABLES</p>
        <h2 className={`${heading2} text-3xl md:text-4xl lg:text-[2.6rem]`}>SecureDoc Cloud · Drop the Port · 웹 취약점 분석 산출물</h2>
        <p className={`${bodyText} mt-3 max-w-3xl text-[0.98rem] md:text-base lg:text-[1.05rem]`}>
          각 프로젝트의 리포트, 설계 문서, 발표 자료를 한 번에 열람할 수 있도록 모았습니다. Case Studies 섹션과 동일한 타이틀/타임라인으로 관리합니다.
        </p>
      </div>

      <div className="deliverables-grid">
        {projects.map((project) => (
          <article key={project.id} className={`${cardClass} h-full`}>
            <div className="h-44 w-full rounded-2xl bg-white/60 shadow-inner" />
            <div className="mt-5 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">{project.category}</div>
              <h3 className="text-[var(--font-h2)] font-semibold text-[var(--color-text-strong)] leading-snug">{project.title}</h3>
              <p className="text-sm font-semibold text-indigo-600">{project.timeline}</p>
              <p className="section-body line-clamp-3">{project.summary}</p>
              <div className="space-y-3">
                {project.assets.map((asset) => (
                  <a key={asset.label} href={asset.href} target="_blank" rel="noreferrer" className="deliverable-row">
                    <span>{asset.label}</span>
                    <span className="badge">{asset.badge}</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
);

export default MediaDeliverablesSection;

