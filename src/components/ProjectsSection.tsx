import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";
import { copy } from "../copy";

const ProjectsSection: React.FC = () => {
  const projectsCopy = copy.projects;
  const focusTags = [
    "Application Security",
    "Web VAPT",
    "Network & Infra",
    "Consulting Workflow",
  ];

  return (
    <SectionWrapper
      id="projects"
      eyebrow={projectsCopy.eyebrow}
      title={projectsCopy.title}
      subtitle={projectsCopy.subtitle}
      contentClassName="gap-6"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
        {focusTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/15 px-4 py-1.5 text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

