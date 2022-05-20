import React from 'react';
import { Events } from '../types';
import EventDetail from './EventDetail';

interface Props {
  localEvents: Events[];
  title: string;
}

const LocalEvents = ({ title, localEvents }: Props) => {
  console.log(localEvents);
  return (
    <>
      <h1 className="text-center text-2xl font-bold mx-12 my-4">{title}</h1>

      <div className="flex items-center justify-center overflow-x-scroll mx-4 px-4">
        {localEvents.map((localEvent) => (
          <EventDetail event={localEvent} key={localEvent?.id} />
        ))}
      </div>
    </>
  );
};

export default LocalEvents;
