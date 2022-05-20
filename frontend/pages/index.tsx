import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import requests from '../utilities/services/requests';
import AllEvents from '../components/AllEvents';
import { useEffect, useState } from 'react';
import { Events } from '../types';
import {
  getSearchedEvents,
  getLocalEvents,
} from '../utilities/services/requests';
import SearchedEvents from '../components/SearchedEvents';

interface Props {
  getAllEvents: Events[];
}

const Home = ({ getAllEvents }: Props) => {
  const [location, setLocation] = useState('');
  const [localEvents, setLocalEvents] = useState([]);

  // get user location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = `${position.coords.latitude},${position.coords.longitude}`;
        setLocation(location.toString());
      });
    } else {
      console.log('location not found');
    }
  };

  const fetchLocalEvents = async () => {
    try {
      const local = await getLocalEvents(location);
      setLocalEvents(local._embedded.events);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(getAllEvents);
    getLocation();
    fetchLocalEvents();
  }, []);

  return (
    <div className="">
      <Head>
        <title>Seats & Tickets Hub | Home</title>
      </Head>

      {/* <Navbar /> */}

      <main className="flex flex-col items-start justify-center">
        {/* <Search /> */}
        <AllEvents title="Upcoming Events" events={getAllEvents} />
        <SearchedEvents title="Events Near Me" localEvents={localEvents} />
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
