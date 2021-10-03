import React from 'react';

import '@fontsource/roboto-mono';
import '@fontsource/merriweather';

import { Header } from '../../components/header';
import './main-layout.scss';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="site-wrapper">{children}</main>
    </>
  );
};
