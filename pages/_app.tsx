import type { AppProps } from 'next/app';
import { AppLayout } from '../modules/layout';
import '../styles/globals.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
);

export default MyApp;
