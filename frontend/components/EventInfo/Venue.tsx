import React from 'react';
import { Events } from '../../types';

interface Props {
  event: Events;
}

const Venue = ({ event }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="text-2xl">{event?._embedded?.venues[0]?.name}</h4>
      <h5>
        {event?._embedded?.venues[0]?.address?.line1},{' '}
        {event?._embedded?.venues[0]?.city?.name},{' '}
        {event?._embedded?.venues[0]?.state?.stateCode}{' '}
        {event?._embedded?.venues[0]?.postalCode},{' '}
        {event?._embedded?.venues[0]?.country?.name}
      </h5>
      {event?._embedded?.venues[0]?.images ? (
        <div className="m-4 p-4">
          <img
            src={event?._embedded?.venues[0].images[0]?.url}
            alt={event?._embedded.venues[0]?.name}
            className="rounded-[20px]"
          />
        </div>
      ) : (
        <div className="m-4 p-4">
          <img
            src={event?.images[0]?.url}
            alt={event?.name}
            className="rounded-[20px]"
          />
        </div>
      )}
    </div>
  );
};

export default Venue;
