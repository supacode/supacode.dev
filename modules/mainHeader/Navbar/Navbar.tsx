import { useRef, MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { routes } from 'constants/path';
import { useOnClickOutside } from 'hooks';

export const Navbar: React.FC = () => {
  // State for sidebar drawer.
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  // State for checking if the menu is animating to close.
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const openDrawer = () => {
    setIsDrawerOpen(true);

    document.body.style.overflow = 'hidden'; // prevent scrolling when drawer is open
  };

  const closeDrawer = () => {
    document.body.style.overflow = 'auto'; // Reset overflow to default.

    setIsClosingDrawer(true); // Set state to true to trigger animation.

    // Wait for animation to finish before setting state to false.
    navRef.current?.addEventListener('animationend', () => {
      setIsDrawerOpen(false);
      setIsClosingDrawer(false);
    });
  };

  const toggleSideDrawer: MouseEventHandler<HTMLElement> = (evt) => {
    if (!isDrawerOpen) {
      openDrawer();
      return;
    }

    closeDrawer();
  };

  useOnClickOutside<HTMLElement>(navRef, closeDrawer);

  return (
    <>
      <button
        type="button"
        className={cn('hamburger', {
          hamburger__active: isDrawerOpen && !isClosingDrawer,
        })}
        onClick={toggleSideDrawer}
        tabIndex={0}
        aria-label={isDrawerOpen ? 'Close Menu' : 'Open Menu'}
      >
        <span className="hamburger__line hamburger__line--1"></span>
        <span className="hamburger__line hamburger__line--2"></span>
        <span className="hamburger__line hamburger__line--3"></span>
      </button>

      {isDrawerOpen && (
        <>
          <div
            className={cn('overlay', {
              overlay__hide: isClosingDrawer,
            })}
          />

          <nav
            ref={navRef}
            className={cn('nav', {
              'nav__slide-out': isClosingDrawer,
            })}
          >
            <ul>
              {routes.map((link) => (
                <li key={link.id} className="nav--list" onClick={closeDrawer}>
                  <Link href={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};
