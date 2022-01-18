/** @format */

import React from 'react';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function CountryCard(props) {
  const { name, summary, iataCode, risk } = props;
  const uri = `https://countryflagsapi.com/png/${iataCode}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height='140' alt='press photo' src={uri} />
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
        <Button size='small'>Remove from favourites</Button>
      </CardActions>
    </Card>
  );
}
const StyledCard = styled('div')`
  text-transform: uppercase;
`;
