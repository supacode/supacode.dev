import React, { useState, useRef } from 'react';
import cn from 'classnames';

import { viewports } from '../../constants/config';
import { routes } from '../../constants/path';
import { useOnClickOutside, useWindowSize } from '../../hooks';

import './navbar.scss';
import { Link } from 'gatsby';

const BACKDROP_CN = 'blur';

export const Navbar: React.FC = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const sideDrawerRef = useRef<HTMLDivElement>(null);
  const { width: deviceWidth } = useWindowSize();

  const toggleSideDrawer = () => {
    document.querySelector('body')?.classList.toggle(BACKDROP_CN);
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  useOnClickOutside(sideDrawerRef, (e) => {
    const el = e.target as HTMLElement;
    if (el.classList.contains(BACKDROP_CN)) toggleSideDrawer();
  });

  const isSmallDevice = deviceWidth < viewports.screenMdMin;

  return (
    <>
      <button
        type="button"
        className={cn('hamburger', { hamburger__active: isSideDrawerOpen })}
        onClick={toggleSideDrawer}
        aria-hidden={!isSmallDevice}
        tabIndex={!isSmallDevice ? -1 : 0}
        aria-label={isSideDrawerOpen ? 'Close Menu' : 'Open Menu'}
      >
        <span className="hamburger__line hamburger__line--1"></span>
        <span className="hamburger__line hamburger__line--2"></span>
        <span className="hamburger__line hamburger__line--3"></span>
      </button>

      <div
        ref={sideDrawerRef}
        aria-hidden={deviceWidth > viewports.screenLgMin}
        className={cn('overlay', { overlay__open: isSideDrawerOpen })}
      >
        <nav className="overlay__nav">
          <ul>
            {routes.map((link) => (
              <li key={link.id}>
                <Link
                  onClick={() => isSmallDevice && toggleSideDrawer()}
                  to={link.url}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
