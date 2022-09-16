import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MovieCtxProvider from '../services/context/MovieContext';
import QueryCtxProvider from '../services/context/QueryContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieCtxProvider>
      <QueryCtxProvider>
        <Component {...pageProps} />
      </QueryCtxProvider>
    </MovieCtxProvider>
  );
}

export default MyApp;
