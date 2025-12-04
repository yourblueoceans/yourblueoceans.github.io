import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";
import { copy } from "../copy";

const ProjectsSection: React.FC = () => {
  const projectsCopy = copy.projects;

  return (
    <SectionWrapper
      id="projects"
      eyebrow={projectsCopy.eyebrow}
      title={projectsCopy.title}
      subtitle={projectsCopy.subtitle}
    >
      <div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

