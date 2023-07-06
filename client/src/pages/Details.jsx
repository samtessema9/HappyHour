import {useState, useContext} from 'react';
import Map from "../components/Map";
import StarRating from '../components/Rating';
import { PrimaryContext } from '../context/PrimaryContext';

const Details = () => {
    const {currentVenue} = useContext(PrimaryContext)

    return ( 
        <div id="details">
            <div id="info">
                <img src={currentVenue.img} />
                <h1>{currentVenue.name}</h1>
                <StarRating rating={currentVenue.rating}/>
                <p>{currentVenue.hours.start} - {currentVenue.hours.end}</p>
                <p>{currentVenue.address}</p>
            </div>
            <Map location={currentVenue.address} />
        </div>
    );
}
 
export default Details;