import { NextPage } from 'next';
import { getAllPosts } from '../lib/api';
import { BlogCard } from '../modules/blog/BlogCard';
import type { Blog } from '../modules/blog/types';

type BlogProps = {
  allPosts: Blog[];
};

const BlogPage: NextPage<BlogProps> = ({ allPosts = [] }) => {
  return (
    <div className="blog-page">
      <h2 className="blog-page__title">Blog</h2>

      <div className="blog-page__blogs">
        {allPosts.map((post) => {
          return (
            <BlogCard
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
              date={new Date(post.date)}
              coverImage={post.coverImage}
              key={post.slug}
              layout="inline"
            />
          );
        })}
      </div>
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

export default BlogPage;
