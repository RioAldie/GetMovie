import { createTheme,CssBaseline,ThemeProvider } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Body from '../components/organisms/body';
import Navbar from '../components/organisms/navbar';

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
        <title> Getmovie</title>
        </Head>
        <Navbar/>
        <Body/>
      </ThemeProvider>
   </>
  )
}

export default Home
