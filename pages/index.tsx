import { createTheme,CssBaseline,ThemeProvider } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import Body from '../components/organisms/body';
import Navbar from '../components/organisms/navbar';
import { GetLastedMovie } from '../services/movie';

const DarkTheme = createTheme({
  palette:{
      mode: 'dark',
      primary: {
        main: '#09D3FF'
      }
  }
})
const Home: NextPage = () => {
  
  return (
   <><CssBaseline/>
      <ThemeProvider theme={DarkTheme}>
        <Head>
        <title> GetMovies</title>
        <link rel="icon" type="image/x-icon" href="/image/gmovie-logo.png"></link>
        </Head>
        <Navbar/>
        <Body/>
      </ThemeProvider>
   </>
  )
}

export default Home
