import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';

import { viewports } from '../../constants/config';
import { routes } from '../../constants/path';
import { useOnClickOutside, useWindowSize } from '../../hooks';

import './navbar.scss';

const BACKDROP_CN = 'blur';

export const Navbar: React.FC = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const sideDrawerRef = useRef<HTMLDivElement>(null);
  const { width: deviceWidth } = useWindowSize();
  const isSmallDevice = deviceWidth < viewports.screenMdMin;

  const openSideDrawer = () => {
    document.body.classList.add(BACKDROP_CN);
    setIsSideDrawerOpen(true);
  };

  const closeSideDrawer = () => {
    document.body.classList.remove(BACKDROP_CN);
    setIsSideDrawerOpen(false);
  };

  const toggleSideDrawer = () => {
    isSideDrawerOpen ? closeSideDrawer() : openSideDrawer();
  };

  useOnClickOutside(sideDrawerRef, (e) => {
    const el = e.target as HTMLElement;
    const elClicked = el.tagName.toLowerCase();

    const exclude = ['a'];

    if (exclude.includes(elClicked) || el.classList.contains(BACKDROP_CN)) {
      closeSideDrawer();
    }
  });

  useEffect(() => {
    if (!isSmallDevice) {
      closeSideDrawer();
    }
  }, [deviceWidth]);

  return (
    <>
      {isSmallDevice && (
        <button
          type="button"
          className={cn('hamburger', { hamburger__active: isSideDrawerOpen })}
          onClick={toggleSideDrawer}
          tabIndex={0}
          aria-label={isSideDrawerOpen ? 'Close Menu' : 'Open Menu'}
        >
          <span className="hamburger__line hamburger__line--1"></span>
          <span className="hamburger__line hamburger__line--2"></span>
          <span className="hamburger__line hamburger__line--3"></span>
        </button>
      )}

      <div
        ref={sideDrawerRef}
        aria-hidden={isSmallDevice}
        className={cn('overlay', { overlay__open: isSideDrawerOpen })}
      >
        <nav className="overlay__nav">
          <ul>
            {routes.map((link) => (
              <li key={link.id} className="overlay__nav--list">
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
