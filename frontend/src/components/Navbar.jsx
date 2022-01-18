/** @format */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Toolbar, AppBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const useStyles = makeStyles(() => ({
  title: {
    padding: '0.5rem',
    flexGrow: 1,
    textTransform: 'uppercase',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const navigation = useNavigate();
  const handleNavigation = (route) => {
    navigation(route);
  };

  return (
    <AppBar position='static' style={{ background: '#ff6347e3' }}>
      <Toolbar>
        <StyledButton onClick={() => handleNavigation('/')}>Home</StyledButton>
        <StyledButton onClick={() => handleNavigation('/profile')}>
          Saved Countries
        </StyledButton>
        <Typography variant='h3' className={classes.title}>
          Travel Planner
        </Typography>
        <StyledButton onClick={() => handleNavigation('/login')}>
          Log Out
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
