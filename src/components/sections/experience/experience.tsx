import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Accordion } from '../../accordion';

type Experience = {
  title: string;
  duration: string;
  company: string;
  description: string;
};
export type ExperienceQuery = {
  experience: {
    edges: {
      node: {
        frontmatter: Experience;
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
        const ex = node.frontmatter;

        return (
          <div key={ex.duration}>
            <Accordion
              key={ex.title}
              title={ex.title}
              index={index + 1}
              company={ex.company}
              duration={ex.duration}
            >
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </Accordion>
          </div>
        );
      })}
    </section>
  );
};
