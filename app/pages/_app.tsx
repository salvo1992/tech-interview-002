import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect può essere utilizzato qui se necessario
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;