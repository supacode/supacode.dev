import type { NextPage } from 'next';
import Head from 'next/head';

import { siteData } from 'consts';
import { AboutSection } from 'modules/AboutSection';
import type { Experience } from 'modules/experience/types';
import { ExperienceSection } from 'modules/experience/ExperienceSection';
import { HeroSection } from 'modules/HeroSection';
import { getAllPosts } from 'modules/blog/api/getAllPosts';
import { BlogSection } from 'modules/blog/BlogSection';
import type { Blog } from 'modules/blog/types';
import { getAllExperiences } from 'modules/experience/api/getAllExperiences';

type HomeProps = {
  allPosts: Blog[];
  allExperiences: Experience[];
};

const Home: NextPage<HomeProps> = ({ allPosts, allExperiences }) => {
  const pageTitle = siteData.title;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={siteData.description} />

        <meta property="og:image" content="assets/images/og.png" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={siteData.description} />
      </Head>

      <HeroSection />
      <AboutSection />
      <ExperienceSection experiences={allExperiences} />
      <BlogSection posts={allPosts} />
    </>
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

  const allExperiences = getAllExperiences();

  return {
    props: {
      allPosts,
      allExperiences,
    },
  };
};

export default Home;
