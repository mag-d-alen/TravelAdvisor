/** @format */

import React, { useContext } from 'react';
import CountryCard from './CountryCard';
import AuthContext from '../context/AuthContext';
import Grid from "@mui/material/Grid";


export default function ChosenCountriesList() {
  const { savedCountriesArray, setSavedCountriesArray } = useContext(AuthContext);

  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly", flexWrap: "wrap"}}>
      {/* <Grid container spacing={2} item xs={3}> */}
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
      {/* </Grid> */}
    </div>
  );
}
