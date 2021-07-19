import React from 'react';
import { AppLink } from '../AppLink';

import { Navbar } from '../navbar';
import './header.scss';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="main-header">
      <h1 className="main-header__logo">
        <AppLink href="/" clearStyles>
          Supacode
        </AppLink>
      </h1>
      <Navbar />
    </header>
  );
};
