import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './index.css'

const Navbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return ( 
        <div id="navbar">
            <img 
                src="https://media.istockphoto.com/id/1018834996/vector/happy-hour-neon-sign.jpg?s=612x612&w=0&k=20&c=6LRVoAB34YZ1ROr8GhZuFBExnkNip19K4pEmoMXC1Fo="
                onClick={handleClick} 
            />
            <div id="buttons">
                <button>About</button>
                <button>Contact Us</button>
                <button>Sign In</button>
            </div>
        </div>
     );
}
 
export default Navbar;