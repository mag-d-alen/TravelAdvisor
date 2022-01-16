/** @format */

import React from 'react';
import useLocation from '../hooks/useLocation';
import { MapContainer, Popup, Marker, GeoJSON } from 'react-leaflet';
import countries from '../data/countries.json';

export default function Map() {
  const [latitude, longitude] = useLocation();
  const countryStyle = {
    fillColor: 'tomato',
    fillOpacity: 0.5,
    color: 'black',
    weight: 0.5,
  };
  const onEachFeature = (feature, layer) => {
    const countryName = feature.properties.ADMIN;
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
