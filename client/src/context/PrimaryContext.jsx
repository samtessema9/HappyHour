import { createContext, useState } from 'react';

export const PrimaryContext = createContext()

const PrimaryContextProvider = ({children}) => {

    // put state
    const [venues, setVenues] = useState([])
    const [currentVenue, setCurrentVenue] = useState({})

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [loggedInUser, setLoggedInUser] = useState({})

    let stateObject = {
        venues, setVenues,
        currentVenue, setCurrentVenue,
        isLoggedIn, setIsLoggedIn,
        loggedInUser, setLoggedInUser
    }

    return (
            // put state into provider
        <PrimaryContext.Provider value={stateObject}>
            {children}
        </PrimaryContext.Provider>
        )
    }

export default PrimaryContextProvider;


