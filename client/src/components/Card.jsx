import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryContext } from '../context/PrimaryContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import StarRating from './Rating';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import TurnedInSharpIcon from '@mui/icons-material/TurnedInSharp';
import axios from 'axios';
import './index.css'

const VenueCard = ({venue}) => {
  const {setCurrentVenue, isLoggedIn, loggedInUser} = useContext(PrimaryContext);
  const navigate = useNavigate()
  const queryClient = useQueryClient();


  const updateUserFavorites = async ({ userId, venueId, isFavorite }) => {

    const updatedUser = {
      ...loggedInUser,
      favoriteVenues: isFavorite ? 
        loggedInUser.favoriteVenues.filter((id) => id !== venueId): // Add venueId to favorites
        [...loggedInUser.favoriteVenues, venueId], // Remove venueId from favorites
    };

    const response = await axios({
        url: `https://happyhour-api.onrender.com/users/${userId}`,
        method: 'PATCH',
        data: {
          favoriteVenues: updatedUser.favoriteVenues,
        }
    });
    console.log(response.data);
    return response.data; 
  };

  const mutation = useMutation(updateUserFavorites, {
    onMutate: ({ venueId, isFavorite }) => {
      const updatedUser = {
        ...loggedInUser,
        favoriteVenues: isFavorite
          ? [...loggedInUser.favoriteVenues, venueId]
          : loggedInUser.favoriteVenues.filter((id) => id !== venueId),
      };
      queryClient.setQueryData(['user', loggedInUser.id], updatedUser);
    },

    onSuccess: () => {
      
      queryClient.invalidateQueries(['user', loggedInUser.id]);
    },
  });

  const handleToggleFavorite = (venueId) => {
    if (loggedInUser) {
      const isFavorite = loggedInUser.favoriteVenues.includes(venueId);
      console.log(isFavorite)
      mutation.mutate({ 
        userId: loggedInUser._id, 
        venueId: venueId, 
        isFavorite });
    }
  };

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
        width="20"
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
          {isLoggedIn && (
            <IconButton
              color={loggedInUser.favoriteVenues.includes(venue._id) ? 'secondary' : 'default'}
              onClick={ () => handleToggleFavorite(venue._id)}
            >
              <TurnedInSharpIcon />
            </IconButton>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VenueCard;