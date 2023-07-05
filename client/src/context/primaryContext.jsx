import { createContext, useState } from 'react';

export const primaryContext = createContext()

const PrimaryContextProvider = ({children}) => {

    // put state
    const [venues, setVenues] = useState([])
    const [currentVenue, setCurrentVenue] = useState({})

    let stateObject = {
        venues, setVenues,
        currentVenue, setCurrentVenue
    }

    return (
            // put state into provider
        <primaryContext.Provider value={stateObject}>
            {children}
        </primaryContext.Provider>
        )
    }

export default PrimaryContextProvider;


