/** @format */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import countries from '../data/countries.json';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

export default function SearchCountryByName() {
  const [search, setSearch] = useState("");
  // const data = countries.features.

  function handleChange(event){
    setSearch(event.target.value);
    console.log(search)
  }

  return (
    <StyledBox>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor='outlined-adornment-amount'>
          Search Country by name
        </InputLabel>
        <OutlinedInput
          id='outlined-adornment-amount'
          // value={values.amount}
          onChange={(event) => handleChange(event)}
          value={search}
          label='Amount'
        />
      </FormControl>
      {countries.features.filter((val) => {if(!search){
        return null
        } else if(val.properties.ADMIN.toLowerCase().includes(search.toLowerCase())){
          return val;
        }}).map((val, key) => {
          return(
            <div key={key}>
              <p>{val.properties.ADMIN}</p>
            </div>
          )
        })}
    </StyledBox>
  );
}
const StyledBox = styled(Box)`
  width: 40vw;
  margin-top: 5rem;
`;
