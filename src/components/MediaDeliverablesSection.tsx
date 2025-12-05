import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
  details: { label: string; value: string }[];
  assets: ProjectAsset[];
};

const projects: ProjectMedia[] = [
  {
    id: "securedoc",
    title: "SecureDoc Cloud – PII 마스킹 & 암호화 웹서비스",
    category: "SecureDoc Cloud",
    timeline: "SecureDoc Cloud (2025.08~11, 2인 팀장, 캡스톤 금상)",
    summary:
      "PII 필드 자동 탐지·마스킹과 AES-GCM 암호화를 결합한 문서 보안 SaaS PoC입니다. AWS KMS 기반 키 관리와 웹 VAPT 대응까지 포함해 실제 기업 솔루션에 가깝다는 평가를 받은 프로젝트입니다.",
    details: [
      { label: "Role", value: "보안 설계 · PoC 총괄 · 발표 · 리포트 작성" },
      { label: "Tech", value: "AWS KMS, AES-GCM, React, Flask, Docker" },
      { label: "Deliverable", value: "보안 설계 문서, 암·복호화 PoC, 발표 자료" },
    ],
    assets: [
      { label: "보안 설계 & 리포트", href: "/assets/lockument-report.pdf", badge: "PDF" },
      { label: "캡스톤 발표 자료", href: "/assets/lockument-presentation.pdf", badge: "PDF" },
    ],
  },
  {
    id: "droptheport",
    title: "Drop the Port – 사내형 네트워크 인프라 & 방화벽 설계",
    category: "Drop the Port",
    timeline: "Drop the Port (2025.08.21~11.03, 4인 팀장, CB 정보통신(가상의 스타트업))",
    summary:
      "가상의 스타트업 ‘CB 정보통신’ 사내망을 가정하고 L2/L3 스위치, VLAN, 방화벽, DMZ를 설계·구성한 인프라 보안 프로젝트입니다. 서비스/관리/DMZ 세그먼트 분리와 트래픽 분석을 통해 보안 인프라 설계와 운영을 실습했습니다.",
    details: [
      { label: "Role", value: "아키텍처 설계 · 정책 정의 · 트래픽 검증 보고" },
      { label: "Tech", value: "Cisco L2/L3, VLAN, Firewall, DMZ, Linux" },
      { label: "Deliverable", value: "인프라 설계도, 정책 문서, 패킷 캡처 리포트" },
    ],
    assets: [
      { label: "설계/구성 문서", href: "/assets/network-design.pdf", badge: "PDF" },
      { label: "패킷 캡처 분석", href: "/assets/network-packet-report.pdf", badge: "PDF" },
    ],
  },
  {
    id: "web-vapt",
    title: "웹 취약점 분석 – Upload / XSS / CSRF 실습",
    category: "웹 취약점 분석",
    timeline: "웹 취약점 분석 (2025.11~12)",
    summary: "Upload, XSS, CSRF 취약점을 실제로 재현하고 Burp Suite·브라우저 DevTools를 활용해 요청/응답을 분석한 뒤 Web VAPT 리포트 형식으로 정리한 실습 프로젝트입니다.",
    details: [
      { label: "Role", value: "취약점 재현 · 요청/응답 분석 · 조치 리포트 작성" },
      { label: "Tech", value: "Burp Suite, Chrome DevTools, PHP Lab, HTTP(S)" },
      { label: "Deliverable", value: "취약점 리포트, 발표 슬라이드, 재진단 체크리스트" },
    ],
    assets: [
      { label: "취약점 진단 리포트", href: "/assets/web-vapt-report.pdf", badge: "PDF" },
      { label: "발표 슬라이드", href: "/assets/web-vapt-presentation.pdf", badge: "PDF" },
    ],
  },
];

const MediaDeliverablesSection: React.FC = () => {
  const [open, setOpen] = useState<string[]>([projects[0].id]);

  const toggle = (id: string) => {
    setOpen((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <motion.section id="media-deliverables" className={sectionClass} {...sectionMotion}>
      <div className={innerClass}>
        <div className="max-w-3xl">
          <p className={overline}>MEDIA &amp; DELIVERABLES</p>
          <h2 className={`${heading2} text-4xl font-extrabold tracking-tight`}>프로젝트 산출물 &amp; 리포트</h2>
          <p className={`${bodyText} mt-3 text-[0.98rem] md:text-base lg:text-[1.05rem]`}>
            프로젝트별 산출물, 설계 문서, 리포트를 세로 타임라인으로 정리했습니다. 각 항목을 펼쳐 개요와 역할, Tech, Deliverable을 확인해 보세요.
          </p>
        </div>

        <div className="relative mt-12 space-y-6 pl-6">
          <span className="timeline-line" aria-hidden="true" />
          {projects.map((project) => {
            const isOpen = open.includes(project.id);
            return (
              <article key={project.id} className={`${cardClass} relative ${isOpen ? "open" : ""}`}>
                <div className="absolute -left-[34px] top-7">
                  <span className="timeline-dot" />
                </div>
                <button
                  type="button"
                  className="stack-header"
                  aria-expanded={isOpen}
                  onClick={() => toggle(project.id)}
                >
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.35em] text-indigo-500">{project.category}</p>
                    <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
                    <p className="text-sm font-semibold text-indigo-600">{project.timeline}</p>
                  </div>
                  <ChevronDown className={`stack-chevron ${isOpen ? "open" : ""}`} />
                </button>
                <p className={`${bodyText} mt-4 text-[0.98rem] leading-relaxed text-slate-700`}>{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {project.assets.map((asset) => (
                    <a key={asset.label} href={asset.href} target="_blank" rel="noreferrer" className="media-asset">
                      <span>{asset.label}</span>
                      <span className="media-asset-badge">{asset.badge}</span>
                    </a>
                  ))}
                </div>

                {isOpen && (
                  <div className="mt-6 space-y-3 border-t border-slate-200 pt-4 text-[0.98rem] text-slate-700">
                    {project.details.map((detail) => (
                      <p key={detail.label}>
                        <span className="font-semibold text-slate-900">{detail.label}</span> : {detail.value}
                      </p>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default MediaDeliverablesSection;

