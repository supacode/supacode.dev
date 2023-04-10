import { useRef, useState, useCallback } from 'react';
import cn from 'classnames';
import { useIsomorphicLayoutEffect, useOnClickOutside } from 'usehooks-ts';

import { routes } from 'consts';
import { useIsMobile } from 'hooks';
import { AppLink } from 'components/AppLink';
import { ThemeToggle } from 'modules/mainHeader/ThemeToggle';

export const Navbar: React.FC = () => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);

  const openMenu = useCallback(() => {
    setIsMobileMenu(true);
    document.body.style.overflowY = 'hidden';
  }, []);

  const closeMenu = useCallback(() => {
    document.body.style.overflowY = '';
    setIsClosingDrawer(true);

    setTimeout(() => {
      setIsMobileMenu(false);
      setIsClosingDrawer(false);
    }, 200);
  }, []);

  const toggleMenu = useCallback(() => {
    if (isMobileMenu) closeMenu();
    else openMenu();
  }, [isMobileMenu, closeMenu, openMenu]);

  useIsomorphicLayoutEffect(() => {
    if (!isMobile && isMobileMenu) closeMenu();
  }, [isMobile, isMobileMenu, closeMenu]);

  useOnClickOutside(drawerRef, () => isMobileMenu && closeMenu());

  return (
    <>
      <button
        type="button"
        className={cn('hamburger', {
          hamburger__active: isMobileMenu,
        })}
        onClick={toggleMenu}
        tabIndex={0}
        aria-label={isMobileMenu ? 'Close Menu' : 'Open Menu'}
      >
        <span className="hamburger__line hamburger__line--1" />
        <span className="hamburger__line hamburger__line--2" />
        <span className="hamburger__line hamburger__line--3" />
      </button>

      {isMobileMenu && <div className="overlay" />}

      <nav
        ref={drawerRef}
        className={cn('main-nav', {
          'main-nav__open': isMobileMenu,
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

          <li className="main-nav__list--item">
            <ThemeToggle />
          </li>
        </ol>
      </nav>
    </>
  );
};

Navbar.displayName = 'modules/mainHeader/Navbar';
