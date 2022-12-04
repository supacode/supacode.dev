import { SkipToContent } from 'components/SkipToContent';
import { Header } from 'modules/mainHeader/Header';
import { SiteFooter } from 'components/SiteFooter';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <SkipToContent to="#content" />

    <Header />

    <div className="app-container">{children}</div>

    <SiteFooter />
  </>
);
