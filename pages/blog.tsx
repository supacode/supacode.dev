import { NextPage } from 'next';
import Head from 'next/head';

import { getAllPosts } from 'modules/blog/api/getAllPosts';
import { BlogCard } from 'modules/blog/BlogCard';
import type { Blog } from 'modules/blog/types';
import { siteData } from 'consts';

type BlogProps = {
  allPosts: Blog[];
};

export const BlogPage: NextPage<BlogProps> = ({ allPosts = [] }) => (
  <>
    <Head>
      <title>{`Blog | ${siteData.title}`}</title>
    </Head>

    <div className="blog-page">
      <h2 className="blog-page__title">Blog</h2>

      <div className="blog-page__blogs">
        {allPosts.map((post) => (
          <BlogCard
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
            date={post.date}
            coverImage={post.coverImage}
            key={post.slug}
            layout="inline"
          />
        ))}
      </div>
    </div>
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

  return {
    props: {
      allPosts,
    },
  };
};

export default BlogPage;
