import { ProjectCard } from '../ProjectCard';
import type { Project as ProjectType } from '../types';
import SupacodeDotDevImage from '../../../legacy/content/projects/Supacode/Supacode.png';
import FFplacesImage from '../../../legacy/content/projects/55Places/55places.png';
import OarbtImage from '../../../legacy/content/projects/Oarbt/Oarbt.png';

const projects: ProjectType[] = [
  {
    title: 'Supacode.dev',
    tools: ['React', 'Next.js', 'TypeScript'],
    image: SupacodeDotDevImage,
    github: 'https://github.com/supacode/supacode.dev',
  },
  {
    title: '55places.com (US. Only)',
    tools: ['React', 'Redux', 'SCSS', 'TypeScript'],
    image: FFplacesImage,
    html: `Only available in the US.`,
    link: 'https://www.55places.com/',
  },
  {
    title: 'Oarbt',
    tools: ['React', 'Redux', 'Styled Components', 'Material UI'],
    link: 'https://www.oarbt.com/',
    image: OarbtImage,
  },
];

export const Project: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <>
        <h2 className="section__title">Projects I&apos;ve Worked on</h2>

        {projects.map((proj) => (
          <ProjectCard
            key={proj.title}
            image={proj.image}
            title={proj.title}
            link={proj.link}
            company={proj.company}
            github={proj.github}
            html={proj.html}
            tools={proj.tools}
          />
        ))}
      </>
    </section>
  );
};
