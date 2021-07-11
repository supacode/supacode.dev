import React, { useState } from 'react';

import { routes } from '../../constants/path';
import { AppLink } from '../AppLink';

import './navbar.scss';

export const Navbar: React.FC = () => {
  const [sideDrawerActive, setMenuActive] = useState(false);

  const clickHandler = () => setMenuActive(!sideDrawerActive);

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

      <div className={`overlay${sideDrawerActive ? ' overlay__open' : ''}`}>
        <nav className="overlay__nav">
          <ul>
            {routes.map((link) => (
              <li key={link.id}>
                <AppLink
                  title={link.text}
                  text={link.text}
                  href={link.url}
                  clearStyles
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
