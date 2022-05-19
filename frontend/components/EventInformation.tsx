import React from 'react';
import { Events } from '../types';

interface Props {
  event: Events;
}
// TODO: break down into smaller components

const EventInformation = ({ event }: Props) => {
  // convert miliary time to standard time
  const timeConversion = (militaryTime: string) => {
    const [hours, minutes, seconds] = militaryTime.split(':');
    return `${+hours > 12 ? +hours - 12 : hours}:${minutes}${
      seconds ? `:${seconds}` : ''
    } ${+hours >= 12 ? 'PM' : 'AM'}`;
  };
  return (
    <div className="eventDetails">
      <h3>
        <a href={event?.url} target="_blank" rel="noopener noreferrer">
          {event?.name}
        </a>
      </h3>
      <div className="eventDateAndTickets">
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
          <br />
          <div className="ticketInfo">
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
            <div className="ticketLimitInfo">
              <h6>{event?.ticketLimit?.info}</h6>
              <p>
                {
                  event?._embedded?.venues[0]?.boxOfficeInfo
                    .acceptedPaymentDetail
                }
              </p>
            </div>
          </div>
        </ul>
      </div>

      <div className="venueInfo">
        <h4>{event?._embedded?.venues[0]?.name}</h4>
        <h5>
          {event?._embedded?.venues[0]?.address?.line1},{' '}
          {event?._embedded?.venues[0]?.city?.name},{' '}
          {event?._embedded?.venues[0]?.state?.stateCode}{' '}
          {event?._embedded?.venues[0]?.postalCode},{' '}
          {event?._embedded?.venues[0]?.country?.name}
        </h5>
      </div>

      <div className="venueImage">
        <img
          src={event?._embedded?.venues[0].images[0]?.url}
          alt={event?._embedded.venues[0]?.name}
        />
      </div>

      <div className="boxOfficeInfo">
        <p>{event?._embedded?.venues[0]?.boxOfficeInfo.openHoursDetail}</p>
      </div>
    </div>
  );
};

export default EventInformation;
