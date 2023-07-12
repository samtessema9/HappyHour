import {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Map from "../components/Map";
import StarRating from '../components/Rating';
import { PrimaryContext } from '../context/primaryContext';

const Details = () => {
    const {currentVenue, setCurrentVenue} = useContext(PrimaryContext)
    const navigate = useNavigate()

    useEffect(() => {
        console.log('useEffect running')
        // if (Object.keys(currentVenue).length < 1) {
        //     console.log('navigate triggered')
        //     navigate('/')
        // }
    }, [currentVenue])

    if (Object.keys(currentVenue).length < 1) {
        return ( 
            <>
                <p>No venue</p>
                <button onClick={() => {navigate('/')}}>Go Home</button>
            </>
        )
    }


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