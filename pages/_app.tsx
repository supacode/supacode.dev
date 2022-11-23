import type { AppProps } from 'next/app';
import { AppLayout } from 'modules/layout';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import 'styles/globals.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default MyApp;
