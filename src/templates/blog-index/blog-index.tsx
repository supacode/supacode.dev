import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BlogCard, Blog } from '../../components/blogcard';
import { SEO } from '../../components/seo/seo';
import { Pagination } from '../../components/pagination/Pagination';
import { Layout } from '../../layouts/main';
import { useWindowSize } from '../../hooks';
import './blog-index.scss';
import '../../components/blogcard/blog-card.scss';
import { viewports } from '../../constants/config';

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

type PageContext = {
  limit: number;
  skip: number;
  numOfPages: number;
  currentPage: number;
};

type BlogPageProps = {
  data: BlogQuery;
  pageContext: PageContext;
};

const BlogPage: React.FC<BlogPageProps> = ({ pageContext, data }) => {
  const posts = data.blog.edges;
  const { numOfPages, currentPage } = pageContext;
  const prevPage = currentPage - 1 === 1 ? '' : currentPage - 1;
  const nextPage = currentPage + 1;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numOfPages;
  const { width: deviceWidth } = useWindowSize();
  const isSmallDevice = deviceWidth < viewports.screenLgMin;

  return (
    <>
      <SEO
        title={
          isFirstPage ? 'Blog' : `Blog - Page ${currentPage} of ${numOfPages}`
        }
      />
      <Layout>
        <div className="blog-page" id="content">
          {posts.length > 0 &&
            posts.map((post) => {
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
                  layout={'inline'}
                  excerpt={except}
                />
              );
            })}

          {numOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              nextPage={nextPage}
              numOfPages={numOfPages}
              prevPage={prevPage}
              isFirstPage={isFirstPage}
              isLastPage={isLastPage}
            />
          )}
        </div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
