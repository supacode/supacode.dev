import React from 'react';
import { Link } from 'gatsby';
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';
import cn from 'classnames';
import { useScrollReveal } from '../../hooks';

export type Blog = {
  title: string;
  slug: string;
  date: Date;
  excerpt?: string;
  featuredImage?: IGatsbyImageData;
  layout?: 'inline' | 'stacked';
};

export const BlogCard: React.FC<Blog> = ({
  title,
  slug,
  featuredImage,
  date,
  excerpt,
  layout,
}) => {
  const isInline = layout === 'inline';
  const isStacked = layout === 'stacked';

  useScrollReveal({
    selector: '.blog-card',
    options: {
      interval: 100,
    },
  });

  return (
    <div
      className={cn('blog-card', {
        'blog-card-inline': isInline,
        'blog-card-stacked': isStacked,
      })}
      key={slug}
    >
      <div className="blog-card__info">
        {title && (
          <h3 className="blog-card__title">
            <Link to={slug}>{title}</Link>
          </h3>
        )}

        {excerpt && <p className="blog-card__excerpt">{excerpt}</p>}

        {date && (
          <p className="blog-card__date">
            <time>
              {date.toLocaleDateString('en-us', {
                dateStyle: 'full',
              })}
            </time>
          </p>
        )}
      </div>

      {featuredImage && isStacked && (
        <div className="blog-card__cover">
          <GatsbyImage
            image={featuredImage}
            className="blog-card__cover--img"
            alt={title}
            title={title}
          />
        </div>
      )}

      {featuredImage && isInline && (
        <a className="blog-card__cover" href={slug}>
          <GatsbyImage
            image={featuredImage}
            className="blog-card__cover--img"
            alt={title}
            title={title}
          />
        </a>
      )}
    </div>
  );
};
