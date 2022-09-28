import type { NextPage } from 'next';
import Head from 'next/head';

import { AboutSection } from '../components/AboutSection';
import { Experience } from '../components/Experience';
import { HeroSection } from '../components/HeroSection';
import { SiteFooter } from '../components/SiteFooter';
import { Project } from '../modules/project/ProjectSection';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Supacode.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <AboutSection />
      <Experience />
      <Project />
      <SiteFooter />
    </div>
  );
};

export default Home;
