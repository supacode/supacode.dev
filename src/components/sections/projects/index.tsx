import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Project, IProject } from '../../project';

interface ProjectsQuery {
  projects: {
    edges: {
      node: {
        frontmatter: IProject;
        html: string;
      };
    }[];
  };
}

export const Projects: React.FC = () => {
  const data = useStaticQuery<ProjectsQuery>(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: [frontmatter___index], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              link
              tools
              company
              github
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  const projects = data.projects.edges;

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects I&apos;ve Worked on</h2>

      {projects.map(({ node }) => {
        const project = { ...node.frontmatter };

        const image = project.image && getImage(project.image);

        return (
          <Project
            key={project.link}
            link={project.link}
            html={node.html}
            company={project.company}
            image={image}
            github={project.github}
            title={project.title}
            tools={project.tools}
          />
        );
      })}
    </section>
  );
};
