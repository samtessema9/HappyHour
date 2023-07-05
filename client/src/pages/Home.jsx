import {useState} from 'react';
import './index.css'
import Navbar from '../components/Navbar';
import CustomCard from '../components/Card';

const Home = () => {
    const exampleLocations = [
        {name: "Bar 1", hours: ["4:30", "6:30pm"], img: "https://infatuation.imgix.net/media/images/guides/the-bar-greatest-hits-list-the-22-best-bars-in-seattle/NateWatters_SEA_TheNook_Interior-6.jpg"},
        {name: "Bar 2", hours: ["4:30", "7:00pm"], img: "https://www.theworlds50best.com/discovery/filestore/jpg/Rumba-Seat-USA-02.jpg"},
        {name: "Bar 3", hours: ["4:30", "7:00pm"], img: "https://i0.wp.com/www.society19.com/wp-content/uploads/2019/11/20191013_161527.jpg?fit=908%2C681&ssl=1"},
        {name: "Bar 4", hours: ["4:30", "7:00pm"], img: "https://luxurylondon.co.uk/wp-content/uploads/2023/02/cocktail-bars-hero.jpg"},
        {name: "Bar 5", hours: ["3:30", "6:30pm"], img: "https://www.ministryofvillas.com/wp-content/uploads/2017/05/bars-chaweng-koh-samui-thailand.jpg"},
        {name: "Bar 6", hours: ["4:00", "6:00pm"], img: "https://infatuation.imgix.net/NYC_Bandits_PR.jpg"},
        {name: "Bar 7", hours: ["4:30", "7:00pm"], img: "https://offloadmedia.feverup.com/secretseattle.co/wp-content/uploads/2021/07/14043907/Motif_Frolik_Deck_Main-1024x683.jpg"},
        {name: "Bar 8", hours: ["4:30", "7:00pm"], img: "https://hips.hearstapps.com/hmg-prod/images/barman-equipment-such-as-measuring-cups-and-essence-royalty-free-image-1062066858-1557252311.jpg"},
    ]

    return ( 
        <div id="container">
            {/* <Navbar /> */}
            <div id="search">
                <h2></h2>
            </div>
            <div id="cards">
                {exampleLocations.map(location => {
                    return <CustomCard name={location.name} hours={location.hours} img={location.img}/>
                })}
            </div>
        </div>
     );
}
 
export default Home;
