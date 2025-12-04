import React from "react";
import SectionWrapper from "./SectionWrapper";
import { copy } from "../copy";

const badgeClassMap: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/40",
  sky: "bg-sky-500/10 text-sky-300 border-sky-500/40",
  slate: "bg-slate-500/10 text-slate-200 border-slate-500/40",
};

type ExperienceGroupProps = {
  heading: string;
  children: React.ReactNode;
};

const ExperienceGroup: React.FC<ExperienceGroupProps> = ({ heading, children }) => (
  <section className="space-y-4">
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
      {heading}
    </p>
    {children}
  </section>
);

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
    <SectionWrapper
      id="experience"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-8 text-sm text-slate-300">
          <ExperienceGroup heading={experience.heading}>
            {experience.items.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  {item.eyebrow}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.body}</p>
              </article>
            ))}
          </ExperienceGroup>

          <ExperienceGroup heading={education.heading}>
            {education.items.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  {item.eyebrow}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.body}</p>
              </article>
            ))}
          </ExperienceGroup>

          <ExperienceGroup heading={awards.heading}>
            <ul className="space-y-2 rounded-3xl border border-white/10 bg-white/[0.015] p-5 text-sm text-slate-300">
              {awards.items.map((award) => (
                <li key={award} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                  {award}
                </li>
              ))}
            </ul>
          </ExperienceGroup>
        </div>

        <div className="space-y-8 text-sm text-slate-300">
          <ExperienceGroup heading={certifications.heading}>
            <div className="grid gap-4">
              {certifications.items.map((cert) => (
                <article
                  key={cert.name}
                  className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
                >
                  <div>
                    <p className="text-base font-semibold text-white">{cert.name}</p>
                    <p className="text-xs text-slate-400">{cert.detail}</p>
                  </div>
                  {cert.badge && (
                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${badgeClassMap[cert.accent ?? "emerald"] ?? "border-slate-600 text-slate-300"}`}
                    >
                      {cert.badge}
                    </span>
                  )}
                </article>
              ))}
            </div>
          </ExperienceGroup>

          <ExperienceGroup heading={additionalQualifications.heading}>
            <ul className="space-y-2 rounded-3xl border border-white/10 bg-white/[0.015] p-5 text-sm text-slate-200">
              {additionalQualifications.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                  {item}
                </li>
              ))}
            </ul>
          </ExperienceGroup>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;

