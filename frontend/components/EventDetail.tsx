import React from 'react';
import { Events } from '../types';

interface Props {
  event: Events;
}

const EventDetail = ({ event }: Props) => {
  // convert miliary time to standard time
  const timeConversion = (militaryTime: string) => {
    const [hours, minutes, seconds] = militaryTime.split(':');
    return `${+hours > 12 ? +hours - 12 : hours}:${minutes}${
      seconds ? `:${seconds}` : ''
    } ${+hours >= 12 ? 'PM' : 'AM'}`;
  };
  return (
    <div
      style={{
        width: '20%',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #000',
        borderRadius: '10px',
        margin: '20px',
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      <h4>{event?.name}</h4>

      <h5>{event?.dates?.start?.localDate}</h5>
      <h5>{timeConversion(event?.dates?.start?.localTime)}</h5>
    </div>
  );
};

export default EventDetail;
