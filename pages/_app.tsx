import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MovieCtxProvider from '../services/context/MovieContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <MovieCtxProvider><Component {...pageProps} /></MovieCtxProvider> 
}

export default MyApp
