import React from 'react';
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
