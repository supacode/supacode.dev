import { SiteFooter } from 'components/SiteFooter';
import { Header } from 'modules/mainHeader/Header';
import Head from 'next/head';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#1a2130" />
      </Head>
      <Header />
      <div className="app-container">
        {children}
        <SiteFooter />
      </div>
    </>
  );
};
