import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { routes } from '../../../constants/path';

export const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [useMobileMenu, setUseMobileMenu] = useState(false);

  const toggleSideDrawer = () => {};

  return (
    <>
      <button
        type="button"
        className={cn('hamburger', {
          hamburger__active: isSidebarOpen,
        })}
        onClick={toggleSideDrawer}
        tabIndex={0}
        aria-label={isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      >
        <span className="hamburger__line hamburger__line--1"></span>
        <span className="hamburger__line hamburger__line--2"></span>
        <span className="hamburger__line hamburger__line--3"></span>
      </button>

      <div
        className={cn('overlay', {
          overlay__open: isSidebarOpen,
        })}
      >
        <nav className="overlay__nav">
          <ul>
            {routes.map((link) => (
              <li key={link.id} className="overlay__nav--list">
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
