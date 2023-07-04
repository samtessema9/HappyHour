import {useState} from 'react';
import StarRating from './Rating';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const CustomCard = ({img, name, hours}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="Image Alt Text"
        height="200"
        image={img}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <StarRating />
          <p>{hours[0]} - {hours[1]}</p>
          <Button variant="text" color="primary">Details</Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;