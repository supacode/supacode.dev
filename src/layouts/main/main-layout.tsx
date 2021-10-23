import React from 'react';
import { Header } from '../../components/header';
import { SiteFooter } from '../../components/site-footer';
import './main-layout.scss';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="site-wrapper">{children}</main>
      <SiteFooter />
    </>
  );
};
