import { useRef, MouseEventHandler, useState } from 'react';
import cn from 'classnames';
import gsap from 'gsap';

import { routes } from 'constants/path';
import {
  useIsomorphicLayoutEffect,
  useOnClickOutside,
  useWindowSize,
} from 'hooks';
import { AppLink } from 'components/ui/AppLink';

export const Navbar: React.FC = () => {
  const isMobile = useWindowSize().width < 768;

  const [isMounted, setIsMounted] = useState(false);

  // State for sidebar drawer.
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);

  // State for checking if the menu is animating to close.
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (isMobile) {
      setIsDrawerOpen(false);
      return;
    }

    setIsDrawerOpen(true);
  }, [isMobile]);

  useIsomorphicLayoutEffect(() => setIsMounted(true), []);

  const openDrawer = () => {
    document.body.style.overflowY = 'hidden'; // prevent scrolling when drawer is open
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    if (!isMobile) return; // don't close drawer/navbar if not mobile

    document.body.style.overflowY = ''; // Allow scrolling when drawer is closed

    setIsClosingDrawer(true); // Set state to true to trigger animation.

    setTimeout(() => {
      setIsDrawerOpen(false);
      setIsClosingDrawer(false);
      drawerRef.current?.removeEventListener('animationend', () => {});
    }, 200);
  };

  const toggleSideDrawer: MouseEventHandler<HTMLElement> = () => {
    if (!isDrawerOpen) {
      openDrawer();
      return;
    }

    closeDrawer();
  };

  useOnClickOutside<HTMLDivElement>(drawerRef, closeDrawer);

  useIsomorphicLayoutEffect(() => {
    // Animate drawer in

    if (isMobile && drawerRef.current) {
      gsap.fromTo(
        drawerRef.current,
        {
          transform: 'translateX(100%)',
        },
        {
          transform: 'translateX(0)',
          opacity: 1,
          duration: 0.2,
        },
      );
    }

    return () => gsap.killTweensOf(drawerRef.current);
  }, [isDrawerOpen, isMobile]);

  useIsomorphicLayoutEffect(() => {
    // Animate drawer out
    if (!isMounted) return;

    if (isClosingDrawer) {
      gsap.to(drawerRef.current, {
        duration: 0.2,
        transform: 'translateX(105%)',
      });
    }

    return () => gsap.killTweensOf(drawerRef.current);
  }, [isClosingDrawer]);

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
            // eslint-disable-next-line react/no-array-index-key
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
            <ol className="main-nav__list">
              {routes.map((link) => (
                <li
                  key={link.id}
                  className="main-nav__list--item"
                  onClick={closeDrawer}
                  onKeyDown={closeDrawer}
                  role="presentation"
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
