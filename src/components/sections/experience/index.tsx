import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Accordion } from '../../accordion';
import './experience.scss';

export interface ExperienceProps {}

export interface Experience {
  title: string;
  duration: string;
  company: string;
  description: string;
}

export const Experience: React.FC<ExperienceProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              duration
              url
            }
            html
          }
        }
      }
    }
  `);

  const experiences = data.jobs.edges;

  return (
    <div id="experience" className="experience">
      <h2 className="experience__title">Experience</h2>

      {experiences.map(({ node }) => {
        const ex = node.frontmatter as Experience;
        return (
          <div className="experience__content" key={ex.duration}>
            <Accordion
              key={ex.title}
              title={ex.title}
              company={ex.company}
              duration={ex.duration}
            >
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};
