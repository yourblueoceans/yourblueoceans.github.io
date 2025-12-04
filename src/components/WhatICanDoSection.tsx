import React from "react";
import { motion } from "framer-motion";
import { bodyText, cardClass, heading2, innerClass, overline, pillClass, sectionClass, sectionMotion } from "../ui/tokens";

type Service = {
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  bullets: string[];
  tools: string[];
};

const services: Service[] = [
  {
    title: "웹 취약점 진단(Web VAPT) & AppSec",
    subtitle: "Upload · XSS · CSRF · OWASP Top 10",
    headline: "시나리오 기반 VAPT 절차와 리포트 작성 경험",
    description:
      "Burp Suite, Chrome DevTools를 활용해 Upload/XSS/CSRF 취약점을 재현하고, 조치방안을 포함한 Web VAPT 리포트를 작성합니다.",
    bullets: ["OWASP Top 10 기반 테스트 케이스 설계", "요청/응답 분석 및 PoC 스크립트 작성", "기술·비기술 리포트와 브리핑"],
    tools: ["Burp Suite", "OWASP ZAP", "Chrome DevTools"],
  },
  {
    title: "클라우드 · 데이터 보안 설계",
    subtitle: "AWS KMS · AES-GCM · PII Masking",
    headline: "데이터 흐름에 맞춘 암복호화·키 관리와 PoC 구축",
    description:
      "Lockument 프로젝트처럼 PII 마스킹, AES-GCM, AWS KMS를 결합해 개인정보 흐름을 안전하게 설계하고, Docker 기반 PoC 환경으로 검증합니다.",
    bullets: ["AWS KMS + AES-GCM 키 관리 플로우", "문서 포맷별 PII 정책 설계", "PoC 환경 구성 및 테스트 자동화"],
    tools: ["AWS KMS", "AES-GCM", "Docker"],
  },
  {
    title: "네트워크 & 인프라 보안",
    subtitle: "VLAN · 방화벽 정책 · DMZ 분리",
    headline: "사내형 네트워크 분리와 트래픽 검증 문서화",
    description:
      "서비스망/관리망/DMZ를 분리하고 방화벽 정책·패킷 캡처를 통해 정상/비정상 트래픽을 검증, 요구사항과 결과를 문서화합니다.",
    bullets: ["세그먼트 디자인 & ACL 정의", "방화벽/IDS 정책 설정 및 테스트", "패킷 캡처 근거 기반 보고"],
    tools: ["Cisco IOS", "TrusGuard", "Wireshark"],
  },
  {
    title: "Security PoC & Pre-sales 협업",
    subtitle: "Security Consulting · Reporting",
    headline: "요구사항 정의부터 리포트·제안서까지 일관된 커뮤니케이션",
    description:
      "Security PoC 관점에서 요구사항을 정리하고 테스트·결과 리포트를 작성하며, 프리세일즈 협업까지 고려한 문서를 준비합니다.",
    bullets: ["요구사항 정의 → 테스트 → 결과 정리", "보안 리포트·제안서·발표 슬라이드 제작", "이해관계자별 커뮤니케이션 정리"],
    tools: ["Google Slides", "Notion", "MS Office"],
  },
];

const serviceIcons = ["🛡️", "☁️", "🌐", "📊"];

const WhatICanDoSection: React.FC = () => {
  return (
    <motion.section id="what-i-can-do" className={sectionClass} {...sectionMotion}>
      <div className={innerClass}>
        <div>
          <p className={overline}>WHAT I CAN DO</p>
          <h2 className={heading2}>팀에서 맡길 수 있는 보안·클라우드 중심 역할</h2>
          <p className="section-lead mt-3">인턴·주니어로 합류했을 때 어떤 일을 맡길 수 있을지를 기준으로 정리했습니다. 서비스 관점에서 역할을 정의합니다.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, idx) => (
            <article key={service.title} className={`${cardClass} flex h-full flex-col gap-4`}>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/10 text-2xl">{serviceIcons[idx]}</div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">{service.subtitle}</p>
                <h3 className="mt-2 text-[var(--fs-card-title)] font-semibold text-[var(--color-text-strong)]">{service.title}</h3>
                <p className="mt-2 text-[var(--fs-body)] font-semibold text-indigo-700">{service.headline}</p>
                <p className={`${bodyText} mt-2`}>{service.description}</p>
              </div>
              <ul className="space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[var(--fs-body)] leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 text-[var(--fs-body)] leading-relaxed">
                <p className="font-semibold text-[var(--color-text-strong)]">주요 툴/기술</p>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span key={tool} className={pillClass}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatICanDoSection;

