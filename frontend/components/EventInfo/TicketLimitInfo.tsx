import React from 'react';
import { Events } from '../../types';

interface Props {
  event: Events;
}

const TicketLimitInfo = ({ event }: Props) => {
  return (
    <div className="ticketLimitInfo">
      <h6>
        {event?.ticketLimit?.info}
        <br />

        {event?._embedded?.venues[0]?.boxOfficeInfo.acceptedPaymentDetail}
      </h6>
    </div>
  );
};

export default TicketLimitInfo;
