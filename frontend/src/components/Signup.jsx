/** @format */

import React, { useState } from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export default function Signup() {
  const paperStyle = {
    padding: 40,
    height: '70vh',
    width: '50vw',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#e14f4f',
  };

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  function handleSignupSubmit(event) {
    if (password === verifyPassword) {
      const url = 'http://localhost:8000/api/user/register';
      axios
        .post(url, {
          name: name,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then(() => {
          setName('');
          setLastName('');
          setEmail('');
          window.location.pathname = '/login';
        })
        .catch((error) => {
          console.log(`Error:  ${error}`);
        });
    } else {
      alert('passwords do not match');
    }
    event.preventDefault();
    setPassword('');
    setVerifyPassword('');
  }
  return (
    <Grid className='registration'>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <h2>Signup</h2>
        </Grid>
        <TextField
          label='First Name'
          color='warning'
          placeholder='Enter your first-name'
          fullWidth
          variant='standard'
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <TextField
          label='Last Name'
          color='warning'
          placeholder='Enter your last-name'
          fullWidth
          variant='standard'
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />
        <TextField
          label='Email'
          color='warning'
          placeholder='Enter your email'
          fullWidth
          variant='standard'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <TextField
          label='Password'
          color='warning'
          placeholder='Enter your password'
          type='password'
          variant='standard'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          fullWidth
          required
        />
        <TextField
          label='Verify Password'
          color='warning'
          placeholder='Verify your password'
          type='password'
          variant='standard'
          fullWidth
          onChange={(e) => setVerifyPassword(e.target.value)}
          value={verifyPassword}
          required
        />
        <StyledButton
          onClick={(event) => handleSignupSubmit(event)}
          variant='contained'
          type='submit'
        >
          Signup
        </StyledButton>
        <Link to='/login' className='register'>
          Already have an account?
        </Link>
      </Paper>
    </Grid>
  );
}

const StyledButton = styled(Button)`
  color: white;
  background-color: #e14f4f;

  &:hover {
    background-color: #c9442cc5;
  }
`;
