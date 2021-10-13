import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { SEO } from '../../components/seo';
import { Layout } from '../../layouts/main';
import type { Blog } from '../../components/blogcard';

import './article-template.scss';

type ArticleTemplate = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: Blog;
    };
  };
};

const ArticleTemplate: React.FC<ArticleTemplate> = ({ data }) => {
  const article = data.markdownRemark;

  const featuredImage =
    article.frontmatter.featuredImage &&
    getImage(article.frontmatter.featuredImage);

  const articleTitle = article.frontmatter.title;

  return (
    <>
      <SEO title={articleTitle} />

      <Layout>
        <article
          className="article"
          itemScope
          itemType="http://schema.org/Article"
          id="content"
        >
          <header className="article__header">
            <div>
              <h1 itemProp="headline" className="article__title">
                {article.frontmatter.title}
              </h1>
              <p className="article__date">{article.frontmatter.date}</p>
            </div>

            {featuredImage && (
              <div className="article__featured-img">
                <GatsbyImage
                  image={featuredImage}
                  alt={articleTitle}
                  title={articleTitle}
                />
              </div>
            )}
          </header>
          <section
            className="article__content"
            dangerouslySetInnerHTML={{ __html: article.html }}
            itemProp="articleBody"
          />
        </article>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
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
    }
  }
`;

export default ArticleTemplate;
