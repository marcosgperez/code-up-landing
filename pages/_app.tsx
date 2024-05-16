import Head from 'next/head';
import { AppProps } from 'next/app';
import ScrollToTop from 'utils/scrollToTop';
import { useEffectOnce } from 'hooks/useEffectOnce';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.scss';
import Header from '@components/Header/Header';
import Footer from '@components/Footer';

const CodeUp = ({ Component, pageProps }: AppProps) => {
  useEffectOnce(() => {
    import('bootstrap/dist/js/bootstrap');
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="App">
        <Header />
        <ScrollToTop>
          <Component {...pageProps} />
          <Footer />
        </ScrollToTop>
      </div>
    </>
  );
};

export default CodeUp;
