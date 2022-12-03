import { useRef, MouseEventHandler, useState } from 'react';
import cn from 'classnames';
import gsap from 'gsap';
import { useClickAway, useIsomorphicLayoutEffect, useMount } from 'react-use';

import { routes } from 'constants/path';

import { AppLink } from 'components/ui/AppLink';
import { useBreakpoint } from 'utils/breakpoint';

export const Navbar: React.FC = () => {
  const breakpoint = useBreakpoint();

  const isMobile = breakpoint === 'xs' || breakpoint === 'sm';

  const [isMounted, setIsMounted] = useState(false);

  // State for sidebar drawer.
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true);

  // State for checking if the menu is animating to close.
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);

  useMount(() => {
    setIsMounted(true);
  });

  useIsomorphicLayoutEffect(() => {
    if (isMobile) {
      setIsNavOpen(false);
      return;
    }

    setIsNavOpen(true);
  }, [isMobile]);

  const openDrawer = () => {
    document.body.style.overflowY = 'hidden'; // prevent scrolling when drawer is open
    setIsNavOpen(true);
  };

  const closeDrawer = () => {
    if (!isMobile) return; // don't close drawer/navbar if not mobile

    document.body.style.overflowY = ''; // Allow scrolling when drawer is closed

    setIsClosingDrawer(true); // Set state to true to trigger animation.

    // on animation end
    drawerRef.current?.addEventListener(
      'animationend',
      () => {
        setIsNavOpen(false);
        setIsClosingDrawer(false);
      },
      { once: true },
    );
  };

  const toggleSideDrawer: MouseEventHandler<HTMLElement> = () => {
    if (!isNavOpen) {
      openDrawer();
      return;
    }

    closeDrawer();
  };

  useClickAway(drawerRef, closeDrawer);

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
  }, [isNavOpen, isMobile]);

  useIsomorphicLayoutEffect(() => {
    // Animate drawer out
    if (!isMounted) return;

    if (isClosingDrawer) {
      gsap.to(drawerRef.current, {
        duration: 0.2,
        transform: 'translateX(100%)',
      });
    }

    return () => gsap.killTweensOf(drawerRef.current);
  }, [isClosingDrawer]);

  return (
    <>
      <button
        type="button"
        className={cn('hamburger', {
          hamburger__active: isMounted && isNavOpen && !isClosingDrawer,
        })}
        onClick={toggleSideDrawer}
        tabIndex={0}
        aria-label={isNavOpen ? 'Close Menu' : 'Open Menu'}
      >
        {[...Array(3)].map((_, index) => (
          <span
            key={index.valueOf()}
            className={`hamburger__line hamburger__line--${index + 1}`}
          />
        ))}
      </button>

      {isNavOpen && (
        <>
          <div
            className={cn('overlay', {
              overlay__hide: isClosingDrawer || !isNavOpen,
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
