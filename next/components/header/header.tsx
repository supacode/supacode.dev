import React, { useRef, useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollPos, _setLastScrollPos] = useState(0);

  const handleScroll = () => {
    window.addEventListener(
      'scroll',
      () => {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;

        // if (scrollPos > 150 && lastScrollPos > scrollPos) { // scrolling up
        if (scrollPos > 1) {
          setIsScrollingUp(true);
        } else {
          setIsScrollingUp(false);
        }

        // setLastScrollPos(scrollPos >= 0 ? scrollPos : 0);
      },
      false,
    );
  };

  useEffect(() => {
    setTimeout(() => {
      handleScroll();
    }, 100);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <>
      <header className={cn(styles['main-header'], {})} ref={headerRef}>
        <div className={styles['main-header__inner']}>
          <h1 className={styles['main-header__logo']}>Hello World</h1>
        </div>
      </header>
    </>
  );
};
