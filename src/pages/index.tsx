import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout } from '../layouts/main';
import { Hero } from '../components/sections/hero';
import { About } from '../components/sections/about';
import { Experience } from '../components/sections/experience';
import { Project } from '../components/sections/projects';
import { SEO } from '../components/seo';
import { BlogSection } from '../components/sections/blog';

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
