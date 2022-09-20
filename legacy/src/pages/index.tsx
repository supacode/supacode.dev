import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout } from '../layouts/main';
import { Hero } from '../sections/hero';
import { About } from '../sections/about';
import { Experience } from '../sections/experience';
import { Project } from '../sections/projects';
import { BlogSection } from '../sections/blog';
import { SEO } from '../components/seo';

export const IndexPage: React.FC = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
            themeColor
          }
        }
      }
    `,
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{`{
              "@context":"http://schema.org",
              "@type":"WebSite",
              "url":"${site.siteMetadata.siteUrl}",
              "name":"${site.siteMetadata.defaultDescription}"
        }`}</script>
      </Helmet>
      <SEO title="Software Developer" />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Project />
        <BlogSection />
      </Layout>
    </>
  );
};

export default IndexPage;
