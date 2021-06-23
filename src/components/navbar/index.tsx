import React, { useEffect, useState } from 'react';

import { routes } from '../../constants/path';

import './navbar.scss';

export const Navbar: React.FC = () => {
  const [sideDrawerActive, setMenuActive] = useState(false);

  // Disable scroll when side drawer is active

  const clickHandler = () => {
    setMenuActive(!sideDrawerActive);
  };

  return (
    <>
      <button
        className={`hamburger${sideDrawerActive ? ' hamburger__active' : ''}`}
        onClick={clickHandler}
      >
        <span className="hamburger__line hamburger__line--1"></span>
        <span className="hamburger__line hamburger__line--2"></span>
        <span className="hamburger__line hamburger__line--3"></span>
      </button>

      <div
        className={`overlay${sideDrawerActive ? ' overlay__open' : ''}`}
        id="overlay"
      >
        <nav className="overlay__nav">
          <ul>
            {routes.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text} </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};