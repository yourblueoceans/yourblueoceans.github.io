import React from "react";
import { motion } from "framer-motion";
import { bodyText, cardClass, heading2, innerClass, overline, pillClass, sectionClass, sectionMotion } from "../ui/tokens";

type CaseStudy = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  role: string;
  techStack: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "lockument",
    category: "Cloud Security · PII Protection",
    title: "PII 마스킹 & 암호화 웹서비스 (Lockument)",
    subtitle: "AWS KMS + AES-GCM 기반 문서 암호화 & 개인정보 마스킹",
    summary: "PII 필드 자동 탐지·마스킹과 AES-GCM 암복호화를 결합해 안전한 문서 처리를 설계한 보안 SaaS PoC.",
    highlights: ["AWS KMS + AES-GCM 키 플로우 설계", "20+ 문서 포맷 자동 마스킹 검증", "2025 캡스톤 디자인 2위"],
    role: "보안 아키텍처 설계, 기능 정의, 테스트 및 발표",
    techStack: ["React", "Vite", "Tailwind", "Flask", "AWS KMS", "Docker"],
  },
  {
    id: "web-vapt",
    category: "Web VAPT",
    title: "웹 취약점 진단 실습 – Upload · XSS · CSRF",
    subtitle: "실제 모의해킹 절차 기반 취약점 분석 & 리포트",
    summary: "Upload/XSS/CSRF/Directory Indexing을 시나리오화하여 재현하고, 대응방안을 리포트로 제안한 실습형 프로젝트.",
    highlights: ["Burp Suite · DevTools 기반 PoC", "취약점·대응 리포트 및 발표", "재검증 프로세스 정립"],
    role: "테스트 케이스 설계, 취약점 검증, 리포트 및 발표 자료 작성",
    techStack: ["Burp Suite", "OWASP Top 10", "PHP Lab", "Chrome DevTools"],
  },
  {
    id: "network-infra",
    category: "Network & Infra Security",
    title: "사내형 네트워크 인프라 & 보안 설계",
    subtitle: "VLAN · 방화벽 · DMZ 분리 아키텍처",
    summary: "소규모 사내망을 가정해 L2/L3, 방화벽, DMZ, 서버 세그먼트를 구성하고 트래픽 경로를 문서화한 프로젝트.",
    highlights: ["서비스/관리/DMZ 세그먼트 설계", "방화벽 허용/차단 정책 수립", "패킷 캡처로 정상·비정상 플로우 검증"],
    role: "네트워크 설계, 방화벽 정책 정의, 문서화 & 테스트",
    techStack: ["Cisco IOS", "TrusGuard", "VLAN", "DMZ"],
  },
];

const CaseStudiesSection: React.FC = () => (
  <motion.section id="case-study-list" className={sectionClass} {...sectionMotion}>
    <div className={innerClass}>
      <div>
        <p className={overline}>CASE STUDIES</p>
        <h2 className={heading2}>보안 컨설팅을 목표로 한 대표 프로젝트 3선</h2>
        <p className="section-lead mt-3">
          실제 보안 컨설팅 환경을 가정해 진행한 프로젝트들입니다. 문제 정의부터 접근 방식, 결과와 인사이트까지 Case Study 포맷으로 정리했습니다.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((item) => (
          <article key={item.id} className={`${cardClass} flex h-full flex-col`}>
            <div className="mb-4 h-40 w-full rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-100" />
            <div className={`${pillClass} mb-3 w-max`}>{item.category}</div>
            <h3 className="text-[var(--fs-card-title)] font-semibold text-[var(--color-text-strong)]">{item.title}</h3>
            <p className="text-xs uppercase tracking-[0.18em] text-indigo-500">{item.subtitle}</p>
            <p className={`${bodyText} mt-4`}>{item.summary}</p>
            <ul className="mt-5 space-y-3">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-[var(--fs-body)] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[var(--fs-body)] leading-relaxed">
              <span className="font-semibold text-[var(--color-text-strong)]">Role</span> · {item.role}
            </p>
            <p className="text-[var(--fs-body)] leading-relaxed">
              <span className="font-semibold text-[var(--color-text-strong)]">Tech</span> · {item.techStack.join(" · ")}
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center text-[var(--fs-body)] font-semibold text-indigo-600 transition hover:translate-x-1">
              자세히 보기
              <span className="ml-1 text-base">↗</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
);

export default CaseStudiesSection;

