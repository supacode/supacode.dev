import { useEffect, useRef, useState } from 'react';
import { useClickAway, useIsomorphicLayoutEffect } from 'react-use';
import cn from 'classnames';

import { routes } from 'constants/path';
import { AppLink } from 'components/ui/AppLink';
import { useBreakpoint } from 'utils/breakpoint';

export const Navbar: React.FC = () => {
  // Ref for the sidebar drawer/menu.
  const drawerRef = useRef<HTMLDivElement>(null);

  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'xs' || breakpoint === 'sm';

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  // State for sidebar drawer.
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true);

  // State for checking if the menu is animating to close.
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);

  const openMenu = () => {
    setIsNavOpen(true);
    document.body.style.overflowY = 'hidden';
  };

  const closeMenu = () => {
    document.body.style.overflowY = '';
    setIsClosingDrawer(true);

    setTimeout(() => {
      setIsNavOpen(false);
      setIsClosingDrawer(false);
    }, 200);
  };

  useIsomorphicLayoutEffect(() => {
    if (isMobile) setIsNavOpen(false);
  }, [isMobile]);

  const toggleMenu = () => {
    if (isNavOpen) closeMenu();
    else openMenu();
  };

  useClickAway(drawerRef, () => isNavOpen && closeMenu());

  return (
    <>
      <button
        type="button"
        className={cn(
          'hamburger',
          isMounted && {
            hamburger__active: isClosingDrawer || isNavOpen,
          },
        )}
        onClick={toggleMenu}
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

      {isNavOpen && <div className="overlay" />}

      <nav
        ref={drawerRef}
        className={cn('main-nav', {
          'main-nav__open': isNavOpen,
          'main-nav__closing': isClosingDrawer,
        })}
      >
        <ol className="main-nav__list">
          {routes.map((link) => (
            <li
              key={link.id}
              className="main-nav__list--item"
              onClick={closeMenu}
              onKeyDown={closeMenu}
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
  );
};
