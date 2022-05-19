import { Events } from '../../types';
import BoxOfficeInfo from './BoxOfficeInfo';
import EventDate from './EventDate';
import EventName from './EventName';
import TicketInfo from './TicketInfo';
import TicketLimitInfo from './TicketLimitInfo';
import Venue from './Venue';

interface Props {
  event: Events;
}

const EventInformation = ({ event }: Props) => {
  return (
    <div className="flex min-h-screen mx-8">
      <EventName event={event} />
      <div className="eventDateAndTickets">
        <EventDate event={event} />
        <br />
        {event?.priceRanges && (
          <div className="ticketInfo">
            <TicketInfo event={event} />
            <TicketLimitInfo event={event} />
          </div>
        )}
      </div>

      <Venue event={event} />
      {event?._embedded?.venues[0]?.boxOfficeInfo && (
        <BoxOfficeInfo event={event} />
      )}
    </div>
  );
};

export default EventInformation;
