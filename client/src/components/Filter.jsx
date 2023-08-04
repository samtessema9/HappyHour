import {useState} from 'react';
import axios from 'axios';


const Filter = () => {

    const [formData, setFormData] = useState({
        startTime: '',
        endTime: '',
        rating: '',
        distance: 100
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

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
                <label htmlFor="distance">Distance:</label>
                <input 
                    type="number" 
                    id="distance" 
                    step="0.1" 
                    name='distance'
                    onChange={handleChange}
                />
            </div>
            <button type="button">Apply Filters</button>
        </div>
     );
}
 
export default Filter;
