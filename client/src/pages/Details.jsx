import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PrimaryContext } from '../context/PrimaryContext';
import Map from "../components/Map";
import StarRating from '../components/Rating';

const Details = () => {
    const { currentVenue } = useContext(PrimaryContext)
    let currentLength = Object.keys(currentVenue).length;

    if (currentLength == 0) {
        return <Navigate to="/"/>
    }

    const uint8Array = new Uint8Array(currentVenue.menu.data)

    const blob = new Blob([uint8Array], { type: 'image/*' });

    // Create a URL for the Blob
    const imageUrl = URL.createObjectURL(blob);
    
    const [displayMenu, setDisplayMenu] = useState(false)

    const scrollToSection = () => {
        const section = document.getElementById('menuImg');

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };

    return ( 
        <div id="details">
            <div id="info">
                <img src={currentVenue.img} />
                <h1>{currentVenue.name}</h1>
                <StarRating rating={currentVenue.rating}/>
                <p>{currentVenue.hours.start} - {currentVenue.hours.end}</p>
                <p>{currentVenue.address}</p>
                <button 
                    onClick={(e) => {
                        setDisplayMenu(!displayMenu)
                        scrollToSection()
                    }}
                >
                    Menu
                </button>
                <img 
                    id="menuImg"
                    src={imageUrl} 
                    style={{ display: displayMenu ? 'block' : 'none' }}
                />
            </div>
            <Map location={currentVenue.address} />
        </div>
    );
}
 
export default Details;