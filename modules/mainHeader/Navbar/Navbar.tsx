import { useRef, useState } from 'react';
import cn from 'classnames';
import { useIsomorphicLayoutEffect, useOnClickOutside } from 'usehooks-ts';

import { routes } from 'consts';
import { useIsMobile } from 'hooks/index';
import { AppLink } from 'components/AppLink';
import { ThemeToggle } from 'modules/mainHeader/ThemeToggle';

export const Navbar: React.FC = () => {
  // Ref for the sidebar drawer/menu.
  const drawerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  // State for sidebar drawer.
  const [isDesktopMenu, _setIsDesktopMenu] = useState<boolean>(true);
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);

  // State for checking if the menu is animating to close.
  const [isClosingDrawer, setIsClosingDrawer] = useState(false);

  const openMenu = () => {
    setIsMobileMenu(true);

    document.body.style.overflowY = 'hidden';
  };

  const closeMenu = () => {
    document.body.style.overflowY = '';
    setIsClosingDrawer(true);

    setTimeout(() => {
      setIsMobileMenu(false);
      setIsClosingDrawer(false);
    }, 200);
  };

  const toggleMenu = () => {
    if (isMobileMenu) closeMenu();
    else openMenu();
  };

  // Close the menu if on desktop and and the drawer is open.
  // This is to prevent the drawer from being open
  // when the user resizes the window or changes orientation.
  useIsomorphicLayoutEffect(() => {
    if (!isMobile && isMobileMenu) closeMenu();
  }, [isMobile]);

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
        aria-label={isDesktopMenu ? 'Close Menu' : 'Open Menu'}
      >
        {[...Array(3)].map((_, index) => (
          <span
            key={index.valueOf()}
            className={`hamburger__line hamburger__line--${index + 1}`}
          />
        ))}
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
