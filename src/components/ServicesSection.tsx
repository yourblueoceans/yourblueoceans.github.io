// src/components/ServicesSection.tsx
import React from "react";
import { CARD_HOVER, CARD_SURFACE, SECTION_CONTAINER, SECTION_SPACING, EYEBROW_TEXT } from "../constants/layout";

type Service = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

const services: Service[] = [
  {
    title: "웹 취약점 진단(Web VAPT)",
    subtitle: "Upload · XSS · CSRF · Directory Indexing",
    description:
      "OWASP Top 10과 실제 모의해킹 절차를 바탕으로 웹 애플리케이션 취약점을 분석하고 리포트로 정리할 수 있습니다.",
    bullets: ["시나리오 기반 테스트 케이스 & PoC", "Burp Suite · DevTools 요청/응답 분석", "기술/비기술 리포트 작성"],
  },
  {
    title: "클라우드 · 애플리케이션 보안 설계",
    subtitle: "PII 마스킹 · 암복호화 플로우 · KMS 연동",
    description:
      "개인정보 처리 웹서비스를 위한 PII 탐지·마스킹 및 안전한 암복호화 플로우를 설계·구현한 경험을 제공합니다.",
    bullets: ["AWS KMS + AES-GCM 플로우 설계", "문서 포맷별 PII 정책 정의", "보안 요구사항 → 개발 태스크 변환"],
  },
  {
    title: "네트워크 인프라 & 방화벽/DMZ",
    subtitle: "VLAN · 방화벽 정책 · DMZ 분리",
    description:
      "소규모 사내망을 가정해 L2/L3 · 방화벽 · DMZ 구성을 설계하고, 정상/비정상 트래픽을 문서화합니다.",
    bullets: ["서비스/관리/DMZ 세그먼트 설계", "방화벽 정책 정의 및 테스트", "패킷 캡처를 통한 검증"],
  },
  {
    title: "보안 문서화 & 발표",
    subtitle: "리포트 · 제안서 · 프레젠테이션",
    description:
      "비기술자도 이해할 수 있는 형태로 보안 프로젝트를 설명하고 결과를 리포트·발표 자료로 정리하는 역할에 강점이 있습니다.",
    bullets: ["취약점 리포트 · 조치 계획서 작성", "슬라이드 구성 및 스토리텔링", "이해관계자별 맞춤 커뮤니케이션"],
  },
];

const serviceIcons = ["🛡️", "☁️", "🌐", "🗂️"];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className={SECTION_SPACING}>
      <div className={`${SECTION_CONTAINER} py-24 sm:py-28 lg:py-32`}>
        <div className="mb-10 space-y-3">
          <p className={EYEBROW_TEXT}>WHAT I CAN DO</p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">팀에서 맡길 수 있는 보안·클라우드 관련 역할들</h2>
          <p className="max-w-3xl text-sm text-slate-400">
            인턴·주니어로 합류했을 때 어떤 일을 맡길 수 있을지를 기준으로 정리했습니다. 서비스 관점의 역할 정의를 지향합니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className={`flex h-full flex-col gap-4 ${CARD_SURFACE} ${CARD_HOVER} border-slate-700/70 p-6 opacity-0 animate-rise`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 text-xl">{serviceIcons[idx]}</div>
              <div>
                <h3 className="text-base font-semibold text-slate-50">{service.title}</h3>
                <p className="text-xs text-slate-400">{service.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-violet-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

