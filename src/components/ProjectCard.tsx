import React from "react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="relative h-full">
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-violet-500/40 via-indigo-500/30 to-sky-500/30 blur-xl opacity-60" />
      <div className="relative flex h-full flex-col gap-4 rounded-3xl surface-glass p-5 shadow-brand-glow transition hover:translate-y-px hover:shadow-2xl sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-medium uppercase tracking-wide text-violet-200">
            {project.category}
          </span>
          <span className="text-[11px] text-slate-400">{project.period}</span>
        </div>

        <div className="space-y-1">
          <h3 className="text-base font-semibold leading-snug text-slate-50 sm:text-lg">
            {project.titleKo}
          </h3>
          <p className="text-[11px] text-slate-400 sm:text-xs">{project.titleEn}</p>
        </div>

        <p className="text-xs leading-relaxed text-slate-300 sm:text-sm line-clamp-4">
          {project.summaryKo}
        </p>

        <div className="mt-1 space-y-1.5 text-[11px] text-slate-400">
          <p>
            <span className="font-medium text-slate-300">역할 Role. </span>
            {project.role}
          </p>
          <p>
            <span className="font-medium text-slate-300">Tech. </span>
            {project.techStack}
          </p>
        </div>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1 text-[10px] text-slate-200 sm:text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

