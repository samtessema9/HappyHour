import {useState} from 'react';
import './index.css'
import venueCard from '../components/Card';
import venues from '../assets/testData'

const Home = () => {

    return ( 
        <div id="container">
            {/* <Navbar /> */}
            <div id="search">
                <h2></h2>
            </div>
            <div id="cards">
                {venues.map(venue => {
                    return <venueCard venue={venue}/>
                })}
            </div>
        </div>
     );
}
 
export default Home;
