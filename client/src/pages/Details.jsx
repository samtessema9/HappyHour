import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PrimaryContext } from '../context/PrimaryContext';
import Map from '../components/Map';
import StarRating from '../components/Rating';

const Details = () => {
  const { currentVenue } = useContext(PrimaryContext);
  const [displayMenu, setDisplayMenu] = useState(false);
  let imageUrl = null;

  console.log(currentVenue)

  if (Object.keys(currentVenue).length === 0) {
    return <Navigate to="/" />;
  }

  const scrollToSection = () => {
    const section = document.getElementById('menuImg');

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const hasMenu = Boolean(currentVenue.menu);

  if (hasMenu) {
    const uint8Array = new Uint8Array(currentVenue.menu.data);
    const blob = new Blob([uint8Array], { type: 'image/*' });

    // Create a URL for the Blob
    imageUrl = URL.createObjectURL(blob);
  }

  return (
    <div id="details">
      <div id="info">
        {currentVenue.img && <img src={currentVenue.img} />}
        <h1>{currentVenue.name}</h1>
        <StarRating rating={currentVenue.rating} />
        <p>
          {currentVenue.hours.start} - {currentVenue.hours.end}
        </p>
        <p>{currentVenue.address.address}</p>
        {hasMenu && (
          <>
            <button
              onClick={() => {
                setDisplayMenu(!displayMenu);
                scrollToSection();
              }}
            >
              Menu
            </button>
            <img
              id="menuImg"
              src={imageUrl}
              style={{ display: displayMenu ? 'block' : 'none' }}
            />
          </>
        )}
      </div>
      <Map location={currentVenue.address.address} />
    </div>
  );
};

export default Details;