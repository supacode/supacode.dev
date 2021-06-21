import React from 'react';

import { Layout } from '../layouts/main';
import { Seo } from '../components/seo';
import { Hero } from '../components/hero';

const IndexPage: React.FC = () => (
  <>
    <Seo title="Home" />

    <Layout>
      <Hero />
    </Layout>
  </>
);

export default IndexPage;
