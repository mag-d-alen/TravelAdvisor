/** @format */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';

export default function CountryProfileModal(props) {
  const { open, handleClose, info } = props;
  const {
    area,
    diseaseRiskLevel,
    areaRestrictions,
    summary,
    diseaseCases,
    hotspots,
  } = info;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <StyledBox>
        <StyledTitle id='modal-modal-title' variant='h6' component='h1'>
          {area.name}
        </StyledTitle>
        <StyledTitle id='modal-modal-title' variant='h6' component='h2'>
          disease Risk Level: {diseaseRiskLevel}
        </StyledTitle>
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
            key={restriction.date}
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
  background-color: #ffffffce;
  padding: 2rem;
  margin: 4rem 3rem 10rem 4rem;
  overflow: 'scroll';
`;
const StyledTitle = styled(Typography)`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`;
