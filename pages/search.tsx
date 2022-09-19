import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react';
import SearchBody from '../components/organisms/body/search.body';
import Navbar from '../components/organisms/navbar';
import Loading from '../components/utilities/loading';

const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#09D3FF',
    },
  },
});
const Search = () => {
  const [isLoading, setIsLoading] = useState(false);

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
        {isLoading ? <Loading /> : null}

        <SearchBody />
      </ThemeProvider>
    </>
  );
};
export default Search;
