import React from 'react';

import { Layout } from '../layouts/main';
import { Seo } from '../components/seo';
import { Hero } from '../components/sections/hero';
import { About } from '../components/sections/about';
import { Experience } from '../components/sections/experience';
import { Projects } from '../components/sections/projects';

const IndexPage: React.FC = () => {
  return (
    <>
      <Seo title="Home" />

      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </Layout>
    </>
  );
};

export default IndexPage;
