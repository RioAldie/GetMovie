import type { NextPage } from 'next';
import Head from 'next/head';
import Body from '../components/organisms/body';
import Navbar from '../components/organisms/navbar';

const Home: NextPage = () => {
  return (
   <>
      <Head>
      <title> Getmovie</title>
      </Head>
      <Navbar/>
      <Body/>
   </>
  )
}

export default Home
