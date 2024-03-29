import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { siteData } from 'consts';

import type { Experience } from 'modules/experience/types';
import { getAllPosts } from 'modules/blog/api/getAllPosts';
import type { Blog } from 'modules/blog/types';
import { SnapContainer } from 'modules/SnapScroll/SnapContainer';
import { getAllExperiences } from 'modules/experience/api/getAllExperiences';
import { AppFooter } from 'components/AppFooter';

const HeroSection = dynamic(() =>
  import('modules/HeroSection').then((mod) => mod.HeroSection),
);

const AboutSection = dynamic(() =>
  import('modules/AboutSection').then((mod) => mod.AboutSection),
);

const BlogSection = dynamic(() =>
  import('modules/blog/BlogSection').then((mod) => mod.BlogSection),
);

const ExperienceSection = dynamic(() =>
  import('modules/experience/ExperienceSection').then(
    (mod) => mod.ExperienceSection,
  ),
);

type HomeProps = {
  allPosts: Blog[];
  allExperiences: Experience[];
};

const Home: NextPage<HomeProps> = ({ allPosts, allExperiences }) => {
  const pageTitle = siteData.title;

  const sections = [
    {
      id: 'hero',
      section: <HeroSection />,
    },
    {
      id: 'about',
      section: <AboutSection />,
    },
    {
      id: 'experience',
      section: <ExperienceSection experiences={allExperiences} />,
    },
    {
      id: 'blog',
      section: <BlogSection posts={allPosts} />,
    },
    {
      id: 'contact',
      section: <AppFooter footerId="contact" />,
    },
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={siteData.description} />

        <meta property="og:image" content="assets/images/og.png" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={siteData.description} />
      </Head>

      <SnapContainer sections={sections} />
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
      fullHeightFooter: false,
    },
  };
};

Home.displayName = 'pages/index';

export default Home;
