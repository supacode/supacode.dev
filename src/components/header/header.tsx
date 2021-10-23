import React, { useRef, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import { AppLink } from '../AppLink';

import { Navbar } from '../navbar';
import { SkipLink } from '../skipLink';

import './header.scss';

export const Header: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  return (
    <>
      <SkipLink to={'#content'} />

      <header
        className={cn('main-header', {
          'main-header__scrolled': true,
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
