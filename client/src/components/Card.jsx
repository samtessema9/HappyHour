import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import primaryContext from '../context/primaryContext'
import StarRating from './Rating';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const venueCard = ({venue}) => {
  const {setCurrentVenue} = useContext(primaryContext);
  const navigate = useNavigate()

  const handleClick = (e) => {
      setCurrentVenue(venue);
      navigate('/details')
  }


  return (
    <Card onClick={handleClick}>
      <CardMedia
        component="img"
        alt="Image Alt Text"
        height="200"
        image={venue.img}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {venue.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <StarRating />
          <p>{venue.hours[0]} - {venue.hours[1]}</p>
          <Button variant="text" color="primary">Details</Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default venueCard;