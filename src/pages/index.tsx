import React from 'react';

import { Layout } from '../layouts/main';
import { Hero } from '../components/sections/hero';
import { About } from '../components/sections/about';
import { Experience } from '../components/sections/experience';
import { Projects } from '../components/sections/projects';
import { SEO } from '../components/seo/seo';
import { Blog } from '../components/sections/blog';

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blog />
      </Layout>
    </>
  );
};

export default IndexPage;
