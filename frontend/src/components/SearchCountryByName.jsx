/** @format */

import React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

export default function SearchCountryByName() {
  return (
    <StyledBox>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor='outlined-adornment-amount'>
          Search Country by name
        </InputLabel>
        <OutlinedInput
          id='outlined-adornment-amount'
          // value={values.amount}
          // onChange={handleChange}
          label='Amount'
        />
      </FormControl>
    </StyledBox>
  );
}
const StyledBox = styled(Box)`
  width: 40vw;
  margin-top: 5rem;
`;
