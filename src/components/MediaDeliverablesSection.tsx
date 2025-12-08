import React from "react";
import { motion } from "framer-motion";
import { Download, FileDown, FileText, Presentation } from "lucide-react";
import { projects } from "@/data/projects";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { bodyText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";

const deliverableIcons = {
  PDF: FileText,
  PPTX: Presentation,
  HWP: FileDown,
  ETC: FileDown,
} as const;

const MediaDeliverablesSection: React.FC = () => {
  return (
    <motion.section id="downloads" className={`${sectionClass} bg-slate-50`} {...sectionMotion}>
      <div className={`${innerClass} flex flex-col gap-10`}>
        <div className="max-w-[760px] space-y-4 text-center md:mx-auto">
          <p className={overline}>MEDIA &amp; DELIVERABLES</p>
          <h2 className={`${heading2} text-[clamp(2rem,3.2vw,2.6rem)] font-extrabold tracking-tight`}>Download Hub</h2>
          <p className={`${bodyText} mx-auto max-w-[720px] text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            프로젝트 산출물, 보고서, 슬라이드를 빠르게 찾을 수 있는 허브입니다. 필요한 파일만 펼쳐서 다운로드하세요.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="rounded-[2.2rem] border border-white/70 bg-white/90 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
        >
          {projects.map((project) => (
            <AccordionItem key={project.id} value={project.id} className="border-b border-slate-100/60 px-6 py-1 last:border-b-0">
              <AccordionTrigger className="px-0">
                <div className="flex w-full flex-col gap-2 py-4 text-left sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500">
                      {project.period} · {project.teamInfo}
                    </p>
                    <h3 className="text-[clamp(1.3rem,2.2vw,1.65rem)] font-semibold text-slate-900">{project.name}</h3>
                    <p className="text-sm text-slate-500">{project.subtitle}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                    {project.deliverables.length} files
                    <Download className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-6">
                <div className="space-y-3 rounded-3xl border border-slate-100 bg-white/95 p-5">
                  {project.deliverables.map((deliverable) => {
                    const Icon = deliverableIcons[deliverable.type] ?? FileText;
                    return (
                      <div
                        key={deliverable.id}
                        className="flex flex-col gap-3 rounded-2xl border border-slate-100/80 bg-slate-50/40 p-4 text-sm text-slate-600 md:flex-row md:items-center md:gap-4"
                      >
                        <div className="flex flex-1 items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <p className="text-base font-semibold text-slate-900">{deliverable.label}</p>
                            {deliverable.note && <p className="text-sm text-slate-500">{deliverable.note}</p>}
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-end gap-3">
                          <span className="rounded-full bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-600">
                            {deliverable.type}
                          </span>
                          {deliverable.href ? (
                            <a
                              href={deliverable.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                              열기 →
                            </a>
                          ) : (
                            <span className="rounded-full border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-400">
                              준비 중
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 text-right text-sm font-semibold text-indigo-600">
                  <a href={`#case-study-${project.id}`} className="inline-flex items-center gap-1">
                    Case Study에서 자세히 보기 →
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
};

export default MediaDeliverablesSection;

