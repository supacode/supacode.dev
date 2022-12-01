import Head from 'next/head';

import { SkipToContent } from 'components/SkipToContent';
import { Header } from 'modules/mainHeader/Header';
import { SiteFooter } from 'components/SiteFooter';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <Head>
      <meta name="theme-color" content="#1a2130" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SkipToContent to="#content" />

    <Header />

    <div className="app-container">{children}</div>

    <SiteFooter />
  </>
);
