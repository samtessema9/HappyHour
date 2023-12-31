import { useState, useContext } from "react";
import { PrimaryContext } from "../context/PrimaryContext";
import { useNavigate } from 'react-router-dom';
import Profile from "./Profile";
import Search from "./Search";
import './index.css'

const Navbar = () => {
    const navigate = useNavigate()

    const {isLoggedIn, loggedInUser} = useContext(PrimaryContext)

    return ( 
        <div id="navbar">
            <img 
                src="https://media.istockphoto.com/id/1018834996/vector/happy-hour-neon-sign.jpg?s=612x612&w=0&k=20&c=6LRVoAB34YZ1ROr8GhZuFBExnkNip19K4pEmoMXC1Fo="
                onClick={() => {navigate('/')}} 
            />
            <Search />
            <div id="buttons">
                <button 
                    onClick={() => {
                        if (isLoggedIn) {
                            navigate('/addVenue')
                        } else {
                            navigate('/signIn')
                        }
                    }}
                >
                    Add Venue
                </button>
                <button 
                    onClick={() => {
                        if (isLoggedIn) {
                            navigate('/favoriteVenues')
                        } else {
                            navigate('/signIn')
                        }
                    }}
                >
                    Favorite Venues
                </button>
                {isLoggedIn ?
                    <Profile /> : 
                    <button onClick={() => {navigate('/signIn')}}>Sign In</button>
                }           
            </div>
        </div>
     );
}
 
export default Navbar;