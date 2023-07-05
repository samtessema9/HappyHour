import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: ProcessingInstruction.env.API_KEY
    });

    if (!isLoaded) return <p>Loading...</p>;

    const center = {
        lat: 47.614010,
        lng: -122.342247,
    };

    return (
        <GoogleMap
            zoom={11}
            center={center}
            mapContainerClassName='map-container'
        >
            <Marker 
                position={{lat: 47.614010, lng: -122.342247}} 
                icon={{
                    scaledSize: new window.google.maps.Size(40, 40),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(20, 40),
                }}
            />
        </GoogleMap>
    )

}
 
export default Map;