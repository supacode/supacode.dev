import dynamic from 'next/dynamic';

import { SkipToContent } from 'components/SkipToContent';
import { AppHeader } from 'modules/mainHeader/AppHeader';

const AppFooter = dynamic(() =>
  import('components/AppFooter').then((mod) => mod.AppFooter),
);

type AppLayoutProps = {
  children: React.ReactNode;
  fullHeightFooter?: boolean;
};

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  fullHeightFooter = true,
}) => (
  <>
    <SkipToContent to="#content" />

    <AppHeader />

    <div className="app-container">{children}</div>

    {fullHeightFooter && <AppFooter fullHeight={fullHeightFooter} />}
  </>
);

AppLayout.displayName = 'modules/layout/AppLayout';
