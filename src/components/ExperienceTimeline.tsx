import React from "react";
import { Briefcase, GraduationCap, Store, FolderLock } from "lucide-react";
import { experienceTimeline, type ExperienceItem } from "@/data/experience";

const typeIconMap: Record<ExperienceItem["type"], { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; className: string }> = {
  project: { icon: FolderLock, className: "bg-violet-500/20 text-violet-200" },
  education: { icon: GraduationCap, className: "bg-sky-500/20 text-sky-200" },
  work: { icon: Briefcase, className: "bg-slate-500/20 text-slate-200" },
  business: { icon: Store, className: "bg-emerald-500/20 text-emerald-200" },
};

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative overflow-x-auto pb-10">
      <div className="pointer-events-none absolute left-8 right-0 top-16 h-px bg-gradient-to-r from-violet-500/60 via-slate-400/30 to-transparent" />
      <div className="relative flex min-w-[820px] gap-6 pl-2 pr-6">
        {experienceTimeline.map((item) => {
          const meta = typeIconMap[item.type];
          const Icon = meta.icon;
          return (
            <article
              key={item.id}
              className="relative flex min-w-[280px] max-w-[320px] flex-col rounded-3xl border border-white/15 bg-slate-950/70 p-6 text-slate-100 shadow-[0_45px_90px_rgba(2,6,23,0.5)] backdrop-blur-2xl"
            >
              <div className="absolute left-1/2 top-[58px] -translate-x-1/2">
                <span className="block h-3 w-3 rounded-full bg-gradient-to-r from-violet-400 to-sky-400 shadow-[0_0_0_6px_rgba(99,102,241,0.25)]" />
              </div>
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${meta.className}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-300">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              {item.subtitle && <p className="text-sm text-slate-300">{item.subtitle}</p>}
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={`${item.id}-${tag}`}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
