import type { AppProps } from 'next/app';
import Head from 'next/head';

import { siteData } from 'consts/index';
import { AppLayout } from 'modules/layout';
import 'styles/globals.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link rel="manifest" href="/manifest.json" />

      <link rel="icon" href="/favicon.ico" />

      <meta name="theme-color" content={siteData.themeColor} />

      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

      <meta name="twitter:creator" content="@supacode" />

      <meta property="og:type" content="website" />

      <link
        href="/icons/icon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />

      <link
        href="/icons/icon-32x32.png"
        sizes="32x32"
        rel="icon"
        type="image/png"
      />
    </Head>

    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </>
);

export default MyApp;
