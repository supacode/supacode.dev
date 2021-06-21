import React from 'react';

import './header.scss';

export interface HeaderProps {}

export const Header: React.SFC<HeaderProps> = () => {
  return (
    <header className="main-header">
      <h1 className="main-header__logo">Supacode</h1>

      <ul className="main-header__nav">
        <li>
          <a href="!#">About</a>
        </li>
        <li>
          <a href="!#">Experience</a>
        </li>

        <li>
          <a href="!#">Blog</a>
        </li>

        <li>
          <a href="!#">Contact</a>
        </li>

        <li>
          <a href="!#">Resume</a>
        </li>
      </ul>
    </header>
  );
};
