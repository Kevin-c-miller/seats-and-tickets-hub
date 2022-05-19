import React from 'react';
import { Events } from '../../types';

interface Props {
  event: Events;
}

const EventDate = ({ event }: Props) => {
  // convert miliary time to standard time
  const timeConversion = (militaryTime: string) => {
    const [hours, minutes, seconds] = militaryTime.split(':');
    return `${+hours > 12 ? +hours - 12 : hours}:${minutes}${
      seconds ? `:${seconds}` : ''
    } ${+hours >= 12 ? 'PM' : 'AM'}`;
  };

  return (
    <div>
      <ul>
        <li>
          <strong>Date: </strong> {event?.dates?.start?.localDate}
        </li>
        <li>
          <strong>Time: </strong>{' '}
          {timeConversion(event?.dates?.start?.localTime)}
        </li>
        <ul>
          <li>{event?.pleaseNote}</li>
        </ul>
      </ul>
    </div>
  );
};

export default EventDate;
