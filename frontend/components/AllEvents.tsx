import React from 'react';
import { Events } from '../types';

interface Props {
  title: string;
  events: Events[];
}

const AllEvents = ({ title, events }: Props) => {
  // TODO: grab user long/latitude for location and render local events (if any, if not, just show generic events for US)

  return (
    <div>
      <h1>{title}</h1>

      <div>
        {events.map((event) => (
          <h3>{event?.name}</h3>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
