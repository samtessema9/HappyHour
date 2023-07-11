import { useState, useContext } from "react";
import { PrimaryContext } from "../context/primaryContext";
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
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
            <div id="buttons">
                <button onClick={() => {navigate('/addVenue')}}>Add Venue</button>
                <button>About</button>
                {isLoggedIn ? 
                    <Button
                        onClick={() => {navigate('/user')}}
                    >
                        Hey {loggedInUser.name}
                    </Button> : 
                    <button onClick={() => {navigate('/signIn')}}>Sign In</button>}
                
            </div>
        </div>
     );
}
 
export default Navbar;