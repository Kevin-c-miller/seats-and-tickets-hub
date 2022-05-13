const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

// TODO:  user long/latitude for location for local events to user

// structure requests as an object and export just the one object
const requests = {
  getAllEvents: `${BASE_URL}events.json?countryCode=US&apikey=${API_KEY}`,
};

export default requests;
