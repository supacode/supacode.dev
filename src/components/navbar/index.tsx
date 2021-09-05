import React, { useState, useRef } from 'react';

import { routes } from '../../constants/path';
import { useOnClickOutside } from '../../hooks/clickOutside';
import { AppLink } from '../AppLink';
import './navbar.scss';

export const Navbar: React.FC = () => {
  const [sideDrawerActive, setMenuActive] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const clickHandler = () => setMenuActive(!sideDrawerActive);
  useOnClickOutside(btnRef, () => setMenuActive(false));

  return (
    <>
      <button
        type="button"
        ref={btnRef}
        className={`hamburger${sideDrawerActive ? ' hamburger__active' : ''}`}
        onClick={clickHandler}
        tabIndex={-1}
        aria-label={sideDrawerActive ? 'Close Menu' : 'Open Menu'}
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
                <AppLink text={link.text} href={link.url} clearStyles />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
