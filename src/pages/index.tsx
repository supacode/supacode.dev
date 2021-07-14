import React from 'react';

import { Layout } from '../layouts/main';
import { Seo } from '../components/seo';
import { Hero } from '../components/sections/hero';
import { About } from '../components/sections/about';

const IndexPage: React.FC = () => (
  <>
    <Seo title="Home" />

    <Layout>
      <Hero />
      <About />
    </Layout>
  </>
);

export default IndexPage;
