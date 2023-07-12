import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { PrimaryContext } from '../context/primaryContext';
import Map from "../components/Map";
import StarRating from '../components/Rating';

const Details = () => {
    const { currentVenue } = useContext(PrimaryContext)
    let currentLength = Object.keys(currentVenue).length;

    return ( 
        <div id="details">
            { currentLength ? (
                <>
                    <div id="info">
                        <img src={currentVenue.img} />
                        <h1>{currentVenue.name}</h1>
                        <StarRating rating={currentVenue.rating}/>
                        <p>{currentVenue.hours.start} - {currentVenue.hours.end}</p>
                        <p>{currentVenue.address}</p>
                    </div>
                    <Map location={currentVenue.address} />
                </>
            ) :(
                <Navigate to="/"/>
            )}
            
        </div>
    );
}
 
export default Details;