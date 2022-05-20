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
import LocalEvents from '../components/LocalEvents';

interface Props {
  getAllEvents: Events[];
}

const Home = ({ getAllEvents }: Props) => {
  const [location, setLocation] = useState('');
  const [localEvents, setLocalEvents] = useState<Events[]>([]);

  // get user location
  const getLocation = () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLocation = `${position.coords.latitude.toString()},${position.coords.longitude.toString()}`;
          setLocation(userLocation);
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // get local events
  const fetchLocalEvents = async () => {
    try {
      const local = await getLocalEvents(location);
      setLocalEvents(local._embedded.events);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocation();
    console.log(getAllEvents);
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
        <LocalEvents title="Events Near Me" localEvents={localEvents} />
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
