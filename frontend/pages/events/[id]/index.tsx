import Head from 'next/head';
import Link from 'next/link';
import EventInformation from '../../../components/EventInfo/EventInformation';
import { Events } from '../../../types';

const url = 'https://app.ticketmaster.com/discovery/v2/';

interface Props {
  event: Events;
}

const event = ({ event }: Props) => {
  console.log(event);

  return (
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>{event?.name} Details</title>
      </Head>

      <EventInformation event={event} />

      <Link href="/">
        <button className="w-[75px] rounded-[10px] mb-14 py-[10px] bg-[#65ccff] hover:opacity-75">
          Go Back
        </button>
      </Link>
    </div>
  );
};

// static paths
export const getStaticPaths = async () => {
  const res = await fetch(
    `${url}events.json?countryCode=US&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await res.json();
  const events = data._embedded.events;

  const ids = events.map((event: any) => event.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// static props
export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `${url}events/${context.params.id}.json?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const event = await res.json();

  return {
    props: { event },
  };
};

export default event;
