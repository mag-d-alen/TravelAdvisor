/** @format */

import React, { useContext } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import axios from "axios";
import AuthContext from '../context/AuthContext';



export default function CountryCard(props) {
  const { name, summary, iataCode, risk } = props;
  const uri = `https://countryflagsapi.com/png/${iataCode}`;
  const token = JSON.parse(localStorage.getItem('token'));
   const { setSavedCountriesArray, savedCountriesArray } = useContext(AuthContext);
  

  const handleUnsaveCountry = () => {
    const isSaved = false;
    const removedCountry = {
      iataCode: iataCode,
    };
    const headerConfig = {
      "auth-token": `${token}`,
    };
    const url = "http://localhost:8000/api/home/save";
    axios
      .put(url, {
        savedCountry: removedCountry,
        isSaved: isSaved
      },{headers: headerConfig} )
      .catch((err) => {
       alert("couldn't remove the country");
       return
      });
      const updatedCountryArray = [...savedCountriesArray].filter((country)=> country.iataCode != removedCountry.iataCode)
    setSavedCountriesArray(updatedCountryArray);
  };


  return (
    <Card sx={{ width: 345, maxHeight:500, overflow: 'auto', margin: "1rem" }}>
      <CardMedia component='img' height='200' alt={name} src={uri} />
      <CardContent>
        <StyledCard>
          <Typography gutterBottom variant='h4' component='div'>
            {name}, {iataCode}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            risk: {risk}
          </Typography>
        </StyledCard>
        <Typography variant='body2' color='text.secondary'>
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleUnsaveCountry} size='small'>Remove from favorites</Button>
      </CardActions>
    </Card>
  );
}
const StyledCard = styled('div')`
  text-transform: uppercase;
`;
