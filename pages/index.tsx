import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from '../components/about';
import { Experience } from '../components/experience';
import { Hero } from '../components/hero';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Supacode.dev</title>
      </Head>

      <Hero />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
