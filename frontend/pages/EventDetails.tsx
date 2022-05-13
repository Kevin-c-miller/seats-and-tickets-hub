import Head from 'next/head';
import React from 'react';
import { Events } from '../types';

interface Props {
  event: Events;
}
// TODO: find out how to use slug for routing and grabbing correct id for data

const EventDetails = ({ event }: Props) => {
  console.log(event?.name);
  return (
    <div>
      <Head>
        <title>{`${event?.name} Details` || 'Event Details'} </title>
      </Head>
    </div>
  );
};

export default EventDetails;
