import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Header } from '../modules/mainHeader/Header';
import '../styles/globals.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
