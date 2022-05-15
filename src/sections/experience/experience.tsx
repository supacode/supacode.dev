import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import type { Experience as ExperienceType } from '../../types';
import { Accordion } from '../../components/accordion';

export type ExperienceQuery = {
  experience: {
    edges: {
      node: {
        frontmatter: ExperienceType;
        html: string;
      };
    }[];
  };
};

export const Experience: React.FC = () => {
  const data = useStaticQuery<ExperienceQuery>(graphql`
    query {
      experience: allMarkdownRemark(
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

  const experiences = data.experience.edges;

  return (
    <section>
      <h2 className="section__title" id="experience">
        Experience
      </h2>

      {experiences.map(({ node }, index) => {
        const experience = node.frontmatter;

        return (
          <div key={experience.duration}>
            <Accordion
              key={experience.title}
              title={experience.title}
              index={index + 1}
              company={experience.company}
              duration={experience.duration}
            >
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </Accordion>
          </div>
        );
      })}
    </section>
  );
};
