import React from "react";
import { motion } from "framer-motion";
import { FileLock, FileSignature, Network, ShieldCheck } from "lucide-react";
import { bodyText, cardClass, heading2, innerClass, overline, pillClass, sectionClass, sectionMotion } from "../ui/tokens";

type CaseStudy = {
  id: string;
  category: string;
  title: string;
  timeline: string;
  summary: string;
  points: { label: string; value: string }[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const caseStudies: CaseStudy[] = [
  {
    id: "securedoc",
    category: "SecureDoc Cloud",
    title: "SecureDoc Cloud – PII 마스킹 & 암호화 웹서비스 (SecureDoc Cloud)",
    timeline: "SecureDoc Cloud (2025.08~11, 2인 팀장, 캡스톤 금상)",
    summary:
      "PII 필드 자동 탐지·마스킹과 AES-GCM 암호화를 결합한 문서 보안 SaaS PoC입니다. AWS KMS 기반 키 관리와 웹 VAPT 대응까지 포함해, 실제 기업 솔루션에 가깝다는 평가를 받은 캡스톤 금상 프로젝트입니다.",
    points: [
      { label: "Problem", value: "문서 협업 중 개인정보를 마스킹·암호화해야 하는 요구" },
      { label: "Approach", value: "AWS KMS + AES-GCM 암·복호화 설계, Web VAPT 대응" },
      { label: "Outcome", value: "캡스톤 금상, PoC Demo, 고객 발표 자료" },
      { label: "Role", value: "보안 아키텍트 · 팀장 · 리포트/발표" },
      { label: "Tech", value: "AWS KMS, AES-GCM, React, Flask, Docker" },
    ],
    icon: FileLock,
  },
  {
    id: "droptheport",
    category: "Drop the Port",
    title: "Drop the Port – 사내형 네트워크 인프라 & 방화벽 설계 (Drop the Port)",
    timeline: "Drop the Port (2025.08.21~11.03, 4인 팀장, CB 정보통신(가상의 스타트업))",
    summary:
      "가상의 스타트업 ‘CB 정보통신’ 사내망을 가정하고 L2/L3 스위치, VLAN, 방화벽, DMZ를 설계·구성한 인프라 보안 프로젝트입니다. 서비스/관리/DMZ 세그먼트 분리와 트래픽 분석을 통해 보안 인프라 설계와 운영 관점의 경험을 쌓았습니다.",
    points: [
      { label: "Problem", value: "서비스/관리망이 혼재된 스타트업 네트워크의 보안 취약" },
      { label: "Approach", value: "L2/L3 세그먼트화, VLAN, 방화벽/DMZ 정책 정의" },
      { label: "Outcome", value: "정책 문서, 패킷 분석, 운영 매뉴얼" },
      { label: "Role", value: "설계 총괄 · 팀장 · 정책 작성" },
      { label: "Tech", value: "Cisco L2/L3, Firewall, NAT, DMZ, Linux" },
    ],
    icon: Network,
  },
  {
    id: "web-vapt",
    category: "웹 취약점 분석",
    title: "웹 취약점 분석 – Upload / XSS / CSRF 실습",
    timeline: "웹 취약점 분석 (2025.11~12)",
    summary:
      "Upload, XSS, CSRF 취약점을 실제로 재현하고 Burp Suite·브라우저 DevTools를 활용해 요청/응답을 분석한 뒤, Web VAPT 리포트 형식으로 정리한 실습 프로젝트입니다.",
    points: [
      { label: "Problem", value: "공격 시나리오와 조치안을 동시에 제시해야 하는 진단 요구" },
      { label: "Approach", value: "Upload/XSS/CSRF PoC 작성, 세션·쿠키 분석, 재진단" },
      { label: "Outcome", value: "조치 리포트, 발표 슬라이드, 재검증 체크리스트" },
      { label: "Role", value: "테스트 케이스 · Burp Suite 분석 · 보고서" },
      { label: "Tech", value: "Burp Suite, Chrome DevTools, PHP Lab" },
    ],
    icon: ShieldCheck,
  },
];

const CaseStudiesSection: React.FC = () => (
  <motion.section id="case-studies" className={sectionClass} {...sectionMotion}>
    <div className={innerClass}>
      <div className="max-w-4xl">
        <p className={overline}>CASE STUDIES</p>
        <h2 className={`${heading2} text-4xl font-extrabold tracking-tight`}>{"SecureDoc\u00A0Cloud · Drop\u00A0the\u00A0Port · 웹\u00A0취약점\u00A0분석"}</h2>
        <p className={`${bodyText} mt-3 max-w-3xl text-[0.98rem] md:text-base lg:text-[1.05rem]`}>
          대표 프로젝트 3건을 통해 PII 보호, 인프라 분리, Web VAPT 컨설팅 워크플로우를 경험했습니다. 아래 타임라인은 Media &amp; Deliverables에도 동일하게 반영되어 있습니다.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((item) => {
          const Icon = item.icon ?? FileSignature;
          return (
            <article key={item.id} className={`${cardClass} flex h-full flex-col gap-4`}>
              <div className="role-icon w-10 h-10">
                <Icon className="role-icon-svg" />
              </div>
              <div className={`${pillClass} w-max`}>{item.category}</div>
              <h3 className="text-[var(--fs-h2)] font-semibold text-[var(--color-text-strong)]">{item.title}</h3>
              <p className="text-sm font-semibold text-indigo-600">{item.timeline}</p>
              <p className={`${bodyText} max-w-3xl text-[0.98rem] leading-relaxed`}>{item.summary}</p>
              <ul className="mt-3 space-y-2 text-[0.98rem] text-slate-700">
                {item.points.map((point) => (
                  <li key={point.label} className="flex gap-3 leading-relaxed">
                    <span className="font-semibold text-slate-900">{point.label}</span>
                    <span className="flex-1">: {point.value}</span>
                  </li>
                ))}
              </ul>
              <a href="#media-deliverables" className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-600 transition hover:translate-x-1">
                산출물 확인하기
                <span className="ml-1 text-base">↗</span>
              </a>
            </article>
          );
        })}
      </div>
    </div>
  </motion.section>
);

export default CaseStudiesSection;

