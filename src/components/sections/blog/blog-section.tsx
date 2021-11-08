import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { BlogCard, Blog } from '../../blogcard';
import { AppLink } from '../../AppLink';
import { chevronRight } from '../../../assets/icons';
import { blogRoutes } from '../../../constants/path';
import { useScrollReveal } from '../../../hooks';
import './blog-section.scss';

type BlogQuery = {
  blog: {
    edges: {
      node: {
        fields: {
          slug: string;
        };
        frontmatter: Blog;
      };
    }[];
  };
};

export const BlogSection: React.FC = () => {
  useScrollReveal({ selector: '.blog-section__read-more-cta' });

  const data = useStaticQuery<BlogQuery>(graphql`
    {
      blog: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/blog/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: [frontmatter___index], order: DESC }
        limit: 5
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

      <div className="blog-section__featured">
        {blogPosts.map((item, index) => {
          const blog = item.node.frontmatter;

          const image = blog.featuredImage && getImage(blog.featuredImage);

          const date = new Date(blog.date);

          const slug = item.node.fields.slug;

          return (
            <BlogCard
              title={blog.title}
              slug={slug}
              key={index}
              featuredImage={image}
              date={date}
              layout={'stacked'}
            />
          );
        })}
      </div>

      {blogRoutes.url && (
        <div className="blog-section__read-more-cta">
          <AppLink
            icon={chevronRight}
            text="Read More"
            title="Read More"
            href={blogRoutes.url}
          />
        </div>
      )}
    </section>
  );
};
