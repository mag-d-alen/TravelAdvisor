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
      <StyledBox>
        <ChosenCountriesList />
      </StyledBox>
    </>
  );
}
const StyledBox = styled(Box)`
  padding: 1rem;
  margin: 1rem;
`;

