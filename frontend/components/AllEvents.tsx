import React from 'react';
import EventDetails from '../pages/EventDetails';
import { Events } from '../types';
import Link from 'next/link';

interface Props {
  title: string;
  events: Events[];
}

const AllEvents = ({ title, events }: Props) => {
  // TODO: render local events (if any, if not, just show generic events for US)

  // convert miliary time to standard time
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
        <Link href="/EventDetails" key={event?.id}>
          <div>
            <h3>{event?.name}</h3>
            <h5>{event?.dates?.start?.localDate}</h5>
            <h5>{timeConversion(event?.dates?.start?.localTime)}</h5>
            <EventDetails event={event} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
