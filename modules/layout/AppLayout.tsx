import { SiteFooter } from 'components/SiteFooter';
import { Header } from 'modules/mainHeader/Header';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app-container">
        {children}
        <SiteFooter />
      </div>
    </>
  );
};
