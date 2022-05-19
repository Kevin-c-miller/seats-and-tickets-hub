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
    <div className="eventDetails">
      <EventName event={event} />
      <div className="eventDateAndTickets">
        <EventDate event={event} />
        <br />
        <div className="ticketInfo">
          <TicketInfo event={event} />

          <TicketLimitInfo event={event} />
        </div>
      </div>

      <Venue event={event} />

      <BoxOfficeInfo event={event} />
    </div>
  );
};

export default EventInformation;
