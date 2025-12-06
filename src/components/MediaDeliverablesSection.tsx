import React from "react";
import { motion } from "framer-motion";
import { FileText, PlayCircle, Presentation, Workflow } from "lucide-react";
import { PROJECTS, type ProjectDeliverableType } from "../copy/projects";
import { bodyText, cardClass, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const deliverableIcons: Record<ProjectDeliverableType, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  report: FileText,
  slides: Presentation,
  diagram: Workflow,
  video: PlayCircle,
};

const MediaDeliverablesSection: React.FC = () => (
  <motion.section id="media-deliverables" className={sectionClass} {...sectionMotion}>
    <div className={`${innerClass} flex flex-col items-center gap-10`}>
      <div className="max-w-[760px] space-y-4 text-center">
        <p className={overline}>MEDIA &amp; DELIVERABLES</p>
        <h2 className={`${heading2} text-[clamp(1.9rem,3.1vw,2.4rem)] font-extrabold tracking-tight`}>다운로드 허브</h2>
        <p className={`${bodyText} mx-auto max-w-[720px] text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
          각 프로젝트에서 실제로 작성한 리포트, 설계 문서, 발표 자료를 한 번에 확인할 수 있도록 모았습니다. 구직자나 면접관이 증빙 자료를
          바로 열어볼 수 있는 다운로드 허브입니다.
        </p>
      </div>

      <div className="flex w-full flex-col gap-8">
        {PROJECTS.map((project) => (
          <article key={project.id} className={`${cardClass} mx-auto w-full max-w-[1080px] space-y-6`}>
            <header className="space-y-2">
              <p className="text-sm font-semibold text-indigo-600">
                {project.period} · {project.team}
              </p>
              <h3 className="text-[clamp(1.5rem,2.4vw,1.75rem)] font-semibold text-[var(--color-text-strong)]">{project.title}</h3>
              <p className="text-lg font-medium text-slate-600">{project.subtitle}</p>
            </header>

            <div className="space-y-4 rounded-3xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/70 md:p-6">
              <div className="flex items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Deliverables</p>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="flex flex-col gap-4">
                {project.deliverables.map((deliverable) => {
                  const Icon = deliverableIcons[deliverable.type] ?? FileText;
                  return (
                    <div
                      key={`${project.id}-${deliverable.label}`}
                      className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-4 md:flex-row md:items-start md:gap-4"
                    >
                      <div className="role-icon">
                        <Icon className="role-icon-svg" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-base font-semibold text-slate-900">{deliverable.label}</p>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-[0.25em] text-slate-600">
                            {deliverable.format}
                          </span>
                        </div>
                        <p className="text-[0.98rem] leading-relaxed text-slate-600">{deliverable.description}</p>
                      </div>
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
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
);

export default MediaDeliverablesSection;

