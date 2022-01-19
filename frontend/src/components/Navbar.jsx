/** @format */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Toolbar, AppBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {
  const navigation = useNavigate();
  const handleNavigation = (route) => {
    navigation(route);
  };

  return (
    <AppBar position='static' style={{ background: '#ff6347e3' }}>
      <Toolbar>
        <StyledTitle variant='h4'>Travel Planner</StyledTitle>
        <StyledButton onClick={() => handleNavigation('/')}>
          <HomeIcon />
        </StyledButton>
        <StyledButton onClick={() => handleNavigation('/profile')}>
          <AccountBoxIcon />
        </StyledButton>

        <StyledButton onClick={() => handleNavigation('/login')}>
          <LogoutIcon />
        </StyledButton>
      </Toolbar>
    </AppBar>
  );
}
const StyledButton = styled(Button)`
  color: white;
  background-color: inherit;

  &:hover {
    background-color: #c9442cc5;
  }
`;
const StyledTitle = styled(Typography)`
  color: white;
  background-color: inherit;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  padding: 0.5rem;
  margin-right: auto;
`;
