import {useState, useEffect, useContext} from 'react';
import { PrimaryContext } from '../context/PrimaryContext';
import { useQuery } from '@tanstack/react-query';
import './index.css'
import VenueCard from '../components/Card';
import axios from 'axios';


const Home = () => {
    const {venues, setVenues} = useContext(PrimaryContext)

    const getVenues = useQuery({
        queryKey: ['venues'],
        queryFn: async () => {
            const response = await axios({
                url: 'https://happyhour-api.onrender.com/venues',
                method: 'GET'
            })
            console.log('useQuery ran')
            setVenues(response.data)

            return response.data
        }
    })

    if (getVenues.isLoading) {
        return <h3>Loading...</h3>
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
