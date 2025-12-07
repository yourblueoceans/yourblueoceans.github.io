import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, PlayCircle, Presentation, Workflow } from "lucide-react";
import { PROJECTS, type ProjectDeliverableType } from "../copy/projects";
import { bodyText, cardClass, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const deliverableIcons: Record<ProjectDeliverableType, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  report: FileText,
  slides: Presentation,
  diagram: Workflow,
  video: PlayCircle,
};

const MediaDeliverablesSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(PROJECTS[0]?.id ?? null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <motion.section id="media-deliverables" className={`${sectionClass} bg-slate-50`} {...sectionMotion}>
      <div className={`${innerClass} flex flex-col items-center gap-10`}>
        <div className="max-w-[760px] space-y-4 text-center">
          <p className={overline}>MEDIA &amp; DELIVERABLES</p>
          <h2 className={`${heading2} text-[clamp(2rem,3.2vw,2.6rem)] font-extrabold tracking-tight`}>Deliverables Hub</h2>
          <p className={`${bodyText} mx-auto max-w-[720px] text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            프로젝트별 산출물을 한 번에 확인하고 다운로드할 수 있는 허브입니다. 전개 상세와 컨설팅 스토리는 Case Studies 섹션에서 확인해 주세요.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6">
          {PROJECTS.map((project) => {
            const isOpen = openId === project.id;
            return (
              <article key={project.id} className={`${cardClass} mx-auto w-full max-w-[1080px] overflow-hidden p-0`}>
                <button
                  type="button"
                  className="flex w-full flex-col gap-2 px-6 py-6 text-left transition hover:bg-white/70 sm:flex-row sm:items-center sm:justify-between"
                  aria-expanded={isOpen}
                  onClick={() => toggle(project.id)}
                >
                  <div>
                    <p className="text-sm font-semibold text-indigo-600">
                      {project.period} · {project.team}
                    </p>
                    <h3 className="text-[clamp(1.4rem,2.4vw,1.8rem)] font-semibold text-slate-900">{project.title}</h3>
                    <p className="text-base text-slate-600">{project.subtitle}</p>
                  </div>
                  <Download className={`h-5 w-5 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`${project.id}-downloads`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="border-t border-slate-100 bg-white/90 px-6 py-6"
                    >
                      <div className="space-y-4">
                        {project.deliverables.map((deliverable) => {
                          const Icon = deliverableIcons[deliverable.type] ?? FileText;
                          return (
                            <div key={`${project.id}-${deliverable.label}`} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 md:flex-row md:items-center md:gap-4">
                              <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                                  <Icon className="h-5 w-5" />
                                </span>
                                <div>
                                  <p className="text-base font-semibold text-slate-900">{deliverable.label}</p>
                                  <p className="text-sm text-slate-500">{deliverable.description}</p>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-wrap items-center justify-end gap-3">
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-[0.25em] text-slate-600">{deliverable.format}</span>
                                {deliverable.href && (
                                  <a
                                    href={deliverable.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-full border border-indigo-200 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:border-indigo-400 hover:text-indigo-700"
                                  >
                                    열기 ↗
                                  </a>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-indigo-600">
                        <span>스토리와 컨설팅 워크플로우가 궁금하다면?</span>
                        <a href="#case-studies" className="inline-flex items-center font-semibold">
                          Case Studies에서 자세히 보기 →
                        </a>
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

export default MediaDeliverablesSection;

