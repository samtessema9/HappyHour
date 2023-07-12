import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryContext } from '../context/primaryContext';
import StarRating from './Rating';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const VenueCard = ({venue}) => {
  const {setCurrentVenue} = useContext(PrimaryContext);
  const navigate = useNavigate()

  const handleClick = (e) => {
      setCurrentVenue(venue);
      navigate('/details')
  }

  return (
    <Card >
      <CardMedia
        component="img"
        alt="Image Alt Text"
        height="200"
        image={venue.img}
        referrerPolicy='no-referrer'
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {venue.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <StarRating rating={venue.rating} />
          <p>{venue.hours.start} - {venue.hours.end}</p>
          <Button variant="text" color="primary" onClick={handleClick}>Details</Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VenueCard;