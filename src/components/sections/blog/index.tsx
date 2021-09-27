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
        fields: {
          slug: string;
        };
        frontmatter: IBlog;
      };
    }[];
  };
}

export const Blog: React.FC<BlogProps> = () => {
  const data = useStaticQuery<BlogQuery>(graphql`
    {
      blog: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___index], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
              featuredImage {
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

  const blogPosts = data.blog.edges;

  return (
    <section className="section blog-section" id="blog">
      <h2 className="section__title">Blog</h2>

      <div className="blog__featured">
        {blogPosts.map((item, index) => {
          const blog = item.node.frontmatter;

          const image = blog.featuredImage && getImage(blog.featuredImage);

          const date = new Date(Date.parse(`${blog.date}`));

          const slug = item.node.fields.slug;

          return (
            <BlogCard
              title={blog.title}
              slug={slug}
              key={index}
              featuredImage={image}
              date={date}
            />
          );
        })}
      </div>
    </section>
  );
};
