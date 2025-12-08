import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CloudCog, Network, Workflow } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { bodyText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

type Capability = {
  id: string;
  label: string;
  title: string;
  summary: string;
  bullets: string[];
  tags: string[];
  projectAnchor: string;
};

const capabilityIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  webVapt: ShieldCheck,
  lockument: CloudCog,
  dropThePort: Network,
  poc: Workflow,
};

const capabilityAccordion: Capability[] = [
  {
    id: "webVapt",
    label: "UPLOAD · XSS · CSRF · OWASP TOP 10",
    title: "웹 취약점 진단(Web VAPT) & AppSec",
    summary: "시나리오 기반 진단 절차를 설계하고 증적·리포트를 빠르게 작성할 수 있습니다.",
    bullets: [
      "VMware 기반 Ubuntu/Kali 환경에서 Upload·XSS·CSRF 재현 및 로그 증적 수집",
      "HTTP Request/Response 분석과 파라미터별 위험 설명",
      "주요정보통신기반시설 가이드에 맞춘 보고서·재진단 체크리스트 작성",
    ],
    tags: ["VMware", "HTTP Analysis", "Report Writing"],
    projectAnchor: "#case-study-webVapt",
  },
  {
    id: "lockument",
    label: "AWS KMS · AES-GCM · DATA MASKING",
    title: "클라우드·데이터 보안 설계 (PoC)",
    summary: "교육·캡스톤 환경에서 개인정보 흐름을 분석하고 암복호화 파이프라인을 설계합니다.",
    bullets: [
      "AWS KMS CMK + AES-GCM으로 문서 암복호화 PoC 파이프라인 설계·구현",
      "PII 탐지·마스킹 정책 정의와 Presigned URL 기반 파일 경로 보호",
      "요구사항 명세, 키 정책, 감사 로깅 문서화",
    ],
    tags: ["AWS KMS", "AES-GCM", "PoC Workflow"],
    projectAnchor: "#case-study-lockument",
  },
  {
    id: "dropThePort",
    label: "SEGMENTATION · DMZ · FIREWALL · VLAN",
    title: "네트워크 & Infra 보안 설계",
    summary: "소규모 사내망을 구간 분리하고 방화벽 정책·운영 문서를 작성할 수 있습니다.",
    bullets: [
      "서비스/업무/DMZ 세그먼트와 IP 플랜 설계, ACL·NAT·Port-Forward 정책 40여 개 정의",
      "Syslog·NetFlow 기반 모니터링 루틴과 점검 체크리스트 문서화",
      "운영팀 인수인계를 위한 정책 변경 절차 정리",
    ],
    tags: ["VLAN", "Firewall Policy", "Ops Docs"],
    projectAnchor: "#case-study-dropThePort",
  },
  {
    id: "poc",
    label: "WORKFLOW · REPORTING · TEAM LEAD",
    title: "Security PoC & Pre-sales 협업",
    summary: "요구사항 정의부터 테스트·산출물 제작까지 이어지는 커뮤니케이션을 총괄합니다.",
    bullets: [
      "Lockument/Drop the Port 팀장으로 일정·품질·발표를 총괄",
      "요구사항 → 테스트 → 결과 보고 흐름을 이해관계자별로 정리",
      "Deliverables Hub에 있는 보고서·슬라이드를 직접 제작",
    ],
    tags: ["Consulting Flow", "Reporting", "Stakeholder Comm"],
    projectAnchor: "#downloads",
  },
];

const WhatICanDoSection: React.FC = () => {
  return (
    <motion.section id="what-i-can-do" className={sectionClass} {...sectionMotion}>
      <div className={innerClass}>
        <header className="max-w-[760px] space-y-3">
          <p className={overline}>WHAT I CAN DO</p>
          <h2 className={`${heading2} text-[clamp(1.9rem,3vw,2.3rem)] font-extrabold tracking-tight`}>팀에서 맡길 수 있는 보안·클라우드 중심 역할</h2>
          <p className={`${bodyText} text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            프로젝트 세 개에서 반복한 워크플로우를 기반으로, 웹 취약점 진단 · PoC 수준의 데이터 암복호화 설계 · 네트워크 세그멘테이션 · 프리세일즈 협업 역할을 어떻게 수행하는지 요약했습니다.
          </p>
        </header>

        <Accordion
          type="single"
          collapsible
          className="mt-10 divide-y divide-white/40 rounded-[2rem] border border-white/30 bg-white/70 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-[20px]"
        >
          {capabilityAccordion.map((capability) => {
            const Icon = capabilityIcons[capability.id] ?? ShieldCheck;
            return (
              <AccordionItem key={capability.id} value={capability.id} className="border-none px-6 py-1">
                <AccordionTrigger className="px-0 py-5">
                  <div className="flex w-full flex-col gap-3 text-left md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/70 text-indigo-100 shadow-[0_12px_28px_rgba(15,23,42,0.45)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-indigo-500">{capability.label}</p>
                        <h3 className="text-[clamp(1.35rem,2.2vw,1.65rem)] font-semibold text-slate-900">{capability.title}</h3>
                        <p className="text-sm font-medium text-slate-600">{capability.summary}</p>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-6 text-base text-slate-700">
                  <div className="rounded-3xl border border-slate-100 bg-white/85 p-5">
                    <ul className="space-y-3 text-[1rem] leading-relaxed">
                      {capability.bullets.map((bullet) => (
                        <li key={`${capability.id}-${bullet}`} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                      {capability.tags.map((tag) => (
                        <span key={`${capability.id}-${tag}`} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.7rem] tracking-[0.2em] text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 text-right text-sm font-semibold text-indigo-600">
                      <a href={capability.projectAnchor} className="inline-flex items-center gap-1 underline-offset-2 hover:underline">
                        관련 Case Study / Deliverables 보기 →
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </motion.section>
  );
};

export default WhatICanDoSection;

