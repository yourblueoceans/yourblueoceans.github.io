import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Lock, Network, Shield } from "lucide-react";
import { PROJECTS } from "../copy/projects";
import { bodyText, cardClass, heading2, innerClass, overline, pillClass, sectionClass, sectionMotion } from "../ui/tokens";

const projectIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  securedoc: Lock,
  droptheport: Network,
  webvapt: Shield,
};

type ProjectAccordionProps = {
  project: (typeof PROJECTS)[number];
  isOpen: boolean;
  onToggle: (id: string) => void;
};

const ProjectAccordion: React.FC<ProjectAccordionProps> = ({ project, isOpen, onToggle }) => {
  const Icon = projectIcons[project.id] ?? ClipboardList;
  const contentId = `case-study-${project.id}-content`;

  return (
    <article id={`case-study-${project.id}`} className={`${cardClass} overflow-hidden p-0`}>
      <button
        type="button"
        className="flex w-full flex-col gap-4 px-6 py-6 text-left transition hover:bg-white/60 sm:flex-row sm:items-center"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => onToggle(project.id)}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <p className="text-sm font-semibold text-indigo-600">
              {project.period} · {project.team}
            </p>
            <h3 className="text-[clamp(1.35rem,2.2vw,1.65rem)] font-semibold text-[var(--color-text-strong)]">{project.title}</h3>
            <p className="text-base text-slate-600">{project.subtitle}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:ml-auto sm:justify-end">
          {project.focus.map((keyword) => (
            <span key={keyword} className={`${pillClass} text-[0.72rem] tracking-[0.12em] text-slate-500 normal-case`}>
              {keyword}
            </span>
          ))}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            key={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-t border-slate-100 bg-white/85 px-6 py-6 text-[1.02rem] leading-relaxed text-slate-700"
          >
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Problem</p>
                <p className="mt-2 max-w-[760px]">{project.story.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Approach</p>
                <p className="mt-2 max-w-[760px]">{project.story.approach}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Impact</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  {project.story.impact.map((impact) => (
                    <li key={impact} className="max-w-[760px]">
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Role</p>
                  <p className="mt-2">{project.story.role}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Tech</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.story.tech.map((tech) => (
                      <span key={tech} className={`${pillClass} text-[0.75rem] tracking-[0.1em] text-slate-600 normal-case`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

const CaseStudiesSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.section id="case-studies" className={`${sectionClass} bg-white`} {...sectionMotion}>
      <div className={`${innerClass} flex flex-col gap-10`}>
        <div className="max-w-[820px] space-y-4">
          <p className={overline}>CASE STUDIES</p>
          <h2 className={`${heading2} text-[clamp(2rem,3.2vw,2.6rem)] font-extrabold tracking-tight`}>
            {"Lockument · Drop\u00A0the\u00A0Port · Web\u00A0VAPT Lab"}
          </h2>
          <p className={`${bodyText} max-w-[760px] text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            스토리 중심 Case Study에서만 Problem → Approach → Impact → Role → Tech를 깊게 다루고, 다른 섹션에서는 요약·다운로드·역할 연결만 제공합니다. 필요한 카드만
            펼쳐보며 살펴보세요.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {PROJECTS.map((project) => (
            <ProjectAccordion key={project.id} project={project} isOpen={openId === project.id} onToggle={toggle} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudiesSection;

