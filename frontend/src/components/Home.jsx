/** @format */

import React from 'react';
import Map from './Map';
import Navbar from './Navbar';
import NewsFeed from './NewsFeed';
import SearchCountryByName from './SearchCountryByName';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <>
      <Navbar />
      <StyledWrapper>
        <StyledBox>
          <SearchCountryByName />
          <Map />
        </StyledBox>
        <StyledOtherBox>
          <NewsFeed />
        </StyledOtherBox>
      </StyledWrapper>
    </>
  );
}
const StyledWrapper = styled(Box)`
  display: flex;
  height: 100;
`;
const StyledBox = styled(Box)`
  height: 100%;
  width: 60%;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledOtherBox = styled(Box)`
  height: 100%;
  width: 40%;

  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
