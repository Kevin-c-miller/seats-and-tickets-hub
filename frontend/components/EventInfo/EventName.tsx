import React from 'react';
import { Events } from '../../types';

interface Props {
  event: Events;
}

const EventName = ({ event }: Props) => {
  return (
    <div className="eventName">
      <h3>
        <a href={event?.url} target="_blank" rel="noopener noreferrer">
          {event?.name}
        </a>
      </h3>
    </div>
  );
};

export default EventName;
