import Link from 'next/link';
import { Events } from '../types';
import { timeConversion } from '../utilities/timeConversion';

interface Props {
  event: Events;
}

const EventDetail = ({ event }: Props) => {
  return (
    <Link href="/events/[id]" as={`events/${event?.id}`}>
      <div
        style={{
          width: '20%',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid #000',
          borderRadius: '10px',
          margin: '20px',
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        <h4>{event?.name}</h4>

        <h5>{event?.dates?.start?.localDate}</h5>
        <h5>{timeConversion(event?.dates?.start?.localTime)}</h5>
      </div>
    </Link>
  );
};

export default EventDetail;
