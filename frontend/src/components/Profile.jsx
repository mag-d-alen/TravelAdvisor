/** @format */

import React from 'react';
import ChosenCountriesList from './ChosenCountriesList';
import { Modal, Box, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import Navbar from './Navbar';

export default function Profile() {
  return (
    <>
      <Navbar />
      <StyledTitle align='center'>Your saved countries</StyledTitle>
      <StyledBox>
        <ChosenCountriesList />
      </StyledBox>
    </>
  );
}
const StyledBox = styled(Box)`
  padding: 1rem;
  margin: 0 1rem;
`;
const StyledTitle = styled(Typography)`
  text-transform: uppercase;
  font-family: 'Lato' sans-serif;
  padding: 0.5rem;
  margin-top: 2rem;
  color: #ff745b;
  font-size: 2rem;
  font-weight: 500;
`;
