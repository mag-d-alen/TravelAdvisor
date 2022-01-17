/** @format */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import countries from '../data/countries.json';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import CountryProfileModal from './CountryProfileModal';
import getCountryISO2 from 'country-iso-3-to-2';
import axios from 'axios';
import getToken from '../utils/getAmadeusToken';


import FormControl from '@mui/material/FormControl';
const uri = 'https://test.api.amadeus.com/v1/';


export default function SearchCountryByName() {
  const [search, setSearch] = useState("");
  const [countryCovidInfo, setCountryCovidInfo] = useState();
  const [open, setOpen] = useState(false);
  
  
  // const data = countries.features.

  const getCountryInfo = async (code) => {
    const token = await getToken();
    console.log(token);
    const data = await axios.get(
      `${uri}duty-of-care/diseases/covid19-area-report?countryCode=${code}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setCountryCovidInfo(data.data.data);
    setOpen(true);
  };

  const findCountryInfo = (e) => {
    const countryCode = e;
    console.log(countryCode)
    const iso2code = getCountryISO2(countryCode);
    getCountryInfo(iso2code);
  };

  function handleChange(event){
    setSearch(event.target.value);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
      {countries.features.filter((val) => {if(search.length<2){
        return null
        } else if(val.properties.ADMIN.toLowerCase().includes(search.toLowerCase())){
          return val;
        }}).map((val, key) => {
          return(
            <div key={key}>
              <p  onClick={(event)=>findCountryInfo(val.properties.ISO_A3)}>{val.properties.ADMIN}</p>
            </div>
          )
        })}
    </StyledBox>
     {open && (
        <CountryProfileModal
          open={open}
          handleClose={handleClose}
          info={countryCovidInfo}
        />
      )}
    </>
  );
}
const StyledBox = styled(Box)`
  width: 40vw;
  margin-top: 5rem;
`;
