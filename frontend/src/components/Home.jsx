/** @format */

import React from 'react';
import Map from './Map';
import ChosenCountriesList from './ChosenCountriesList';
import SearchCountryByName from './SearchCountryByName';
import { Modal, Box, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <>
      <StyledBox>
        <Map />
        <SearchCountryByName />
      </StyledBox>
      <StyledBox>
        <ChosenCountriesList />
      </StyledBox>
    </>
  );
}
const StyledBox = styled(Box)`
  padding: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
`;
