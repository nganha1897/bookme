import fetch from "node-fetch";
import NodeGeocoder from 'node-geocoder';

const options = {
  fetch: fetch,
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: process.env.GEOCODER_API_KEY, 
  formatter: null 
};

const geoCoder = NodeGeocoder(options);

export default geoCoder;