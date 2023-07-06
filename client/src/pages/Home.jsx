import {useState} from 'react';
import './index.css'
import VenueCard from '../components/Card';
import venues from '../assets/testData'

console.log(venues)

const Home = () => {

    return ( 
        <div id="container">
            {/* <Navbar /> */}
            <div id="search">
                <h2></h2>
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
