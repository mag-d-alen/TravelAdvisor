/** @format */
import { useState, useEffect } from 'react';
export default function useLocation() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };
  useEffect(() => {
    getLocation();
    return () => getLocation();
  }, []);
  return [latitude, longitude];
}
