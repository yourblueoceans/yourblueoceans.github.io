// src/components/ServicesSection.tsx
import React from "react";

type Service = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

const services: Service[] = [
  {
    title: "웹 취약점 진단(Web VAPT)",
    subtitle: "Upload / XSS / CSRF / Directory Indexing",
    description:
      "OWASP Top 10과 실제 모의해킹 절차를 바탕으로 웹 애플리케이션의 주요 취약점을 분석하고 리포트로 정리할 수 있습니다.",
    bullets: [
      "시나리오 기반 테스트 케이스 설계 및 PoC",
      "Burp Suite · DevTools를 활용한 요청/응답 분석",
      "개발자와 소통이 가능한 기술적·비기술적 리포트 작성",
    ],
  },
  {
    title: "클라우드·애플리케이션 보안 설계",
    subtitle: "PII 마스킹, 암복호화 플로우, KMS 연동",
    description:
      "개인정보 처리 웹서비스를 위한 PII 탐지·마스킹 및 안전한 암복호화 플로우를 설계·구현한 경험을 바탕으로, 초기 PoC와 구조 설계를 도울 수 있습니다.",
    bullets: [
      "AWS KMS + AES-GCM 키 관리·암복호화 구조 설계",
      "문서 포맷별 PII 탐지·마스킹 정책 정의",
      "보안 요구사항을 개발 태스크로 쪼개어 전달",
    ],
  },
  {
    title: "네트워크 인프라 & 방화벽·DMZ 설계",
    subtitle: "VLAN · 방화벽 정책 · DMZ 분리",
    description:
      "소규모 사내망 환경을 가정한 L2/L3·방화벽 구성 경험을 바탕으로, 기본적인 네트워크 보안 구조 설계와 문서화를 수행할 수 있습니다.",
    bullets: [
      "서비스·관리·DMZ 세그먼트 설계 및 VLAN 구성",
      "방화벽 정책(허용/차단) 정의 및 테스트 플로우 작성",
      "Wireshark 등으로 정상·비정상 트래픽 캡처·분석",
    ],
  },
  {
    title: "보안 문서화 & 발표",
    subtitle: "리포트 · 제안서 · 캡스톤 발표 경험",
    description:
      "비전공자·경영진도 이해할 수 있는 형태로 보안 프로젝트를 설명하고, 결과를 리포트·발표 자료로 정리하는 역할에 강점을 갖고 있습니다.",
    bullets: [
      "취약점 리포트·조치 계획서 작성",
      "슬라이드 구성 및 스토리텔링, 발표",
      "다양한 이해관계자를 고려한 용어 선택",
    ],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* 헤더 */}
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-violet-300">WHAT I CAN DO</p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">팀에서 맡길 수 있는 보안·클라우드 관련 역할들</h2>
          <p className="max-w-3xl text-sm text-slate-400">
            인턴·주니어로 합류했을 때, 실제로 어떤 일을 맡길 수 있을지를 기준으로 정리했습니다. 단순 스킬 나열이 아닌,
            서비스 관점의 역할 정의를 지향합니다.
          </p>
        </div>

        {/* 카드 */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.8)]"
            >
              <div>
                <h3 className="text-sm font-semibold text-slate-50 sm:text-[15px]">{service.title}</h3>
                <p className="mt-1 text-[12px] text-slate-400">{service.subtitle}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-300">{service.description}</p>
              </div>

              <ul className="mt-4 space-y-1.5 text-[12px] text-slate-300">
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

