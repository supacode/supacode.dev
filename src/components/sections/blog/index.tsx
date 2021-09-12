import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { BlogCard, IBlog } from '../../blogcard';
import './blog-section.scss';

export interface BlogProps {}

interface BlogQuery {
  blog: {
    edges: {
      node: {
        frontmatter: IBlog;
      };
    }[];
  };
}

export const Blog: React.FC<BlogProps> = () => {
  const data = useStaticQuery<BlogQuery>(graphql`
    query {
      blog: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___index], order: DESC }
        limit: 5
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section className="section blog-section" id="blog">
      <h2 className="section__title">Blog</h2>

      <div className="blog__featured">
        {data.blog.edges.map((item) => {
          const blog = item.node.frontmatter;

          const image = blog.featuredImage && getImage(blog.featuredImage);

          const date = new Date(Date.parse(`${blog.date}`));

          return (
            <BlogCard
              title={blog.title}
              slug={blog.slug}
              key={blog.slug}
              featuredImage={image}
              date={date}
            />
          );
        })}
      </div>
    </section>
  );
};
