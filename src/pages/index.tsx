import React from 'react';

import { Layout } from '../layouts/main';
import { Seo } from '../components/seo';
import { Hero } from '../components/sections/hero';
import { About } from '../components/sections/about';
import { Experience } from '../components/sections/experience';

const IndexPage: React.FC = () => {
  return (
    <>
      <Seo title="Home" />

      <Layout>
        <Hero />
        <About />
        <Experience />
      </Layout>
    </>
  );
};

export default IndexPage;
