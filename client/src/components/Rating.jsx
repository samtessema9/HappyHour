import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const StarRating = ({rating}) => {

  return (
    <Box component="fieldset" borderColor="transparent">
      <Rating
        name="star-rating"
        value={rating}
        precision={0.5} // Use 0.5 precision for half-star ratings
      />
    </Box>
  );
};

export default StarRating;