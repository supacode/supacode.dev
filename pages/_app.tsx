import type { AppProps } from 'next/app';
import { Header } from '../components/header';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
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
