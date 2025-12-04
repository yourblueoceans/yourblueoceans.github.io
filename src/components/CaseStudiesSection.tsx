// src/components/CaseStudiesSection.tsx
import React from "react";

type CaseStudy = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  impact: string;
  role: string;
  techStack: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "lockument",
    category: "Cloud Security · PII Protection",
    title: "PII 마스킹 & 암호화 웹서비스 (Lockument)",
    subtitle: "AWS KMS + AES-GCM 기반 문서 암호화 & 개인정보 마스킹",
    summary:
      "개인정보가 포함된 문서를 업로드하면 자동으로 PII 필드를 탐지·마스킹하고, AES-GCM으로 암호화하여 저장하는 클라우드 보안 웹서비스를 설계·구현했습니다.",
    impact: "20+ 문서 포맷 테스트, 자동 마스킹 성공 · 2025 캡스톤 디자인 대회 2위 수상",
    role: "보안 아키텍처 설계, 기능 정의, 테스트 시나리오 작성, 발표",
    techStack: ["React", "Vite", "Tailwind", "Flask", "AWS KMS", "Docker"],
  },
  {
    id: "web-vapt",
    category: "Web VAPT",
    title: "웹 취약점 진단 실습 – Upload · XSS · CSRF",
    subtitle: "실제 모의해킹 절차에 맞춘 웹 취약점 분석 & 리포트 작성",
    summary:
      "파일 업로드 취약점, Stored/Reflected XSS, CSRF, Directory Indexing을 중심으로 모의해킹 시나리오를 구성하고, Burp Suite/브라우저 개발자 도구를 활용해 PoC를 수행했습니다.",
    impact: "각 취약점별 재현 스크린샷 및 상세 리포트 작성, 대응방안(보안 설정·코드 수정)까지 제안",
    role: "테스트 케이스 설계, 취약점 검증, 리포트 및 발표 자료 작성",
    techStack: ["Burp Suite", "OWASP Top 10", "PHP Lab", "Chrome DevTools"],
  },
  {
    id: "network-infra",
    category: "Network & Infra Security",
    title: "사내형 네트워크 인프라 구축 & 보안 설계",
    subtitle: "VLAN · 방화벽 · DMZ 구성으로 분리된 보안 영역 설계",
    summary:
      "소규모 기업 환경을 가정해 L2/L3 스위치, 방화벽, 서버 세그먼트를 구성하고, DMZ·내부망·관리망을 분리하여 서비스와 관리 트래픽을 안전하게 분리했습니다.",
    impact: "VLAN/라우팅/방화벽 정책 문서화, 패킷 캡처를 통한 정상·비정상 플로우 검증",
    role: "네트워크 설계, 방화벽 정책 정의, 테스트 및 문서화",
    techStack: ["Cisco IOS", "AhnLab TrusGuard or 유사 FW", "VLAN", "DMZ"],
  },
];

const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="border-b border-slate-800/60 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:py-20">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-300">CASE STUDIES</p>
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">보안 컨설팅을 목표로 한 대표 프로젝트 3선</h2>
          <p className="max-w-3xl text-sm text-slate-400">
            실제 보안 컨설팅 환경을 가정한 프로젝트들로, 문제 정의부터 접근 방법, 결과와 배운 점까지 Case Study 포맷으로 정리했습니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((item, idx) => (
            <article
              key={item.id}
              className={`group rounded-3xl bg-gradient-to-br from-violet-500/40 via-slate-900 to-transparent p-[1px] ${
                idx === 0 ? "shadow-[0_28px_90px_rgba(88,28,135,0.45)]" : "shadow-[0_20px_70px_rgba(15,23,42,0.9)]"
              } transition`}
            >
              <div className="flex h-full flex-col rounded-[inherit] border border-slate-800 bg-slate-950/90 p-6 backdrop-blur">
                <div className="mb-3 inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                  {item.category}
                </div>
                <h3 className="text-base font-semibold text-slate-50">{item.title}</h3>
                <p className="text-[12px] text-slate-400">{item.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">{item.summary}</p>
                <p className="mt-3 text-xs font-semibold text-emerald-300">{item.impact}</p>
                <div className="mt-4 space-y-2 text-xs text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-400">Role. </span>
                    {item.role}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-400">Tech. </span>
                    {item.techStack.join(" · ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

