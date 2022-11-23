import type { NextPage } from 'next';
import Head from 'next/head';

import { AboutSection } from 'components/AboutSection';
import type { Experience } from 'modules/experience/types';
import { ExperienceSection } from 'modules/experience/ExperienceSection';
import { HeroSection } from 'components/HeroSection';
// import { ProjectSection } from 'modules/project/ProjectSection';
import { getAllPosts } from 'modules/blog/api/getAllPosts';
import { BlogSection } from 'modules/blog/BlogSection';
import type { Blog } from 'modules/blog/types';
import { Project } from 'modules/project/types';
import { getAllExperiences } from 'modules/experience/api/getAllExperiences';
import { FullPageContainer } from 'modules/fullPageScroll/FullPageScroll';
import { FullPageSection } from 'modules/fullPageScroll/FullPageSection';

type HomeProps = {
  allPosts: Blog[];
  allExperiences: Experience[];
  allProjects: Project[];
};

const Home: NextPage<HomeProps> = ({
  allPosts,
  allExperiences,
  allProjects,
}) => {
  return (
    <>
      <Head>
        <title>Supacode.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullPageContainer>
        <FullPageSection>
          <HeroSection />
        </FullPageSection>

        <FullPageSection>
          <AboutSection />
        </FullPageSection>

        <FullPageSection>
          <ExperienceSection experiences={allExperiences} />
        </FullPageSection>
        <FullPageSection>
          <BlogSection posts={allPosts} />
        </FullPageSection>
      </FullPageContainer>

      {/* <ProjectSection projects={allProjects} /> */}
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
