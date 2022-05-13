import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import requests from '../services/requests';
import { useEffect } from 'react';
import { Events } from '../types';

interface Props {
  getAllEvents: Events[];
}

const Home = ({ getAllEvents }: Props) => {
  useEffect(() => {
    //   const getEvents = async () => {
    //     const result = await fetch(
    //       `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=5BfVibA1SBpOzk7ubCpmS0vvSeMP5Vf9`
    //     ).then((res) => res.json());
    //     console.log(result._embedded.events);
    //   };
    //   getEvents();
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
        {/* <Events /> */}
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
