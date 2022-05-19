import React from 'react';
import { Events } from '../../types';

interface Props {
  event: Events;
}

const EventName = ({ event }: Props) => {
  return (
    <div className="text-center m-8">
      <h3 className="text-3xl hover:text-[#5751fc] hover:underline">
        <a href={event?.url} target="_blank" rel="noopener noreferrer">
          {event?.name}
        </a>
      </h3>
    </div>
  );
};

export default EventName;
