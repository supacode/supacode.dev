import React from 'react';
import { Helmet } from 'react-helmet';
import './pagination.scss';

type PaginationProps = {
  currentPage: number;
  numOfPages: number;
  prevPage: string | number;
  nextPage: string | number;
  isLastPage: boolean;
  isFirstPage: boolean;
};

export const Pagination: React.FC<PaginationProps> = ({
  prevPage,
  currentPage,
  numOfPages,
  isFirstPage,
  isLastPage,
  nextPage,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <span>
        {!isFirstPage && (
          <>
            <Helmet>
              <link
                rel="prev"
                href={`${process.env.SITE_URL}/blog/${prevPage}`}
              />
            </Helmet>

            <a className="pagination__link" href={`/blog/${prevPage}`}>
              Previous Page
            </a>
          </>
        )}
      </span>

      <span className="pagination__current">
        Page {currentPage} of {numOfPages}
      </span>

      <span>
        {!isLastPage && (
          <>
            <Helmet>
              <link
                rel="next"
                href={`${process.env.SITE_URL}/blog/${nextPage}`}
              />
            </Helmet>
            <a className="pagination__link" href={`/blog/${nextPage}`}>
              Next Page
            </a>
          </>
        )}
      </span>
    </div>
  );
};
