/** @format */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, IconButton, Toolbar, AppBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const navigation = useNavigate();
  const handleLogOut = () => {
    navigation('./signup');
  };

  return (
    <AppBar position='static' style={{ background: '#ff6347e3' }}>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          Travel Planner
        </Typography>
        <Button color='inherit' onClick={handleLogOut}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
