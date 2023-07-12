import {useState, useEffect} from 'react';
import axios from 'axios';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const Map = ({location}) => {
    const [coordinates, setCoordinates] = useState({
        lat: 47.614010,
        lng: -122.342247,
    });

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_API_KEY
    });

    useEffect(() => {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
        axios.get(url).then(response => {
            setCoordinates({
                lat: parseFloat(response.data[0].lat),
                lng: parseFloat(response.data[0].lon)
            })
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return (
        <GoogleMap
            zoom={14}
            center={coordinates}
            mapContainerClassName='map-container'
        >
            <Marker 
                position={coordinates} 
            />
        </GoogleMap>
    )

}
 
export default Map;
