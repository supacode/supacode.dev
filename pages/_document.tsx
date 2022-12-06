import { Html, Head, Main, NextScript } from 'next/document';
import { sideData } from 'consts';

const Document: React.FC = () => (
  <Html lang="en">
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <meta name="description" content={sideData.description} />

      <meta property="og:image" content="assets/images/og.png" />
      <meta property="og:description" content={sideData.description} />
      <meta name="theme-color" content={sideData.themeColor} />
    </Head>

    <body data-theme="light">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
