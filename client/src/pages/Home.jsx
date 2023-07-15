import {useState, useEffect, useContext} from 'react';
import { PrimaryContext } from '../context/PrimaryContext';
import './index.css'
import VenueCard from '../components/Card';
import axios from 'axios';


const Home = () => {
    const {venues, setVenues} = useContext(PrimaryContext)

    useEffect(() => {
        if (venues.length == 0) {
            axios({
                url: 'https://happyhour-api.onrender.com/venues',
                method: 'GET'
            }).then(response => {
                setVenues(response.data)
            })
        } 
    }, [])

    if (venues.length == 0) {
        return <h2>Loading...</h2>
    }

    return ( 
        <div id="container">
            <div id="search">
                <h4></h4>
            </div>
            <div id="cards">
                {venues.map(venue => {
                    return <VenueCard venue={venue} key={venue.address}/>
                })}
            </div>
        </div>
     );
}
 
export default Home;
