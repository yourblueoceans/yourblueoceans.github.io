import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cardClass, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

type ProjectAsset = {
  label: string;
  href: string;
  badge: string;
};

type ProjectMedia = {
  id: string;
  title: string;
  category: string;
  summary: string;
  assets: ProjectAsset[];
};

const projects: ProjectMedia[] = [
  {
    id: "web-vapt",
    title: "웹 취약점 진단 실습 – Upload · XSS · CSRF",
    category: "Web VAPT",
    summary: "실제 모의해킹 절차에 맞춰 Upload, XSS, CSRF를 재현하고 대응 리포트를 작성한 프로젝트.",
    assets: [
      { label: "취약점 진단 리포트", href: "/assets/web-vapt-report.pdf", badge: "PDF" },
      { label: "발표 슬라이드", href: "/assets/web-vapt-presentation.pdf", badge: "PDF" },
    ],
  },
  {
    id: "network-infra",
    title: "사내형 네트워크 인프라 구축 & 보안 설계",
    category: "Network & Infra Security",
    summary: "VLAN, 방화벽, DMZ를 통해 서비스망/관리망을 분리하고 트래픽 플로우를 검증한 프로젝트.",
    assets: [
      { label: "설계/구성 문서", href: "/assets/network-design.pdf", badge: "PDF" },
      { label: "패킷 캡처 분석", href: "/assets/network-packet-report.pdf", badge: "PDF" },
    ],
  },
  {
    id: "lockument-assets",
    title: "Lockument – PII 마스킹 & 암호화 Deliverables",
    category: "Cloud Security",
    summary: "PII 탐지·마스킹과 AES-GCM 암복호화를 결합한 Lockument 프로젝트의 문서와 데모 자료 모음.",
    assets: [
      { label: "보안 설계 & 리포트", href: "/assets/lockument-report.pdf", badge: "PDF" },
      { label: "캡스톤 발표 자료", href: "/assets/lockument-presentation.pdf", badge: "PDF" },
    ],
  },
];

const MediaDeliverablesSection: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: number) => {
    const node = railRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.8;
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <motion.section id="media-deliverables" className={sectionClass} {...sectionMotion}>
      <div className={innerClass}>
        <div>
          <p className={overline}>MEDIA &amp; DELIVERABLES</p>
          <h2 className={heading2}>프로젝트 산출물 &amp; 리포트</h2>
          <p className="section-lead mt-3">각 프로젝트의 리포트, 발표 자료, 설계 문서를 카드형 레일로 묶어 바로 확인할 수 있게 했습니다.</p>
        </div>

        <div className="relative mt-8">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => handleScroll(-1)}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200/70 bg-white p-3 text-lg text-slate-700 shadow-lg md:flex"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => handleScroll(1)}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200/70 bg-white p-3 text-lg text-slate-700 shadow-lg md:flex"
          >
            →
          </button>

          <div ref={railRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
            {projects.map((project) => (
              <article key={project.id} className={`${cardClass} snap-start min-w-[320px] max-w-sm flex-shrink-0 overflow-hidden`}>
                <div className="h-44 w-full rounded-2xl bg-white/60 shadow-inner" />
                <div className="mt-5 space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">{project.category}</div>
                  <h3 className="text-[var(--fs-card-title)] font-semibold text-[var(--color-text-strong)] leading-snug">{project.title}</h3>
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
      </div>
    </motion.section>
  );
};

export default MediaDeliverablesSection;

