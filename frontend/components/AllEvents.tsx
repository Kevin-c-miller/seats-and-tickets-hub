import React from 'react';
import EventDetail from '../components/EventDetail';
import { Events } from '../types';

interface Props {
  title: string;
  events: Events[];
}

const AllEvents = ({ title, events }: Props) => {
  // TODO: render local events (if any, if not, just show generic events for US)

  return (
    <div>
      {/* TODO: build rows for each type of event section // change to a flex row */}
      <h1>{title}</h1>

      {events.map((event) => (
        <EventDetail event={event} key={event?.id} />
      ))}
    </div>
  );
};

export default AllEvents;
