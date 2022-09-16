import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import Head from 'next/head';
import React from 'react';
import SearchBody from '../components/organisms/body/search.body';
import Navbar from '../components/organisms/navbar';

const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#09D3FF',
    },
  },
});
const Search = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={DarkTheme}>
        <Head>
          <title> GetMovies</title>
          <link
            rel="icon"
            type="image/x-icon"
            href="/image/gmovie-logo.png"
          ></link>
        </Head>
        <Navbar />
        <SearchBody />
      </ThemeProvider>
    </>
  );
};
export default Search;
