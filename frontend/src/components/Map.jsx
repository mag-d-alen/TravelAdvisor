/** @format */

import React, { useState, useEffect } from 'react';
import useLocation from '../hooks/useLocation';
import { MapContainer, Popup, Marker, GeoJSON } from 'react-leaflet';
import countries from '../data/countries.json';
import useAmadeusToken from '../hooks/useAmadeusToken.js';

import axios from 'axios';
// const AMADEUS_KEY = 'GSBw0MO05313TZMgAGlimoAgAvOzolxH';
// const AMADEUS_SECRET = 'Ahw2HArB4hMsqact';
const uri = 'https://test.api.amadeus.com/v1/';
// const data = `grant_type=client_credentials&client_id=${AMADEUS_KEY}&client_secret=${AMADEUS_SECRET}`;

export default function Map() {
  useAmadeusToken();

  const getCountryInfo = async (code) => {
    const data = await axios.get(
      `${uri}duty-of-care/diseases/covid19-area-report`
    );
    console.log(data);
  };

  const [latitude, longitude] = useLocation();
  const countryStyle = {
    fillColor: 'tomato',
    fillOpacity: 0.5,
    color: 'black',
    weight: 0.5,
  };

  const findCountryInfo = (e) => {
    // console.log(amadeusToken);
    const countryCode = e.target.feature.properties.ISO_A3;
    getCountryInfo(countryCode);
  };
  const onEachFeature = (feature, layer) => {
    const countryName = feature.properties.ADMIN;
    layer.on({ click: findCountryInfo });
    layer.bindPopup(countryName);
  };

  return (
    <MapContainer
      style={{ height: '100vh' }}
      center={[latitude, longitude]}
      zoom={2}
      scrollWheelZoom={true}
    >
      <GeoJSON
        data={countries.features}
        style={countryStyle}
        onEachFeature={onEachFeature}
      />
      <Marker position={[latitude, longitude]}>
        <Popup>you are here</Popup>
      </Marker>
    </MapContainer>
  );
}
