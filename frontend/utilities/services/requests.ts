import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

// get searched events
export const getSearchedEvents = async (search: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL}events/${search}.json?countryCode=US&apikey=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// get local events (grab location)
export const getLocalEvents = async (location: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL}events.json?countryCode=US&apikey=${API_KEY}&latlong=${location}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// structure requests with no arguments as an object and export just the one object
const requests = {
  getAllEvents: `${BASE_URL}events.json?countryCode=US&apikey=${API_KEY}`,
};

export default requests;
