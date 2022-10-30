import cn from 'classnames';
import Link from 'next/link';

import { AppImage } from 'components/ui/AppImage';
import type { Blog as BlogType } from 'modules/blog/types';

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
        <Link href={blogLink}>
          <AppImage
            className="blog-card__img"
            src={coverImage}
            alt={title}
            width={700}
            height={300}
          />
        </Link>
      )}

      <div className="blog-card__content">
        {title && (
          <h3 className="blog-card__title">
            <Link href={blogLink} className="blog-card__title--link">
              {title}
            </Link>
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
