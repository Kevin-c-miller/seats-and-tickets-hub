import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Events } from '../../../types';

const url = 'https://app.ticketmaster.com/discovery/v2/';

interface Props {
  event: Events;
}

const event = ({ event }: Props) => {
  console.log(event);

  return (
    <div>
      <Head>Event Details</Head>

      <div>
        <h3>Details</h3>
        <h4>Event Name: {event.name}</h4>
      </div>

      <Link href="/">Go Back</Link>
    </div>
  );
};

// can use this way but it is slower than using statics paths and props together
// export const getServerSideProps = async (context: any) => {
//   const res = await fetch(
//     `${url}events/${context.params.id}.json?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
//   );

//   const event = await res.json();
//   return {
//     props: {
//       event,
//     },
//   };
// };

export const getStaticPaths = async () => {
  const res = await fetch(
    `${url}events.json?countryCode=US&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await res.json();
  const events = data._embedded.events;

  const ids = events.map((event: any) => event.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `${url}events/${context.params.id}.json?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const event = await res.json();
  console.log(event);

  return {
    props: { event },
  };
};

export default event;
