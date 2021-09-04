import React from 'react';
import { AppLink } from '../AppLink';

import { Navbar } from '../navbar';
import { SkipLink } from '../skipLink';
import './header.scss';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <SkipLink to={'#content'} />

      <header className="main-header">
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
