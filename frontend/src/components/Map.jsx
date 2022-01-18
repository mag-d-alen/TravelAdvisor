/** @format */

import React, { useState } from 'react';
import useLocation from '../hooks/useLocation';
import { MapContainer, Popup, Marker, GeoJSON } from 'react-leaflet';
import countries from '../data/countries.json';
import getCountryISO2 from 'country-iso-3-to-2';
import axios from 'axios';
import getToken from '../utils/getAmadeusToken';
import CountryProfileModal from './CountryProfileModal';
import styled from '@emotion/styled';

const uri = 'https://test.api.amadeus.com/v1/';

export default function Map() {
  const [latitude, longitude] = useLocation();
  const [countryCovidInfo, setCountryCovidInfo] = useState();
  const [open, setOpen] = useState(false);

  const getCountryInfo = async (code) => {
    const token = await getToken();
    console.log(token);
    const data = await axios.get(
      `${uri}duty-of-care/diseases/covid19-area-report?countryCode=${code}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setCountryCovidInfo(data.data.data);
    setOpen(true);
  };

  const findCountryInfo = (e) => {
    const countryCode = e.target.feature.properties.ISO_A3;
    const iso2code = getCountryISO2(countryCode);
    getCountryInfo(iso2code);
  };

  const onEachFeature = (feature, layer) => {
    const countryName = feature.properties.ADMIN;
    layer.on({ click: findCountryInfo });
    layer.bindPopup(countryName);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const countryStyle = {
    fillColor: 'tomato',
    fillOpacity: 0.5,
    color: 'black',
    weight: 0.5,
  };

  return (
    <>
      <StyledMapContainer
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
      </StyledMapContainer>
      {open && (
        <CountryProfileModal
          open={open}
          handleClose={handleClose}
          info={countryCovidInfo}
        />
      )}
    </>
  );
}
const StyledMapContainer = styled(MapContainer)`
  height: 80vh;
  width: 100%;
  border-radius: 4px;
  margin: 1rem;
`;
