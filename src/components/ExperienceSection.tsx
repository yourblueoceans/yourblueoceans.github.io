import React from "react";
import { motion } from "framer-motion";
import { bodyText, heading2, innerClass, overline, sectionClass, sectionMotion } from "../ui/tokens";
import { experiences } from "@/data/experience";
import { Briefcase, Activity } from "lucide-react";

const ExperienceSection: React.FC = () => {
  return (
    <motion.section id="experience" className={`${sectionClass} bg-white`} {...sectionMotion}>
      <div className={`${innerClass} space-y-10`}>
        <header className="max-w-[820px] space-y-4">
          <p className={overline}>EXPERIENCE</p>
          <h2 className={`${heading2} text-[clamp(2rem,3.2vw,2.6rem)] font-extrabold tracking-tight`}>경험과 학습 경로</h2>
          <p className={`${bodyText} max-w-[720px] text-base leading-relaxed text-slate-700 md:text-[1.05rem]`}>
            이력서에 있는 실제 근무/활동 이력을 날짜 그대로 정리했습니다. 한눈에 기간과 역할을 확인할 수 있도록 수직 타임라인으로 구성했습니다.
          </p>
        </header>

        <section className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200" />
          <ul className="space-y-8">
            {experiences.map((item) => {
              const Icon = item.type === "work" ? Briefcase : Activity;
              return (
                <li key={item.id} className="relative pl-12">
                  <span className="absolute left-3 top-2 h-3 w-3 rounded-full bg-violet-500 shadow-md" />
                  <div className="rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/70 p-5">
                    <div className="text-xs font-medium text-slate-500">{item.period}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-indigo-500" />
                      <h3 className="text-base md:text-lg font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    {item.subtitle && <p className="text-sm text-slate-500">{item.subtitle}</p>}
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.slice(0, 4).map((tag) => (
                          <span key={`${item.id}-${tag}`} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.75rem] font-semibold text-slate-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;

