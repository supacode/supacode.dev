import { useRef, MouseEventHandler, useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { routes } from 'constants/path';
import { useOnClickOutside, useWindowSize } from 'hooks';

export const Navbar: React.FC = () => {
  const { width: deviceWidth } = useWindowSize();

  const isMobile = deviceWidth < 768;

  const [hasMounted, setHasMounted] = useState(false);

  // State for sidebar drawer.
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);

  // State for checking if the menu is animating to close.
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);

  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => setHasMounted(true), []);

  useEffect(() => {
    isMobile ? setIsDrawerOpen(false) : setIsDrawerOpen(true);
  }, [isMobile]);

  const openDrawer = () => {
    setIsDrawerOpen(true);
    document.body.style.overflowY = 'hidden'; // prevent scrolling when drawer is open
  };

  const closeDrawer = () => {
    if (!isMobile) return; // don't close drawer if not mobile

    document.body.style.overflowY = ''; // Allow scrolling when drawer is closed

    setIsClosingDrawer(true); // Set state to true to trigger animation.

    // Wait for animation to finish before setting state.
    drawerRef.current?.addEventListener('animationend', () => {
      setIsDrawerOpen(false);
      setIsClosingDrawer(false);
      drawerRef.current?.removeEventListener('animationend', () => {});
    });
  };

  const toggleSideDrawer: MouseEventHandler<HTMLElement> = (evt) => {
    if (!isDrawerOpen) {
      openDrawer();
      return;
    }

    closeDrawer();
  };

  useOnClickOutside<HTMLElement>(drawerRef, closeDrawer);

  return (
    <>
      <button
        type="button"
        className={cn('hamburger', {
          hamburger__active: hasMounted && isDrawerOpen && !isClosingDrawer,
        })}
        onClick={toggleSideDrawer}
        tabIndex={0}
        aria-label={isDrawerOpen ? 'Close Menu' : 'Open Menu'}
      >
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            className={`hamburger__line hamburger__line--${index + 1}`}
          />
        ))}
      </button>

      {isDrawerOpen && (
        <>
          <div
            className={cn('overlay', {
              overlay__hide: isClosingDrawer,
            })}
          />

          <nav
            ref={drawerRef}
            className={cn('main-nav', {
              'main-nav__slide-out': isClosingDrawer,
            })}
          >
            <ul>
              {routes.map((link, index) => (
                <li
                  key={link.id}
                  className="main-nav__list"
                  onClick={closeDrawer}
                >
                  <Link
                    className={cn('main-nav__link', {
                      'main-nav__link--active': false, // TODO: Replace with active link logic.
                    })}
                    href={link.url}
                  >
                    <span className="main-nav__link--highlight">
                      0{index + 1}.{' '}
                    </span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};
