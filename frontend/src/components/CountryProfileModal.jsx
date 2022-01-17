/** @format */

import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { Modal, Box, Typography, Button, Alert } from '@mui/material';
import styled from '@emotion/styled';

export default function CountryProfileModal(props) {
  const { setSavedCountriesArray, savedCountriesArray } =
    useContext(AuthContext);
  const [countryAdded, setCountryAdded] = useState(false);
  const [alert, setAlert] = useState(false);
  const { open, handleClose, info } = props;
  const {
    area,
    diseaseRiskLevel,
    areaRestrictions,
    summary,
    diseaseCases,
    hotspots,
  } = info;

  useEffect(() => {
    savedCountriesArray.length > 0 &&
      savedCountriesArray.forEach((country) => {
        if (country.iataCode === area.iataCode) {
          return setCountryAdded(true);
        }
      });
  }, []);

  const handleSaveCountry = () => {
    const savedCountry = {
      name: area.name,
      risk: diseaseRiskLevel,
      summary: summary.replace(/(<([^>]+)>)/gi, ''),
      iataCode: area.iataCode,
    };
    setSavedCountriesArray((prevState) => [...prevState, savedCountry]);
    setCountryAdded(true);
    setAlert(true);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <StyledBox>
        <StyledDiv>
          <StyledTitle id='modal-modal-title' variant='h6' component='h1'>
            {area.name}
          </StyledTitle>
          <StyledTitle id='modal-modal-title' variant='h6' component='h2'>
            disease Risk Level: {diseaseRiskLevel}
          </StyledTitle>
          <StyledButton onClick={handleSaveCountry} disabled={countryAdded}>
            save country
          </StyledButton>
          {alert && (
            <Alert severity='success'>
              {area.name} has been successfully added to your countries
            </Alert>
          )}
        </StyledDiv>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          {summary?.replace(/(<([^>]+)>)/gi, '')}
        </Typography>
        {diseaseCases && (
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Reported cases on {diseaseCases.date}: {diseaseCases.confirmed},
            deaths: {diseaseCases.deaths}
            {hotspots && (
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                hotspots: {hotspots.replace(/(<([^>]+)>)/gi, '')}
              </Typography>
            )}
          </Typography>
        )}
        {areaRestrictions.map((restriction) => (
          <Typography
            key={Math.random()}
            id='modal-modal-description'
            sx={{ mt: 2 }}
          >
            {restriction.date} {restriction.text?.replace(/(<([^>]+)>)/gi, '')}
          </Typography>
        ))}
      </StyledBox>
    </Modal>
  );
}
const StyledBox = styled(Box)`
  height: 80%;
  background-color: #ffffffce;
  padding: 2rem;
  margin: 4rem 3rem 10rem 4rem;
  overflow: scroll;
`;
const StyledDiv = styled('div')`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;
const StyledTitle = styled(Typography)`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;
const StyledButton = styled(Button)`
  margin: 2rem auto;
  color: white;
  background-color: #ff6347d8;

  &:hover {
    background-color: #c9442cc5;
  }
`;
