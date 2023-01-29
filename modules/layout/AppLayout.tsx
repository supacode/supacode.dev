import dynamic from 'next/dynamic';

import { SkipToContent } from 'components/SkipToContent';
import { AppHeader } from 'modules/mainHeader/AppHeader';

const AppFooter = dynamic(() =>
  import('components/AppFooter').then((mod) => mod.AppFooter),
);

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <SkipToContent to="#content" />

    <AppHeader />

    <div className="app-container">{children}</div>

    <AppFooter />
  </>
);
