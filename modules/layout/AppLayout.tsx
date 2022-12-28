import { SkipToContent } from 'components/SkipToContent';
import { Header } from 'modules/mainHeader/Header';
// import { AppFooter } from 'components/AppFooter';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <SkipToContent to="#content" />

    <Header />

    <div className="app-container">{children}</div>

    {/* <AppFooter /> */}
  </>
);
