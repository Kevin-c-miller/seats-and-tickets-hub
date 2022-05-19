import React from 'react';
import { Events } from '../../types';
interface Props {
  event: Events;
}

const TicketInfo = ({ event }: Props) => {
  return (
    <div className="flex items-center justify-center my-4 py-3">
      <ul>
        <li className=" ">
          <span className="text-xl underline font-bold">
            Ticket Information{' '}
          </span>
          <ul>
            <li>
              <strong>Ticket Type:</strong> {event?.priceRanges[0]?.type}
            </li>
            <li>
              <strong>Currency: </strong> {event?.priceRanges[0]?.currency}
            </li>
            <li>
              <strong>Min Price: </strong> $
              {event?.priceRanges[0]?.min.toFixed(2)}
            </li>
            <li>
              <strong>Max Price: </strong> $
              {event?.priceRanges[0]?.max.toFixed(2)}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TicketInfo;
