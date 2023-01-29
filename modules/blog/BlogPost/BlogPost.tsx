import type { Blog } from 'modules/blog/types';
import { BlogHead } from 'modules/blog/BlogHead';

type BlogPostProps = {
  post: Blog & {
    content: string;
  };
};

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => (
  <article className="post" id="content">
    <BlogHead post={post} />

    {post.content && (
      <section
        className="post__content"
        dangerouslySetInnerHTML={{ __html: post.content }}
        itemProp="articleBody"
      />
    )}
  </article>
);
