import type { NextPage } from 'next';
import Head from 'next/head';

import { AboutSection } from 'components/AboutSection';
import { Experience, ExperienceSection } from 'components/ExperienceSection';
import { HeroSection } from 'components/HeroSection';
// import { ProjectSection } from 'components/ProjectSection';
import { getAllPosts } from 'api/getAllPosts';
import { BlogSection } from 'modules/blog/BlogSection';
import type { Blog } from 'modules/blog/types';
import { Project } from 'modules/project/types';
import { getAllExperiences } from 'api/getAllExperiences';

type HomeProps = {
  allPosts: Blog[];
  allExperiences: Experience[];
  allProjects: Project[];
};

const Home: NextPage<HomeProps> = ({ allPosts, allExperiences }) => {
  return (
    <>
      <Head>
        <title>Supacode.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <AboutSection />
      <ExperienceSection experiences={allExperiences} />
      {/* <ProjectSection projects={allProjects} /> */}
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
