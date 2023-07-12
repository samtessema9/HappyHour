import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryContext } from "../context/primaryContext";
import { Button } from "@mui/material";
import axios from "axios";
import './index.css';


const EditUser = () => {
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const {loggedInUser, setLoggedInUser} = useContext(PrimaryContext)
    const [formData, setFormData] = useState({
        name: loggedInUser.name,
        userName: loggedInUser.userName
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formData)
        try {
            const response = await axios({
                url: `http://localhost:3001/users/${loggedInUser._id}`,
                method: 'PATCH',
                data: formData
            })
            setLoggedInUser(response.data)
            navigate('/user')
        }
        catch (err) {
            setError({errorMessage: err.message})
            console.log(err.message)
        }
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit} id="editUserForm">
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange} 
                />
                <label>Username</label>
                <input 
                    type="text" 
                    name="userName" 
                    value={formData.userName}
                    onChange={handleChange} 
                />
                {error.errorMessage && <p>{error.errorMessage}</p>}
                <Button
                    type="submit"
                    variant="contained"
                >
                    Save
                </Button>
            </form>
        </div>
     );
}
 
export default EditUser;