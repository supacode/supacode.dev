import React from 'react';

import { Layout } from '../layouts/main';
import { Hero } from '../components/sections/hero';
import { About } from '../components/sections/about';
import { Experience } from '../components/sections/experience';
import { Project } from '../components/sections/projects';
import { SEO } from '../components/seo';
import { BlogSection } from '../components/sections/blog';

export const IndexPage: React.FC = () => {
  return (
    <>
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
