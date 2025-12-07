import React, { useState } from "react";
import { Briefcase, ChevronDown, FileLock, Server, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { bodyText, heading2, innerClass, overline, pillClass, sectionClass, sectionMotion } from "../ui/tokens";

type Service = {
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  bullets: string[];
  tools: string[];
  relatedProject: { id: string; label: string };
};

const services: Service[] = [
  {
    title: "웹 취약점 진단(Web VAPT) & AppSec",
    subtitle: "Upload · XSS · CSRF · OWASP Top 10",
    headline: "시나리오 기반 VAPT 절차와 리포트 작성 경험",
    description:
      "VMware 기반 Ubuntu 웹 서버와 Kali 공격 서버를 구성해 Upload/XSS/CSRF 취약점을 실습하고, 주통기·주요정보통신기반시설 가이드에 맞춘 리포트를 작성합니다.",
    bullets: [
      "OWASP Top 10 기반 테스트 케이스와 교수자 양식에 맞춘 시나리오 설계",
      "HTTP Request/Response, 파라미터, 쿠키/세션을 분석한 공격 흐름 정리",
      "입력 검증, 파일 확장자·컨텐츠 타입 검증, CSRF 토큰 적용 등 조치안 문서화",
    ],
    tools: ["VMware", "Ubuntu Server", "Kali Linux", "HTTP 분석", "주요정보통신기반시설 가이드"],
    relatedProject: { id: "webvapt", label: "Web VAPT Lab (웹 취약점 분석)" },
  },
  {
    title: "클라우드 · 데이터 보안 설계",
    subtitle: "AWS KMS · AES-GCM · PII Masking",
    headline: "데이터 흐름에 맞춘 암복호화·키 관리와 PoC 구축",
    description:
      "Lockument(SecureDoc Cloud PoC)처럼 PII 마스킹, AES-GCM, AWS KMS를 결합해 개인정보 흐름을 안전하게 설계하고, Docker 기반 PoC 환경으로 검증합니다.",
    bullets: ["AWS KMS + AES-GCM 키 관리 플로우", "문서 포맷별 PII 정책 설계", "PoC 환경 구성 및 테스트 자동화"],
    tools: ["AWS KMS", "AES-GCM", "Docker"],
    relatedProject: { id: "securedoc", label: "Lockument (SecureDoc Cloud PoC)" },
  },
  {
    title: "네트워크 & 인프라 보안",
    subtitle: "VLAN · 방화벽 정책 · DMZ 분리",
    headline: "사내형 네트워크 분리와 트래픽 검증 문서화",
    description:
      "서비스망/관리망/DMZ를 분리하고 방화벽 정책·패킷 캡처를 통해 정상/비정상 트래픽을 검증, 요구사항과 결과를 문서화합니다.",
    bullets: ["세그먼트 디자인 & ACL 정의", "방화벽/IDS 정책 설정 및 테스트", "패킷 캡처 근거 기반 보고"],
    tools: ["Cisco IOS", "TrusGuard", "Wireshark"],
    relatedProject: { id: "droptheport", label: "Drop the Port" },
  },
  {
    title: "Security PoC & Pre-sales 협업",
    subtitle: "Security Consulting · Reporting",
    headline: "요구사항 정의부터 리포트·제안서까지 일관된 커뮤니케이션",
    description:
      "Security PoC 관점에서 요구사항을 정리하고 테스트·결과 리포트를 작성하며, 프리세일즈 협업까지 고려한 문서를 준비합니다.",
    bullets: ["요구사항 정의 → 테스트 → 결과 정리", "보안 리포트·제안서·발표 슬라이드 제작", "이해관계자별 커뮤니케이션 정리"],
    tools: ["Google Slides", "Notion", "MS Office"],
    relatedProject: { id: "securedoc", label: "Lockument (SecureDoc Cloud PoC)" },
  },
];

const serviceIcons = [ShieldCheck, FileLock, Server, Briefcase];

const WhatICanDoSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number>(-1);

  const toggleCard = (index: number) => {
    setExpanded((prev) => (prev === index ? -1 : index));
  };

  return (
    <motion.section id="what-i-can-do" className={sectionClass} {...sectionMotion}>
      <div className={innerClass}>
        <div className="max-w-[760px]">
          <p className={overline}>WHAT I CAN DO</p>
          <h2 className={`${heading2} text-[clamp(1.9rem,3vw,2.3rem)] font-extrabold tracking-tight`}>팀에서 맡길 수 있는 보안·클라우드 중심 역할</h2>
          <p className={`${bodyText} mt-3 max-w-[720px] text-base leading-relaxed text-slate-700 md:text-[1.08rem]`}>
            인턴·주니어 포지션으로 합류했을 때 즉시 투입 가능한 역할을 기준으로 정리했습니다. 각 항목을 클릭하면 구체적인 절차, 산출물, 활용 도구를 확인할 수 있습니다.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {services.map((service, idx) => {
            const Icon = serviceIcons[idx] ?? ShieldCheck;
            const isOpen = expanded === idx;
            return (
              <article key={service.title} className={`stack-card ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="stack-header"
                  aria-expanded={isOpen}
                  onClick={() => toggleCard(idx)}
                >
                  <div className="flex flex-1 flex-col gap-3 text-left sm:flex-row sm:items-center">
                    <div className="role-icon w-10 h-10" aria-hidden="true">
                      <Icon className="role-icon-svg" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.35em] text-indigo-500">{service.subtitle}</p>
                      <h3 className="text-[clamp(1.35rem,2.2vw,1.55rem)] font-semibold text-slate-900">{service.title}</h3>
                      <p className="text-base font-medium text-indigo-700">{service.headline}</p>
                    </div>
                  </div>
                  <ChevronDown className={`stack-chevron ${isOpen ? "open" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 space-y-5 pt-2">
                        <p className={`${bodyText} max-w-[680px] text-[1.02rem] leading-relaxed text-slate-700`}>{service.description}</p>
                        <ul className="space-y-3 text-[1.02rem] leading-relaxed text-slate-700">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">주요 툴 · 기술</p>
                          <div className="flex flex-wrap gap-2">
                            {service.tools.map((tool) => (
                              <span key={tool} className={`${pillClass} normal-case`}>
                                {tool}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">관련 프로젝트</p>
                          <a
                            href={`#case-study-${service.relatedProject.id}`}
                            className="inline-flex items-center text-sm font-semibold text-indigo-600 underline-offset-2 hover:underline"
                          >
                            {service.relatedProject.label} → Case Studies
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatICanDoSection;

