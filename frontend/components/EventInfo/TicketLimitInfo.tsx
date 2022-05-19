import React from 'react';
import { Events } from '../../types';

interface Props {
  event: Events;
}

const TicketLimitInfo = ({ event }: Props) => {
  return (
    <div className="flex items-center justify-end m-4 p-2 max-w-lg">
      <h6>
        <span className="text-sm italic">***{event?.ticketLimit?.info}</span>
        <br />
        <span className="text-sm">
          <strong> Accepted Payments:</strong>{' '}
          {event?._embedded?.venues[0]?.boxOfficeInfo.acceptedPaymentDetail}
        </span>
      </h6>
    </div>
  );
};

export default TicketLimitInfo;
