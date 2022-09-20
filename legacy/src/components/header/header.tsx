import React, { useRef, useState, useEffect } from 'react';
import cn from 'classnames';
import { AppLink } from '../AppLink';

import { Navbar } from '../navbar';
import { SkipLink } from '../skipLink';

import './header.scss';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

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
      <SkipLink to={'#content'} />

      <header
        className={cn('main-header', {
          'main-header__scrolled': isScrollingUp,
        })}
        ref={headerRef}
      >
        <div className="main-header__inner">
          <h1 className="main-header__logo">
            <AppLink href="/" clearStyles>
              Supacode
            </AppLink>
          </h1>

          <Navbar />
        </div>
      </header>
    </>
  );
};
