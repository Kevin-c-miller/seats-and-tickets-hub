import Link from 'next/link';
import { Events } from '../types';
import { timeConversion } from '../utilities/timeConversion';

interface Props {
  event: Events;
}

const EventDetail = ({ event }: Props) => {
  return (
    <Link href="/events/[id]" as={`events/${event?.id}`}>
      <div className="flex flex-col items-start justify-center w-[250px] h-[250px] border-2 border-black rounded-xl m-4 p-3 cursor-pointer ">
        <div className="p-2 h-[50%] w-[100%]">
          <h4 className="text-base text-center font-bold">{event?.name}</h4>
        </div>
        <div className="flex flex-col items-center justify-start p-4 h-[50%] w-[100%]">
          <h5 className="font-medium m-2">{event?.dates?.start?.localDate}</h5>
          <h5 className="font-medium">
            {timeConversion(event?.dates?.start?.localTime)}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default EventDetail;
