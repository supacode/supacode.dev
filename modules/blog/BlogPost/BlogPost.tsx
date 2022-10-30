import type { Blog } from '../types/index';
import { BlogHead } from '../BlogHead';

type BlogPostProps = {
  post: Blog & {
    content: string;
  };
};

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="article" id="content">
      <BlogHead post={post} />

      {post.content && (
        <section
          className="article__content"
          dangerouslySetInnerHTML={{ __html: post.content }}
          itemProp="articleBody"
        />
      )}
    </article>
  );
};
