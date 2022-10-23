import type { NextPage } from 'next';
import Head from 'next/head';

import { AboutSection } from '../components/AboutSection';
import { Experience } from '../components/Experience';
import { HeroSection } from '../components/HeroSection';
import { SiteFooter } from '../components/SiteFooter';
import { getAllPosts } from '../lib/api';
import { BlogSection } from '../modules/blog/BlogSection';
import { Blog } from '../modules/blog/types';

type HomeProps = {
  allPosts: Blog[];
};

const Home: NextPage<HomeProps> = ({ allPosts }) => {
  return (
    <div>
      <Head>
        <title>Supacode.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <AboutSection />
      <Experience />
      <BlogSection posts={allPosts} />
      <SiteFooter />
    </div>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: {
      allPosts,
    },
  };
};

export default Home;
