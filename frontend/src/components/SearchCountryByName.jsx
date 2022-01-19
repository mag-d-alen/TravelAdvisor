/** @format */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import countries from '../data/countries.json';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import CountryProfileModal from './CountryProfileModal';
import getCountryISO2 from 'country-iso-3-to-2';
import axios from 'axios';
import getToken from '../utils/getAmadeusToken';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
const uri = 'https://test.api.amadeus.com/v1/';

export default function SearchCountryByName() {
  const [search, setSearch] = useState('');
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
        <TextField label= 'Search Country by name' color="warning" placeholder='Country name' variant="outlined"  fullWidth  value={search} onChange={(event) => handleChange(event)} />

        {countries.features
          .filter((val) => {
            if (search.length < 2) {
              return null;
            } else if (
              val.properties.ADMIN.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className='search' key={key}>
                <p className="search-result" onClick={(event) => findCountryInfo(val.properties.ISO_A3)}>
                  {val.properties.ADMIN}
                </p>
                 <Divider />
              </div>
            );
          })}
      </StyledBox>
      {open && (
        <CountryProfileModal
          open={open}
          handleClose={handleClose}
          info={countryCovidInfo}
        />
      )}
    </div>
  );
}
const StyledBox = styled(Box)`
  width: 100%;
  margin: 0 1rem;
`;
