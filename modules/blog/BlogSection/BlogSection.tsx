import { AppLink } from 'components/ui/AppLink';
import { BlogCard } from 'modules/blog/BlogCard/BlogCard';
import type { Blog as BlogType } from 'modules/blog/types';

type BlogSectionProps = {
  posts: BlogType[];
};

export const BlogSection: React.FC<BlogSectionProps> = ({ posts = [] }) => (
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

    <AppLink
      asButton
      text="Blog posts"
      to="/blog"
      className="blog-section__read-more-btn"
    />
  </section>
);
