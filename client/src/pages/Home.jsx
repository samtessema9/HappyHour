import {useState, useEffect, useContext} from 'react';
import { PrimaryContext } from '../context/primaryContext';
import './index.css'
import VenueCard from '../components/Card';
// import venues from '../assets/testData'
import axios from 'axios';

// console.log(venues)

const Home = () => {
    const {venues, setVenues} = useContext(PrimaryContext)

    useEffect(() => {
        if (venues.length == 0) {
            axios({
                url: 'http://localhost:3001/venues',
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
            {/* <Navbar /> */}
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
