import React, { useState } from "react";
import { Briefcase, ChevronDown, FileLock, Server, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project, type ProjectId } from "@/data/projects";
import { bodyText, heading2, innerClass, overline, pillClass, sectionClass, sectionMotion } from "../ui/tokens";

type ProjectCopyField = "problem" | "approach" | "impact" | "role";

type Capability = {
  title: string;
  subtitle: string;
  headline: string;
  projectIds: ProjectId[];
  bulletSources: Array<{ projectId: ProjectId; field: ProjectCopyField; take?: number; offset?: number }>;
};

const projectMap = projects.reduce<Record<ProjectId, Project>>((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {} as Record<ProjectId, Project>);

const capabilityCards: Capability[] = [
  {
    title: "웹 취약점 진단(Web VAPT) & AppSec",
    subtitle: "Upload · XSS · CSRF",
    headline: "시나리오 기반 VAPT 재현 + 조치 리포트",
    projectIds: ["webVapt"],
    bulletSources: [
      { projectId: "webVapt", field: "approach", take: 2 },
      { projectId: "webVapt", field: "impact", take: 2 },
    ],
  },
  {
    title: "클라우드 · 데이터 보안 설계",
    subtitle: "AWS KMS · AES-GCM · PII",
    headline: "데이터 흐름 분석 → 암복호화 설계",
    projectIds: ["lockument"],
    bulletSources: [
      { projectId: "lockument", field: "approach", take: 2 },
      { projectId: "lockument", field: "impact", take: 1 },
      { projectId: "lockument", field: "role", take: 1 },
    ],
  },
  {
    title: "네트워크 & 인프라 보안",
    subtitle: "Segmentation · DMZ · Firewall",
    headline: "세그먼트 설계와 운영 문서화",
    projectIds: ["dropThePort"],
    bulletSources: [
      { projectId: "dropThePort", field: "approach", take: 2 },
      { projectId: "dropThePort", field: "impact", take: 1 },
      { projectId: "dropThePort", field: "role", take: 1 },
    ],
  },
  {
    title: "Security PoC & Pre-sales 협업",
    subtitle: "Workflow · Reporting",
    headline: "요구사항 → 테스트 → 산출물 총괄",
    projectIds: ["lockument", "dropThePort"],
    bulletSources: [
      { projectId: "lockument", field: "role", take: 1 },
      { projectId: "dropThePort", field: "role", take: 1, offset: 1 },
      { projectId: "lockument", field: "impact", take: 1, offset: 3 },
    ],
  },
];

const serviceIcons = [ShieldCheck, FileLock, Server, Briefcase];

const buildBullets = (config: Capability) => {
  const bullets: string[] = [];
  config.bulletSources.forEach(({ projectId, field, take, offset }) => {
    const source = projectMap[projectId]?.[field] ?? [];
    if (source.length === 0) return;
    bullets.push(...source.slice(offset ?? 0, (offset ?? 0) + (take ?? source.length)));
  });
  return bullets.slice(0, 5);
};

const WhatICanDoSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number>(-1);

  const toggleCard = (index: number) => setExpanded((prev) => (prev === index ? -1 : index));

  return (
    <motion.section id="what-i-can-do" className={sectionClass} {...sectionMotion}>
      <div className={innerClass}>
        <div className="max-w-[760px] space-y-3">
          <p className={overline}>WHAT I CAN DO</p>
          <h2 className={`${heading2} text-[clamp(1.9rem,3vw,2.3rem)] font-extrabold tracking-tight`}>팀에서 바로 투입할 수 있는 역할</h2>
          <p className={`${bodyText} text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            긴 스토리는 Case Studies에 맡기고, 여기서는 “이 사람에게 어떤 미션을 맡길 수 있는지”만 빠르게 보여줍니다. 각 카드를 열면 핵심 수행 bullet과 관련 기술, Case Study 링크를
            확인할 수 있습니다.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {capabilityCards.map((service, idx) => {
            const Icon = serviceIcons[idx] ?? ShieldCheck;
            const isOpen = expanded === idx;
            const bullets = buildBullets(service);
            const relatedProjects = service.projectIds.map((id) => projectMap[id]).filter(Boolean);
            const techTags = Array.from(
              new Set(
                relatedProjects
                  .flatMap((project) => project.tech.slice(0, 3))
                  .filter(Boolean),
              ),
            ).slice(0, 6);

            return (
              <article key={service.title} className={`stack-card ${isOpen ? "open" : ""}`}>
                <button type="button" className="stack-header" aria-expanded={isOpen} onClick={() => toggleCard(idx)}>
                  <div className="flex flex-1 flex-col gap-3 text-left sm:flex-row sm:items-center">
                    <div className="role-icon h-10 w-10" aria-hidden="true">
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
                      key={`${service.title}-content`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 space-y-5 pt-2">
                        <ul className="space-y-3 text-[1rem] leading-relaxed text-slate-700">
                          {bullets.map((bullet) => (
                            <li key={`${service.title}-${bullet}`} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        {techTags.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">주요 기술</p>
                            <div className="flex flex-wrap gap-2">
                              {techTags.map((tool) => (
                                <span key={`${service.title}-${tool}`} className={`${pillClass} normal-case`}>
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">관련 Case Study</div>
                          <div className="flex flex-wrap gap-2">
                            {relatedProjects.map((project) => (
                              <a
                                key={project.id}
                                href={`#case-study-${project.id}`}
                                className="inline-flex items-center text-sm font-semibold text-indigo-600 underline-offset-2 hover:underline"
                              >
                                {project.name} →
                              </a>
                            ))}
                          </div>
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

