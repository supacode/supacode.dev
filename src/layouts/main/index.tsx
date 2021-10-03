import React from 'react';

import '@fontsource/roboto-mono';

import { Header } from '../../components/header';
import './layout.scss';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="site-wrapper">{children}</main>
    </>
  );
};
