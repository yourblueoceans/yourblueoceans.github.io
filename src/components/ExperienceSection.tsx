import React from "react";
import SectionWrapper from "./SectionWrapper";
import { copy } from "../copy";

const badgeClassMap: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/40",
  sky: "bg-sky-500/10 text-sky-300 border-sky-500/40",
  slate: "bg-slate-500/10 text-slate-200 border-slate-500/40",
};

const ExperienceSection: React.FC = () => {
  const {
    eyebrow,
    title,
    subtitle,
    experience,
    education,
    awards,
    certifications,
    additionalQualifications,
  } = copy.experience;

  return (
    <SectionWrapper id="experience" eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
              {experience.heading}
            </h3>
            <div className="mt-3 space-y-3">
              {experience.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-3"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-violet-300">
                    {item.eyebrow}
                  </p>
                  <p className="text-sm font-semibold text-slate-50">{item.title}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
              {education.heading}
            </h3>
            <div className="mt-3 space-y-3">
              {education.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-3"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-violet-300">
                    {item.eyebrow}
                  </p>
                  <p className="text-sm font-semibold text-slate-50">{item.title}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
              {awards.heading}
            </h3>
            <ul className="mt-3 space-y-1.5 text-[11px] text-slate-400">
              {awards.items.map((award) => (
                <li key={award}>· {award}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
              {certifications.heading}
            </h3>
            <div className="mt-3 grid gap-3">
              {certifications.items.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-50">{cert.name}</p>
                    <p className="text-[11px] text-slate-400">{cert.detail}</p>
                  </div>
                  {cert.badge && (
                    <span
                      className={`text-[11px] rounded-full border px-2 py-1 ${badgeClassMap[cert.accent ?? "emerald"] ?? "border-slate-600 text-slate-300"}`}
                    >
                      {cert.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
              {additionalQualifications.heading}
            </h3>
            <ul className="mt-3 space-y-1.5 text-[11px] text-slate-400">
              {additionalQualifications.items.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;

