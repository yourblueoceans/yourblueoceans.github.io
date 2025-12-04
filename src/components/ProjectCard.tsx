import React from "react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6 text-slate-200 shadow-[0_18px_50px_rgba(2,6,23,0.35)] transition duration-300 hover:-translate-y-1 hover:border-slate-500/60 hover:bg-slate-900 sm:p-7">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
        <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[11px] font-medium">
          {project.category}
        </span>
        <span>{project.period}</span>
      </div>

      <div className="mt-5 space-y-1.5">
        <h3 className="text-xl font-semibold text-white">{project.titleKo}</h3>
        <p className="text-sm text-slate-400">{project.titleEn}</p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-300 line-clamp-4">
        {project.summaryKo}
      </p>

      <dl className="mt-4 space-y-3 text-sm text-slate-300">
        <div>
          <dt className="text-xs uppercase tracking-[0.3em] text-slate-500">Role</dt>
          <dd className="mt-1 font-medium text-white">{project.role}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.3em] text-slate-500">Tech Stack</dt>
          <dd className="mt-1 font-medium text-white">{project.techStack}</dd>
        </div>
      </dl>

      <div className="mt-4 text-xs text-slate-400">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Tags</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[12px] text-slate-200"
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

