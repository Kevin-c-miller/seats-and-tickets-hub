import React from 'react';
import { Events } from '../../types';

interface Props {
  event: Events;
}

const Venue = ({ event }: Props) => {
  return (
    <div className="venueInfo">
      <h4>{event?._embedded?.venues[0]?.name}</h4>
      <h5>
        {event?._embedded?.venues[0]?.address?.line1},{' '}
        {event?._embedded?.venues[0]?.city?.name},{' '}
        {event?._embedded?.venues[0]?.state?.stateCode}{' '}
        {event?._embedded?.venues[0]?.postalCode},{' '}
        {event?._embedded?.venues[0]?.country?.name}
      </h5>

      <div className="venueImage">
        <img
          src={event?._embedded?.venues[0].images[0]?.url}
          alt={event?._embedded.venues[0]?.name}
        />
      </div>
    </div>
  );
};

export default Venue;
