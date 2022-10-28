import { BlogCard } from '../BlogCard';
import type { Blog as BlogType } from '../types';

type BlogSectionProps = {
  posts: BlogType[];
};

export const BlogSection: React.FC<BlogSectionProps> = ({ posts = [] }) => {
  return (
    <section className="blog-section" id="blog">
      <h2 className="blog-section__title">Blog</h2>

      <div className="blog-section__featured">
        {posts.map((blog) => (
          <BlogCard
            date={blog.date}
            slug={blog.slug}
            title={blog.title}
            excerpt={blog.excerpt}
            coverImage={blog.coverImage}
            key={blog.slug}
            layout="stacked"
          />
        ))}
      </div>
    </section>
  );
};
