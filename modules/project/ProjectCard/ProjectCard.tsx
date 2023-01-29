import Image from 'next/image';

import type { Project } from 'modules/project/types';
import { externalLink, github as githubIcon } from 'assets/icons';

export const ProjectCard: React.FC<Project> = ({
  title,
  tools,
  github,
  html,
  image,
  link,
}) => (
  <div className="project">
    <div className="project__content">
      <h2 className="project__title">{title}</h2>

      {html && (
        <div
          className="project__desc"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      )}

      {tools && tools.length > 0 && (
        <ul className="project__tools">
          {tools.map((tool) => (
            <li key={tool}>
              <span>&bull;</span>
              {tool}
            </li>
          ))}
        </ul>
      )}

      <div className="project__links">
        {github && (
          <a href={github} title="View Source">
            {githubIcon}
          </a>
        )}

        {link && (
          <a href={link} aria-label="Open link in new tab" title="Open Project">
            {externalLink}
          </a>
        )}
      </div>
    </div>

    {image && (
      <div className="project__img">
        {link ? (
          <a
            href={link}
            target="_blank"
            aria-label="Open link in new tab"
            rel="noreferrer"
            title={title}
          >
            <Image src={image} alt={title} title={title} />
          </a>
        ) : (
          <Image src={image} alt={title} title={title} />
        )}
      </div>
    )}
  </div>
);
