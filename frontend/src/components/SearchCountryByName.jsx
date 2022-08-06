/** @format */

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import countries from '../data/countries.json';
import TextField from '@mui/material/TextField';
import CountryProfileModal from './CountryProfileModal';
import getCountryISO2 from 'country-iso-3-to-2';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { uri } from '../data/data';

export const SearchCountryByName = () => {
  const [countryCovidInfo, setCountryCovidInfo] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const findCountryInfo = (value) => {
    const code = countries.features.filter((val) => {
      return val.properties.ADMIN.toLowerCase().includes(value?.toLowerCase())
        ? val.properties.ISO_A3
        : null;
    });
    const countryCode = code[0].properties.ISO_A3;
    const iso2code = getCountryISO2(countryCode);
    getCountryInfo(iso2code);
  };

  const getCountryInfo = async (code) => {
    try {
      const countryData = await axios.get(`${uri}/${code}`);
      setCountryCovidInfo(countryData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    countryCovidInfo && setOpen(true);
  }, [countryCovidInfo]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='search'>
      <StyledBox>
        <Stack spacing={2} fullWidth>
          <Autocomplete
            disableClearable
            value={value}
            options={countries.features.map(
              (option) => option.properties.ADMIN
            )}
            onChange={(event, newValue) => {
              setValue(newValue);
              findCountryInfo(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label='Select country' color='warning' />
            )}
          />
        </Stack>
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
};
const StyledBox = styled(Box)`
  width: 100%;
  margin: 0 1rem;
`;
