import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../copy/projects";
import { bodyText, cardClass, heading2, innerClass, overline, pillClass, sectionClass, sectionMotion } from "../ui/tokens";

const CaseStudiesSection: React.FC = () => (
  <motion.section id="case-studies" className={sectionClass} {...sectionMotion}>
    <div className={`${innerClass} flex flex-col gap-10`}>
      <div className="max-w-[780px] space-y-4">
        <p className={overline}>CASE STUDIES</p>
        <h2 className={`${heading2} text-[clamp(1.9rem,3vw,2.3rem)] font-extrabold tracking-tight`}>
          {"Lockument · Drop\u00A0the\u00A0Port · Web\u00A0VAPT Lab"}
        </h2>
        <p className={`${bodyText} max-w-[720px] text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
          대표 프로젝트 세 건을 동일한 데이터 소스로 관리해 문제·접근·영향·역할을 일관되게 정리했습니다. 각 카드에서는 스토리만 다루고,
          산출물은 Media &amp; Deliverables 섹션에서 확인할 수 있습니다.
        </p>
      </div>

      <div className="flex flex-col gap-10 lg:gap-12">
        {PROJECTS.map((project) => (
          <article key={project.id} className={`${cardClass} flex flex-col gap-6`}>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-indigo-600">
                {project.period} · {project.team}
              </p>
              <h3 className="text-[clamp(1.4rem,2.2vw,1.55rem)] font-semibold text-[var(--color-text-strong)]">{project.title}</h3>
              <p className="text-lg font-medium text-slate-600">{project.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.focus.map((keyword) => (
                <span key={keyword} className={`${pillClass} text-[0.7rem] tracking-[0.2em] text-slate-500 normal-case`}>
                  {keyword}
                </span>
              ))}
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Problem</p>
                <p className="mt-2 max-w-[720px] text-[1.02rem] leading-relaxed text-slate-700">{project.story.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Approach</p>
                <p className="mt-2 max-w-[720px] text-[1.02rem] leading-relaxed text-slate-700">{project.story.approach}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Impact</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[1.02rem] leading-relaxed text-slate-700">
                  {project.story.impact.map((impact) => (
                    <li key={impact} className="max-w-[720px]">
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 text-[1.02rem] leading-relaxed text-slate-700 md:grid-cols-2">
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

            <p className="text-sm font-medium text-slate-500">상세 산출물은 Media &amp; Deliverables 섹션에서 확인하실 수 있습니다.</p>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
);

export default CaseStudiesSection;

