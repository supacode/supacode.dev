import React from 'react';
import { Link } from 'gatsby';
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';

import './blog-card.scss';

export interface IBlog {
  title: string;
  slug: string;
  featuredImage?: IGatsbyImageData;
  date: Date;
}

export const BlogCard: React.FC<IBlog> = ({
  title,
  slug,
  featuredImage,
  date,
}) => {
  return (
    <div className="blog" key={slug}>
      <div className="blog__info">
        {title && (
          <h3 className="blog__title">
            <Link to={slug}>{title}</Link>
          </h3>
        )}

        {date && (
          <p className="blog__date">
            <time>
              {date.toLocaleDateString('en-us', {
                dateStyle: 'full',
              })}
            </time>
          </p>
        )}
      </div>

      {featuredImage && (
        <div className="blog__cover">
          <GatsbyImage
            image={featuredImage}
            className="blog__cover--img"
            alt={title}
            title={title}
          />
        </div>
      )}
    </div>
  );
};
