import React from 'react';
import { Events } from '../../types';
interface Props {
  event: Events;
}

const TicketInfo = ({ event }: Props) => {
  return (
    <div className="tickets">
      <ul>
        <li>
          <strong>Ticket Information: </strong>
          <ul>
            <li>
              <strong>Ticket Type:</strong> {event?.priceRanges[0]?.type}
            </li>
            <li>
              <strong>Currency: </strong> {event?.priceRanges[0]?.currency}
            </li>
            <li>
              <strong>Min Price: </strong> ${event?.priceRanges[0]?.min}
            </li>
            <li>
              <strong>Max Price: </strong> ${event?.priceRanges[0]?.max}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TicketInfo;
