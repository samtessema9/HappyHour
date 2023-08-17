import {useState, useContext} from 'react';
import { PrimaryContext } from '../context/PrimaryContext';
import { useMutation } from '@tanstack/react-query'
import dayjs from 'dayjs';
import moment from 'moment';
import axios from 'axios';


const Filter = () => {
    const {setVenues} = useContext(PrimaryContext)

    const [formData, setFormData] = useState({
        startTime: '',
        endTime: '',
        rating: '',
        distance: '',
        userLocation: {
            lat: null,
            lon: null
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        
    }

    const requestFilteredVenues = useMutation({
        mutationFn: async () => {
            console.log('filter request ran')
            console.log(FormData)
            let queries = {}
            for (let query in formData) {
                if (formData[query] !== '') {
                    if (query == "startTime" || query == "endTime") {
                        queries[query] = moment(formData[query], "HH:mm").format("h:mmA")
                    } else {
                        queries[query] = formData[query]
                    }
                }
            }
            console.log(queries)

            const response = await axios({
                url: `http://localhost:3001/venues/filter/`,
                method: 'POST',
                data: queries
            })
            
            return response.data
        },
        onSuccess: (data) => {
            console.log(data)
            setVenues(data)
        },
        onError: (err) => {
            console.error(err)
        }

    })

    return ( 
        <div id='filters'>
            <div className="filter-group">
                <label htmlFor="startTime">Start Time:</label>
                <input 
                    type="time" 
                    id="startTime" 
                    name="startTime"
                    onChange={handleChange}
                />
            </div>
            <div className="filter-group">
                <label htmlFor="endTime">End Time:</label>
                <input 
                    type="time" 
                    id="endTime" 
                    name='endTime'
                    onChange={handleChange}
                />
            </div>
            <div className="filter-group">
                <label htmlFor="rating">Rating:</label>
                <select id="rating" name='rating' onChange={handleChange}>
                <option value="">Any</option>
                <option value="1">1 star</option>
                <option value="2">2 stars</option>
                <option value="3">3 stars</option>
                <option value="4">4 stars</option>
                <option value="5">5 stars</option>
                </select>
            </div>
            <div className="filter-group">
                <label htmlFor="distance">Distance(miles) :</label>
                <input 
                    type="number" 
                    id="distance" 
                    step="0.1" 
                    name='distance'
                    onChange={handleChange}
                    onClick={(e) => {
                        if ("geolocation" in navigator) {
                            navigator.geolocation.getCurrentPosition(
                              (position) => {
                                const latitude = position.coords.latitude;
                                const longitude = position.coords.longitude;
                                setFormData({
                                    ...formData,
                                    userLocation: {
                                        lan: latitude,
                                        lon: longitude
                                    }
                                })
                                console.log("Latitude:", latitude);
                                console.log("Longitude:", longitude);
                              },
                              (error) => {
                                console.error("Error getting location:", error.message);
                              }
                            );
                          } else {
                            console.error("Geolocation is not supported by this browser.");
                          }
                    } }
                />
            </div>
            <button 
                type="button"
                onClick={(e) => {
                    requestFilteredVenues.mutate()
                }}
            >
                Apply Filters
            </button>
        </div>
     );
}
 
export default Filter;
