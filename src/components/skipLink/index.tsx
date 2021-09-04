import React from 'react';

import './skip-link.scss';

export const SkipLink: React.FC<{ to: string }> = ({ to }) => {
  return (
    <a className="btn skip-link" title="Skip to Content" href={to}>
      Skip to Content
    </a>
  );
};
