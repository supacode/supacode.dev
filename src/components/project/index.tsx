import React from 'react';

import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { externalLink, github as githubIcon } from '../../assets/icons';

import './project.scss';

export interface IProject {
  title: string;
  link: string;
  tools: string[];
  company: string;
  html?: string;
  github: string;
  image?: IGatsbyImageData;
}

export const Project: React.FC<IProject> = ({
  title,
  link,
  html,
  image,
  github,
  tools,
}) => {
  return (
    <div className="project">
      <div className="project__content">
        {title && <h2 className="project__title">{title}</h2>}

        {html && (
          <div
            className="project__desc"
            dangerouslySetInnerHTML={{ __html: html }}
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
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              title="View Source"
            >
              {githubIcon}
            </a>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label="Open link in new tab"
              title="Open Project"
            >
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
              <GatsbyImage image={image} alt={title} title={title} />
            </a>
          ) : (
            <GatsbyImage image={image} alt={title} title={title} />
          )}
        </div>
      )}
    </div>
  );
};
