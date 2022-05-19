import React from 'react';
import { Events } from '../../types';
import { timeConversion } from '../../utilities/timeConversion';

interface Props {
  event: Events;
}

const EventDate = ({ event }: Props) => {
  return (
    <div className="text-center mb-4">
      <ul>
        <li>
          <strong>Date: </strong> {event?.dates?.start?.localDate}
        </li>
        <li>
          <strong>Time: </strong>{' '}
          {timeConversion(event?.dates?.start?.localTime)}
        </li>
        {event?.pleaseNote && (
          <div className="mt-6 px-8">
            <p className=" text-sm">{event?.pleaseNote}</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default EventDate;
