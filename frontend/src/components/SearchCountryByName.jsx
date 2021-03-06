/** @format */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import countries from '../data/countries.json';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import CountryProfileModal from './CountryProfileModal';
import SearchIcon from '@mui/icons-material/Search';
import getCountryISO2 from 'country-iso-3-to-2';
import axios from 'axios';
import getToken from '../utils/getAmadeusToken';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
// const uri = 'https://test.api.amadeus.com/v1/';

export default function SearchCountryByName() {
  const [search, setSearch] = useState('');
  const [countryCovidInfo, setCountryCovidInfo] = useState();
  const [open, setOpen] = useState(false);
  const [searchResultsOpen, setSearchResultsOpen] = useState(false);
  const uri = 'http://localhost:8000/api/api/country';

  const getCountryInfo = async (code) => {
    try {
      const countryData = await axios.get(`${uri}/${code}`);
      setCountryCovidInfo(countryData.data);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const findCountryInfo = (value) => {
    const code = countries.features.filter((val) => {  
      if(val.properties.ADMIN.toLowerCase().includes(value.toLowerCase()))return val.properties.ISO_A3
          })
    const countryCode = code[0].properties.ISO_A3;
    console.log(countryCode);
    const iso2code = getCountryISO2(countryCode);
    getCountryInfo(iso2code);
  };

  function handleChange(event) {
    setSearch(event.target.value);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='search'>
       <StyledBox>
      <Stack spacing={2} fullWidth >
      <Autocomplete
        freeSolo
        onChange={(event, value) => findCountryInfo(value)}
        disableClearable

        options={countries.features.map((option) => option.properties.ADMIN)}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search Country by name'
             onChange={(event) => handleChange(event)}
            color="warning"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
    </StyledBox>
    {open && (
        <CountryProfileModal
          open={open}
          handleClose={handleClose}
          info={countryCovidInfo}
        />)}
    </div>
  );
}
const StyledBox = styled(Box)`
  width: 100%;
  margin: 0 1rem;
`;
