import cn from 'classnames';

import { AppImage } from 'components/AppImage';
import type { Blog as BlogType } from 'modules/blog/types';
import { AppLink } from 'components/AppLink';

type BlogProps = BlogType & {
  layout?: 'inline' | 'stacked';
};

const BLOG_URL_PREFIX = '/blog';

export const BlogCard: React.FC<BlogProps> = ({
  title,
  slug,
  coverImage,
  date,
  excerpt,
  layout,
}) => {
  const isInline = layout === 'inline';
  const isStacked = layout === 'stacked';

  const blogLink = `${BLOG_URL_PREFIX}/${slug}`;

  return (
    <div
      className={cn('blog-card', {
        'blog-card-stacked': isStacked,
        'blog-card-inline': isInline,
      })}
    >
      {coverImage && (
        <AppLink className="blog-card-img-link" to={blogLink}>
          <AppImage
            className="blog-card__img"
            src={coverImage}
            alt={title}
            width={700}
            height={300}
          />
        </AppLink>
      )}

      <div className="blog-card__content">
        {title && (
          <h3 className="blog-card__title">
            <AppLink to={blogLink} className="blog-card__title--link">
              {title}
            </AppLink>
          </h3>
        )}

        {excerpt && <p className="blog-card__excerpt">{excerpt}</p>}

        {typeof date === 'string' && (
          <p className="blog-card__date">
            {new Date(date).toLocaleDateString('en-us', {
              dateStyle: 'full',
            })}
          </p>
        )}
      </div>
    </div>
  );
};

BlogCard.displayName = 'modules/blog/BlogCard';
