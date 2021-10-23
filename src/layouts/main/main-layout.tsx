import React, { useEffect } from 'react';
import { Header } from '../../components/header';
import { SiteFooter } from '../../components/site-footer';
import './main-layout.scss';

export const Layout: React.FC = ({ children }) => {
  const externalLinkHandler = () => {
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach((link) => {
      if (link.host !== window.location.host) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  };

  useEffect(() => {
    externalLinkHandler();
  }, []);

  return (
    <>
      <Header />
      <main className="site-wrapper">{children}</main>
      <SiteFooter />
    </>
  );
};
