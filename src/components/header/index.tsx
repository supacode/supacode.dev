import React from 'react';

import { Navbar } from '../navbar';
import './header.scss';

export interface HeaderProps {}

export const Header: React.SFC<HeaderProps> = () => {
  return (
    <header className="main-header">
      <h1 className="main-header__logo">Supacode</h1>
      <Navbar />
    </header>
  );
};
