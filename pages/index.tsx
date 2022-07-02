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
  const getLastedMovieList = useCallback( async ()=>{
    const data = await GetLastedMovie();
  },[GetLastedMovie]);

  useEffect(()=>{
    getLastedMovieList();
  },[])
  return (
   <><CssBaseline/>
      <ThemeProvider theme={DarkTheme}>
        <Head>
        <title> Getmovie</title>
        </Head>
        <Navbar/>
        <Body/>
      </ThemeProvider>
   </>
  )
}

export default Home
