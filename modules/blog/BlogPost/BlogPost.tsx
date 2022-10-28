import { AppImage } from '../../../components/ui/AppImage';
import type { Blog } from '../types/index';

type BlogPostProps = {
  post: Blog & {
    content: string;
  };
};

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="article" id="content">
      <header className="article__header">
        <div>
          {post.title && (
            <h1 itemProp="headline" className="article__title">
              {post.title}
            </h1>
          )}
          {post.date && <p className="article__date">{`${post.date}`}</p>}
        </div>

        {post.coverImage && (
          <AppImage
            className="article__featured-img"
            src={post.coverImage}
            alt={post.title}
            width={700}
            height={300}
          />
        )}
      </header>

      <hr className="article__divider" />

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
