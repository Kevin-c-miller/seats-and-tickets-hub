import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Events } from '../../../types';

export const getStaticPaths = async () => {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

  const res = await fetch(url).then((res) => res.json());
  const data = res._embedded.events;

  const paths = data.map((event: Events) => ({
    params: { id: event?.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  console.log(id);
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => res.json());

  // console.log(res);

  return {
    props: { event: res },
  };
};

interface Props {
  event: Events[];
}

const event = ({ event }: Props) => {
  const router = useRouter();
  // grabbing id from router
  const { id } = router.query;

  console.log(event);
  return (
    <div>
      <Head>Event Details</Head>

      <div>
        <h3>Details</h3>
      </div>
    </div>
  );
};

export default event;

// useEffect(() => {
//   const getEvent = async () => {
//     const url = `https://app.ticketmaster.com/discovery/v2/events/Z7r9jZ1AdFYZz.json?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

//     const res = await fetch(url).then((res) => res.json());
//     const data = res._embedded.events;
//     console.log(res);
//   };
//   getEvent();
// }, []);
