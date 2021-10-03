import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BlogCard, Blog, BlogCardLayout } from '../components/blogcard';
import { SEO } from '../components/seo/seo';
import { Layout } from '../layouts/main';
import './blog.scss';
import '../components/blogcard/blog-card.scss';

type BlogPageProps = {
  data: BlogQuery;
};

type BlogQuery = {
  blog: {
    edges: {
      node: {
        fields: {
          slug: string;
        };
        excerpt: string;
        frontmatter: Blog;
      };
    }[];
  };
};

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const posts = data.blog.edges;

  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <div className="blog-page" id="content">
          {posts.map((post) => {
            const postDate = new Date(post.node.frontmatter.date);
            const postTitle = post.node.frontmatter.title;
            const postSlug = post.node.fields.slug;
            const featuredImage = post.node.frontmatter.featuredImage;
            const except = post.node.excerpt;

            return (
              <BlogCard
                key={postSlug}
                title={postTitle}
                slug={postSlug}
                date={postDate}
                featuredImage={featuredImage && getImage(featuredImage)}
                layout={BlogCardLayout.inline}
                excerpt={except}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
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
          excerpt
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
`;

export default BlogPage;
