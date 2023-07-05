import {useState} from 'react';
import Map from "../components/Map";
import StarRating from '../components/Rating';

const Details = ({bar}) => {
    return ( 
        <div id="details">
            <div id="info">
                <img src={bar.img} />
                <h2>{bar.name}</h2>
                <StarRating />
                <p>{bar.hours[0]} - {bar.hours[1]}</p>
            </div>
            <Map />
        </div>
    );
}
 
export default Details;