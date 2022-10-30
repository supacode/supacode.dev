import { ProjectCard } from 'modules/project/ProjectCard';
import type { Project } from 'modules/project/types';

type ProjectSectionProps = {
  projects: Project[];
};

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  projects,
  //
}) => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects I&apos;ve Worked on</h2>

      {projects?.length > 0 ? (
        <>
          {projects.map((project) => (
            <ProjectCard
              key={project.link}
              link={project.link}
              index={project.index}
              html={project.html}
              company={project.company}
              image={project.image}
              github={project.github}
              title={project.title}
              tools={project.tools}
            />
          ))}
        </>
      ) : (
        <p>No projects</p>
      )}
    </section>
  );
};
