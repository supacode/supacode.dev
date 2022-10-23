import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import type { Blog as BlogType } from '../types';
import { AppImage } from '../../../components/ui/AppImage';

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
          <div className="blog-card__img">
            <AppImage src={coverImage} alt={title} className="blog-card__img" />
          </div>
        </Link>
      )}

      <div className="blog-card__content">
        {title && (
          <h3 className="blog-card__title">
            <Link href={blogLink}>
              <a className="blog-card__title--link">{title}</a>
            </Link>
          </h3>
        )}

        {excerpt && <p className="blog-card__excerpt">{excerpt}</p>}

        {date && (
          <p className="blog-card__date">
            {date.toLocaleDateString('en-us', {
              dateStyle: 'full',
            })}
          </p>
        )}
      </div>
    </div>
  );
};
