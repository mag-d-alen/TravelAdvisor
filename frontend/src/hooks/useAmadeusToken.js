/** @format */
import React, { useState, useEffect } from 'react';
const AMADEUS_KEY = 'GSBw0MO05313TZMgAGlimoAgAvOzolxH';
const AMADEUS_SECRET = 'Ahw2HArB4hMsqact';
const uri = 'https://test.api.amadeus.com/v1/';
const data = `grant_type=client_credentials&client_id=${AMADEUS_KEY}&client_secret=${AMADEUS_SECRET}`;
const axios = require('axios');

export default function useAmadeusToken() {
  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await axios.post(`${uri}security/oauth2/token`, data, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return token;
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
    return () => getToken();
  }, []);
}
