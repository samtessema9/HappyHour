import {useState} from 'react';
import './index.css'
import Navbar from '../components/Navbar';
import CustomCard from '../components/Card';
import venues from '../assets/testData'

const Home = () => {

    return ( 
        <div id="container">
            {/* <Navbar /> */}
            <div id="search">
                <h2></h2>
            </div>
            <div id="cards">
                {venues.map(location => {
                    return <CustomCard name={location.name} hours={location.hours} img={location.img}/>
                })}
            </div>
        </div>
     );
}
 
export default Home;
