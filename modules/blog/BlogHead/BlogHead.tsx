import { AppImage } from 'components/ui/AppImage';
import { Blog } from 'modules/blog/types';

type BlogHeadProps = {
  post: Blog;
};

export const BlogHead: React.FC<BlogHeadProps> = ({ post }) => {
  if (!post) return null;

  return (
    <header className="blog-head__header">
      <div>
        {post.title && (
          <h1 itemProp="headline" className="blog-head__title">
            {post.title}
          </h1>
        )}
        {post.date && <p className="blog-head__date">{`${post.date}`}</p>}
      </div>

      {post.coverImage && (
        <AppImage
          className="blog-head__featured-img"
          src={post.coverImage}
          alt={post.title}
          width={700}
          height={300}
        />
      )}
    </header>
  );
};
