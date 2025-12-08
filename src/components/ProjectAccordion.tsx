import React from "react";
import { AlertTriangle, Cpu, FileDown, FileText, Image as ImageIcon, Lock, Network, Route, Shield, Sparkles, UserCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projects, type Project, type ProjectId } from "@/data/projects";
import { pillClass } from "@/ui/tokens";

const deliverableIcons: Record<Project["deliverables"][number]["type"], React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  PDF: FileText,
  PPTX: FileDown,
  HWP: FileDown,
  ETC: FileDown,
};

const sectionIconMap = {
  problem: AlertTriangle,
  approach: Route,
  impact: Sparkles,
  role: UserCheck,
  tech: Cpu,
} as const;

const projectIconMap: Record<ProjectId, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  lockument: Lock,
  dropThePort: Network,
  webVapt: Shield,
};

const SectionLabel: React.FC<{ icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; label: string }> = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
    <Icon className="h-3.5 w-3.5 text-indigo-500/80" />
    {label}
  </div>
);

const ProjectAccordion: React.FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="divide-y divide-slate-100 rounded-[2.4rem] border border-white/60 bg-white/85 shadow-[0_40px_120px_rgba(15,23,42,0.14)] backdrop-blur-[28px]"
    >
      {projects.map((project) => (
        <AccordionItem key={project.id} value={project.id} id={`case-study-${project.id}`} className="border-none px-6 py-2">
          <AccordionTrigger className="px-0">
            <div className="flex w-full flex-col gap-5 rounded-[2rem] px-4 py-4 text-left transition duration-200 group-hover:scale-[1.01] group-hover:bg-white/70 group-hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:flex-row md:items-center md:gap-6">
              <div className="flex w-full items-center gap-4 md:w-auto md:min-w-[140px]">
                <div className="relative h-[110px] w-[120px] overflow-hidden rounded-2xl border border-violet-200/60 bg-gradient-to-br from-violet-100/80 to-indigo-100/50 shadow-[0_20px_60px_rgba(99,102,241,0.25)]">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover object-center" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-violet-400">
                      <ImageIcon className="h-8 w-8" />
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/40" />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500">
                  {project.period} · {project.teamInfo}
                </p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3 text-[clamp(1.3rem,2.1vw,1.65rem)] font-semibold text-slate-900">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/70 text-indigo-100 shadow-[0_15px_35px_rgba(15,23,42,0.45)]">
                      {(() => {
                        const IconGlyph = projectIconMap[project.id];
                        return IconGlyph ? <IconGlyph className="h-5 w-5" /> : null;
                      })()}
                    </span>
                    <span>{project.title}</span>
                  </div>
                  <p className="text-base text-slate-600">{project.subtitle}</p>
                </div>
                <p className="text-sm font-medium text-slate-700">{project.highlight}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={`${project.id}-${tag}`} className={`${pillClass} text-xs text-slate-600`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-0 pb-8 pt-2">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <SectionLabel icon={sectionIconMap.problem} label="PROBLEM" />
                  <ul className="space-y-1.5 text-[0.98rem] leading-relaxed text-slate-700">
                    {project.problem.map((item) => (
                      <li key={`${project.id}-problem-${item}`} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <SectionLabel icon={sectionIconMap.approach} label="APPROACH" />
                  <ul className="space-y-1.5 text-[0.98rem] leading-relaxed text-slate-700">
                    {project.approach.map((item) => (
                      <li key={`${project.id}-approach-${item}`} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <SectionLabel icon={sectionIconMap.impact} label="IMPACT" />
                  <ul className="space-y-1.5 text-[0.98rem] leading-relaxed text-slate-700">
                    {project.impact.map((item) => (
                      <li key={`${project.id}-impact-${item}`} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <SectionLabel icon={sectionIconMap.role} label="ROLE" />
                  <ul className="space-y-1.5 text-[0.98rem] leading-relaxed text-slate-700">
                    {project.role.map((item) => (
                      <li key={`${project.id}-role-${item}`} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <SectionLabel icon={sectionIconMap.tech} label="TECH" />
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={`${project.id}-tech-${tech}`}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <SectionLabel icon={FileText} label="DELIVERABLES" />
                  <div className="space-y-3">
                    {project.deliverables.map((deliverable) => {
                      const Icon = deliverableIcons[deliverable.type] ?? FileText;
                      return (
                        <div
                          key={deliverable.id}
                          className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-sm text-slate-700 md:flex-row md:items-center"
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
                          <div className="flex items-center justify-end gap-3">
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-600">
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
                              <span className="rounded-full border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-400">준비 중</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ProjectAccordion;
