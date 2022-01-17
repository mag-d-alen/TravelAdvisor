/** @format */

import React, { useContext } from 'react';
import CountryCard from './CountryCard';
import AuthContext from '../context/AuthContext';

export default function ChosenCountriesList() {
  const { savedCountriesArray } = useContext(AuthContext);
  return (
    <div>
      {savedCountriesArray.map((country) => {
        const { name, summary, iataCode, risk } = country;
        return (
          <CountryCard
            key={Math.random()}
            name={name}
            summary={summary}
            iataCode={iataCode}
            risk={risk}
          />
        );
      })}
    </div>
  );
}
