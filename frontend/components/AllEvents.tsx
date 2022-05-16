import React from 'react';
import EventDetail from '../components/EventDetail';
import { Events } from '../types';
import Link from 'next/link';

interface Props {
  title: string;
  events: Events[];
}

const AllEvents = ({ title, events }: Props) => {
  // TODO: render local events (if any, if not, just show generic events for US)

  return (
    <div>
      <h1>{title}</h1>

      {events.map((event) => (
        <Link href={`/events/${event?.id}`} key={event?.id}>
          <EventDetail event={event} />
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
