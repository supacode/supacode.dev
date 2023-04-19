import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const googleAnalyticsTag = process.env.GOOGLE_ANALYTICS_ID;

const Document: React.FC = () => (
  <Html lang="en">
    <Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTag}`}
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsTag}');
        `}
      </Script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

Document.displayName = 'pages/document';

export default Document;
