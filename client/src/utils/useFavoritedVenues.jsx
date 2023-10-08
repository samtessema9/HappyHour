import { useQuery } from 'react-query';
import axios from 'axios';
// import PrimaryContext 

const fetchVenueById = async (id) => {
  const response = await axios.get(`http://localhost:3001/venues/${id}`);
  return response.data;
};

const useFavoritedVenues = (favoritedVenues) => {
  const queries = favoritedVenues.map((id) => ({
    queryKey: ['venue', id],
    queryFn: () => fetchVenueById(id),
  }));

  const results = useQuery(queries);

  return results;
};

export default useFavoritedVenues;



// import { useQuery } from 'react-query';
// import axios from 'axios';

// const fetchVenuesByUserFavorites = async (favoritedVenues) => {
//   const venuePromises = favoritedVenues.map(async (id) => {
//     const response = await axios.get(`http://localhost:3001/venues/${id}`);
//     return response.data;
//   });

//   return Promise.all(venuePromises);
// };

// const useFavoritedVenues = (favoritedVenues) => {
//   const { data, isLoading, isError } = useQuery('favoritedVenues', () =>
//     fetchVenuesByUserFavorites(favoritedVenues)
//   );

//   return { data, isLoading, isError };
// };

// export default useFavoritedVenues;
