import type { NextPage } from 'next';
import Head from 'next/head';

import { sideData } from 'constants/siteData';
import { AboutSection } from 'modules/AboutSection';
import type { Experience } from 'modules/experience/types';
import { ExperienceSection } from 'modules/experience/ExperienceSection';
import { HeroSection } from 'modules/HeroSection';
import { getAllPosts } from 'modules/blog/api/getAllPosts';
import { BlogSection } from 'modules/blog/BlogSection';
import type { Blog } from 'modules/blog/types';
import { Project } from 'modules/project/types';
import { getAllExperiences } from 'modules/experience/api/getAllExperiences';

type HomeProps = {
  allPosts: Blog[];
  allExperiences: Experience[];
  allProjects: Project[];
};

const Home: NextPage<HomeProps> = ({ allPosts, allExperiences }) => (
  <>
    <Head>
      <title>{sideData.title}</title>

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HeroSection />
    <AboutSection />
    <ExperienceSection experiences={allExperiences} />
    <BlogSection posts={allPosts} />
  </>
);

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
