import { useContext } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import VenueCard from '../components/Card';
import { PrimaryContext } from '../context/PrimaryContext';

const FavoriteVenues = () => {
  const { loggedInUser } = useContext(PrimaryContext); 

  const { data: favoriteVenues, isLoading, isError } = useQuery({
    queryKey: ['favoriteVenues'],
    queryFn: async () => {
      const venueIds = loggedInUser.favoriteVenues;
      const venueRequests = venueIds.map(async (venueId) => {
        const response = await axios({
          method: 'get',
          url: `http://localhost:3001/venues/${venueId}`,
        });
        return response.data;
      });

      const favoriteVenuesData = await Promise.all(venueRequests);
      return favoriteVenuesData;
    },
    enabled: loggedInUser && loggedInUser.favoriteVenues.length > 0, // Only fetch if there are favorite venues
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading favorite venues.</div>;
  }

  return (
    <div>
      <h2>Favorite Venues</h2>
      <div className="venue-list">
        {favoriteVenues?.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteVenues;