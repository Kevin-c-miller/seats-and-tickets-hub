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
    <>
      <h1 className="text-center text-2xl font-bold mx-12 my-4">{title}</h1>

      <div className="flex items-center justify-center overflow-x-scroll mx-4 px-4">
        {/* TODO: build rows for each type of event section // change to a flex row */}

        {events.map((event) => (
          <EventDetail event={event} key={event?.id} />
        ))}
      </div>
    </>
  );
};

export default AllEvents;
