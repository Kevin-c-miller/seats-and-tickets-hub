import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import requests from '../services/requests';
import { useEffect } from 'react';
import { Events } from '../types';
import AllEvents from '../components/AllEvents';

interface Props {
  getAllEvents: Events[];
}

const Home = ({ getAllEvents }: Props) => {
  useEffect(() => {
    console.log(getAllEvents);
  }, []);

  return (
    <div className="">
      <Head>
        <title>Seats & Tickets Hub | Home</title>
      </Head>

      {/* <Navbar /> */}

      <main>
        {/* <Search /> */}
        <AllEvents title="Upcoming Events" events={getAllEvents} />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;

// server side rendering
export const getServerSideProps = async () => {
  const [getAllEvents] = await Promise.all([
    fetch(requests.getAllEvents).then((res) => res.json()),
  ]);

  return {
    props: {
      getAllEvents: getAllEvents._embedded.events || null,
    },
  };
};
