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

  const toggleSideDrawer = () => {
    document.querySelector('body')?.classList.toggle(BACKDROP_CN);
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  useOnClickOutside(sideDrawerRef, (e) => {
    const el = e.target as HTMLElement;
    if (el.classList.contains(BACKDROP_CN)) toggleSideDrawer();
  });

  useEffect(() => {
    if (!isSmallDevice) {
      setIsSideDrawerOpen(false);
      document.querySelector('body')?.classList.remove(BACKDROP_CN);
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
