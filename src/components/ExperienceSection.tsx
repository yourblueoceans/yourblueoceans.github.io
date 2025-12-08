import React from "react";
import { motion } from "framer-motion";
import ExperienceTimeline from "./ExperienceTimeline";
import { projects } from "@/data/projects";
import { experienceTimeline } from "@/data/experience";
import { bodyText, cardClass, captionText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const projectSummaries = projects.map((project) => ({
  id: project.id,
  title: project.name,
  period: `${project.period} · ${project.teamInfo}`,
  highlight: project.highlight,
}));

const customerOpsOrder = ["koreanair", "apotheco", "smartstore"] as const;
const customerOps = customerOpsOrder
  .map((targetId) => experienceTimeline.find((item) => item.id === targetId))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

const certs = [
  { name: "정보보안기사", detail: "국가공인 정보보안 전문가 자격" },
  { name: "Cisco CCST", detail: "Networking Fundamentals" },
  { name: "정보처리기사(필기)", detail: "소프트웨어 공학·데이터 구조 기초" },
  { name: "네트워크관리사 2급", detail: "네트워크 구성·장애 대응" },
  { name: "한국사 1급 / TOEIC SPEAKING IH", detail: "비즈니스 커뮤니케이션" },
];

const ExperienceSection: React.FC = () => {
  return (
    <motion.section id="experience" className={`${sectionClass} bg-white`} {...sectionMotion}>
      <div className={`${innerClass} space-y-10`}>
        <div className="max-w-[820px] space-y-4">
          <p className={overline}>EXPERIENCE</p>
          <h2 className={`${heading2} text-[clamp(2rem,3.2vw,2.6rem)] font-extrabold tracking-tight`}>경험과 학습 경로</h2>
          <p className={`${bodyText} max-w-[720px] text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            프로젝트, 교육, 고객/운영 경험을 하나의 수평 타임라인으로 정리했습니다. 어떤 순서로 역량을 쌓아 왔는지, 어디서 실습하고 고객과 소통했는지 직관적으로 확인할 수 있습니다.
          </p>
        </div>

        <ExperienceTimeline />

        <div className="grid gap-6 md:grid-cols-2">
          <section className={`${cardClass} space-y-4`}>
            <div>
              <p className={overline}>PROJECTS</p>
              <h3 className="text-[1.2rem] font-semibold text-[var(--color-text-strong)]">대표 프로젝트 3선 요약</h3>
            </div>
            <ul className="space-y-4">
              {projectSummaries.map((project) => (
                <li key={project.id} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500">{project.period}</p>
                  <p className="mt-1 text-[1.05rem] font-semibold text-slate-900">{project.title}</p>
                  <p className="text-sm text-slate-600">{project.highlight}</p>
                  <a href={`#case-study-${project.id}`} className="mt-2 inline-flex text-sm font-semibold text-indigo-600 underline-offset-2 hover:underline">
                    Case Study →
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className={`${cardClass} space-y-4`}>
            <div>
              <p className={overline}>CUSTOMER &amp; OPERATIONS</p>
              <h3 className="text-[1.2rem] font-semibold text-[var(--color-text-strong)]">현장 경험 &amp; 비즈니스 운영</h3>
            </div>
            <ul className="space-y-4">
              {customerOps.map((item) => (
                <li key={item.id} className="space-y-1 rounded-2xl border border-slate-200/60 bg-white/85 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500">{item.period}</p>
                  <p className="text-[1.05rem] font-semibold text-slate-900">{item.title}</p>
                  {item.subtitle && <p className="text-sm text-slate-500">{item.subtitle}</p>}
                  <p className="text-sm text-slate-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="space-y-3">
          <p className={overline}>HIGHLIGHT</p>
          <div className={cardClass}>
            <p className="text-[1.08rem] font-semibold text-[var(--color-text-strong)]">2025 Lockument (SecureDoc Cloud PoC) 캡스톤 금상</p>
            <p className={`${captionText} mt-2 leading-relaxed text-[0.98rem]`}>
              PII 탐지·마스킹과 AWS KMS + AES-GCM 암복호화를 결합한 Lockument PoC로 “실제 기업 솔루션 같다”는 평가를 받았습니다.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className={overline}>CERTIFICATIONS</p>
          <div className="flex flex-wrap gap-3 text-sm text-[var(--color-text)]">
            {certs.map((cert) => (
              <div key={cert.name} className="rounded-full border border-slate-200 bg-white/85 px-4 py-1.5 text-sm font-semibold text-slate-700">
                {cert.name}
                <span className="ml-2 text-xs text-slate-400">{cert.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;

