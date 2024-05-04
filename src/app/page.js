import DefaultLayout from './components/DefaultLayout';
import Head from 'next/head';
import './page.css';

const Home = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>My Application - Home</title>
      </Head>
      <h1>Welcome to my application!</h1>

    </DefaultLayout>


  );
};

export default Home;