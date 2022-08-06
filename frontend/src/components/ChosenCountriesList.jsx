/** @format */

import React, { useContext } from 'react';
import CountryCard from './CountryCard';
import { AuthContext } from '../context/AuthContext';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

export default function ChosenCountriesList() {
  const { savedCountriesArray } = useContext(AuthContext);
  return (
    <StyledContainer>
      {savedCountriesArray.length > 0 ? (
        savedCountriesArray.map((country) => {
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
        })
      ) : (
        <StyledTitle component='h3'>...will appear here</StyledTitle>
      )}
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const StyledTitle = styled(Typography)`
  text-transform: uppercase;
  font-family: 'Lato' sans-serif;
  padding: 0.5rem;
`;
