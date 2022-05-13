import React from 'react';
import { Events } from '../types';

interface Props {
  title: string;
  events: Events[];
}

const AllEvents = ({ title, events }: Props) => {
  // TODO: render local events (if any, if not, just show generic events for US)

  // convert time miliary time to standard time
  const timeConversion = (militaryTime: string) => {
    const [hours, minutes, seconds] = militaryTime.split(':');
    return `${+hours > 12 ? +hours - 12 : hours}:${minutes}${
      seconds ? `:${seconds}` : ''
    } ${+hours >= 12 ? 'PM' : 'AM'}`;
  };

  return (
    <div>
      <h1>{title}</h1>

      {events.map((event) => (
        <div key={event?.id}>
          <h3>{event?.name}</h3>
          <h5>{event?.dates?.start?.localDate}</h5>
          <h5>{timeConversion(event?.dates?.start?.localTime)}</h5>

          {/* TODO: link to own page with more event details */}
          {/*  <EventDetails event={event} />  */}
        </div>
      ))}
    </div>
  );
};

export default AllEvents;
