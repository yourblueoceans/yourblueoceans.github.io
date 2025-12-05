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
    title: "웹 취약점 진단(Web VAPT)",
    subtitle: "Upload · XSS · CSRF · Directory Indexing",
    headline: "실제 모의해킹 절차 기반 VAPT 리포트 작성 가능",
    description:
      "OWASP Top 10과 실제 모의해킹 절차를 바탕으로 웹 애플리케이션 취약점을 분석하고 리포트로 정리할 수 있습니다.",
    bullets: ["시나리오 기반 테스트 케이스 & PoC", "Burp Suite · DevTools 요청/응답 분석", "기술/비기술 리포트 작성"],
    tools: ["Burp Suite", "OWASP ZAP", "Chrome DevTools"],
  },
  {
    title: "클라우드 · 애플리케이션 보안 설계",
    subtitle: "PII 마스킹 · 암복호화 플로우 · KMS 연동",
    headline: "고객 데이터 흐름에 맞춘 암복호화 · 키 관리 설계",
    description:
      "개인정보 처리 웹서비스를 위한 PII 탐지·마스킹 및 안전한 암복호화 플로우를 설계·구현한 경험을 제공합니다.",
    bullets: ["AWS KMS + AES-GCM 플로우 설계", "문서 포맷별 PII 정책 정의", "보안 요구사항 → 개발 태스크 변환"],
    tools: ["AWS KMS", "AES-GCM", "Docker"],
  },
  {
    title: "네트워크 인프라 & 방화벽/DMZ",
    subtitle: "VLAN · 방화벽 정책 · DMZ 분리",
    headline: "사내망 분리에 맞춘 VLAN·방화벽 정책 수립 및 검증",
    description:
      "소규모 사내망을 가정해 L2/L3 · 방화벽 · DMZ 구성을 설계하고, 정상/비정상 트래픽을 문서화합니다.",
    bullets: ["서비스/관리/DMZ 세그먼트 설계", "방화벽 정책 정의 및 테스트", "패킷 캡처를 통한 검증"],
    tools: ["Cisco IOS", "TrusGuard", "Wireshark"],
  },
  {
    title: "보안 문서화 & 발표",
    subtitle: "리포트 · 제안서 · 프레젠테이션",
    headline: "비기술자도 이해할 수 있는 보안 커뮤니케이션",
    description:
      "비기술자도 이해할 수 있는 형태로 보안 프로젝트를 설명하고 결과를 리포트·발표 자료로 정리하는 역할에 강점이 있습니다.",
    bullets: ["취약점 리포트 · 조치 계획서 작성", "슬라이드 구성 및 스토리텔링", "이해관계자별 맞춤 커뮤니케이션"],
    tools: ["Google Slides", "Notion", "MS Office"],
  },
];

const serviceIcons = ["🛡️", "☁️", "🌐", "🗂️"];

const WhatICanDoSection: React.FC = () => {
  return (
    <motion.section id="what-i-can-do" className={sectionClass} {...sectionMotion}>
      <div className={innerClass}>
        <div>
          <p className={overline}>WHAT I CAN DO</p>
          <h2 className={heading2}>팀에서 맡길 수 있는 보안·클라우드 중심 역할</h2>
          <p className="section-lead mt-3">인턴·주니어로 합류했을 때 어떤 일을 맡길 수 있을지를 기준으로 정리했습니다. 서비스 관점에서 역할을 정의합니다.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
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

