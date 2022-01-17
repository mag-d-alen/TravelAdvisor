/** @format */

import axios from 'axios';
// const AMADEUS_KEY = 'GSBw0MO05313TZMgAGlimoAgAvOzolxH';
// const AMADEUS_SECRET = 'Ahw2HArB4hMsqact';
const AMADEUS_KEY = 'luFeptAoPlKKTGZNpFB5PwQAmWw1DW0a';
const AMADEUS_SECRET = 'DJe9SKL7QTO17zx3';
const uri = 'https://test.api.amadeus.com/v1/';
const data = `grant_type=client_credentials&client_id=${AMADEUS_KEY}&client_secret=${AMADEUS_SECRET}`;
export default async function getToken() {
  try {
    const response = await axios.post(`${uri}security/oauth2/token`, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    const token = response.data.access_token;
    return token;
  } catch (error) {
    console.log(error);
  }
}
