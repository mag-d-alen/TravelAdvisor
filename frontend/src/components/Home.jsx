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
        <StyledBox2>
          <NewsFeed />
        </StyledBox2>
      </StyledWrapper>
    </>
  );
}
const StyledWrapper = styled('Box')`
  display: flex;
  height: 100vh;
`;
const StyledBox = styled('Box')`
  width: 60%;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledBox2 = styled('Box')`
  width: 40%;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
