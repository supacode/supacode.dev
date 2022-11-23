import { useRef, MouseEventHandler, useState, useEffect, useId } from 'react';
import cn from 'classnames';
import gsap from 'gsap';

import { routes } from 'constants/path';
import { useOnClickOutside, useWindowSize } from 'hooks';
import { AppLink } from 'components/ui/AppLink';

export const Navbar: React.FC = () => {
  const isMobile = useWindowSize().width < 768;

  const [isMounted, setIsMounted] = useState(false);

  // State for sidebar drawer.
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);

  // State for checking if the menu is animating to close.
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null) as any;

  useEffect(() => {
    isMobile ? setIsDrawerOpen(false) : setIsDrawerOpen(true);
  }, [isMobile]);

  useEffect(() => setIsMounted(true), []);

  const openDrawer = () => {
    document.body.style.overflowY = 'hidden'; // prevent scrolling when drawer is open
    setIsDrawerOpen(true);
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

  const toggleSideDrawer: MouseEventHandler<HTMLElement> = () => {
    if (!isDrawerOpen) {
      openDrawer();
      return;
    }

    closeDrawer();
  };

  useOnClickOutside<HTMLElement>(drawerRef, closeDrawer);

  // useEffect(() => {
  //   gsap.to(drawerRef.current, {
  //     opacity: 0,
  //     width: 0,
  //     transform: 'translateX(100%)',
  //   });
  // }, [isClosingDrawer]);

  // useEffect(() => {
  //   gsap.fromTo(
  //     drawerRef.current,
  //     {
  //       opacity: 0,
  //       transform: 'translateX(100%)',
  //       width: '0',
  //     },
  //     {
  //       transform: 'translateX(0)',
  //       opacity: 1,
  //       width: '50%',
  //       duration: 0.3,
  //     },
  //   );
  // }, [isDrawerOpen]);

  return (
    <>
      <button
        type="button"
        className={cn('hamburger', {
          hamburger__active: isMounted && isDrawerOpen && !isClosingDrawer,
        })}
        onClick={toggleSideDrawer}
        tabIndex={0}
        aria-label={isDrawerOpen ? 'Close Menu' : 'Open Menu'}
      >
        {[...Array(3)].map((_, index) => (
          <span
            key={useId()}
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
            ref={(el) => (drawerRef.current = el)}
            className={cn('main-nav', {
              'main-nav__slide-out': isClosingDrawer,
            })}
          >
            <ol className="main-nav__list">
              {routes.map((link, index) => (
                <li
                  key={link.id}
                  className="main-nav__list--item"
                  onClick={closeDrawer}
                >
                  <AppLink
                    className={cn('main-nav__link', {
                      'main-nav__link--active': false, // TODO: Replace with active link logic.
                    })}
                    to={link.url}
                  >
                    {link.text}
                  </AppLink>
                </li>
              ))}
            </ol>
          </nav>
        </>
      )}
    </>
  );
};
