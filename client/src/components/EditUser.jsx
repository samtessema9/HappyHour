import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryContext } from "../context/PrimaryContext";
import {useMutation} from '@tanstack/react-query'
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

    const editUserRequest = useMutation({
        mutationFn: async () => {
            const response = await axios({
                url: `https://happyhour-api.onrender.com/users/${loggedInUser._id}`,
                method: 'PATCH',
                data: formData
            })
            
            return response.data
        },
        onSuccess: (data) => {
            setLoggedInUser(data)
            navigate('/user')
        },
        onError: (err) => {
            setError({errorMessage: err})
        }
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        editUserRequest.mutate()
    }

    return ( 
        <div>
            <h3>Edit User Info</h3>
            <form onSubmit={handleSubmit} id="editUserForm">
                <label>Name -
                    <input 
                        id="nameInput"
                        type="text" 
                        name="name" 
                        className="editUserInput"
                        value={formData.name}
                        onChange={handleChange} 
                    />
                </label>
                <label>Username - 
                    <input 
                        type="text" 
                        name="userName" 
                        className="editUserInput"
                        value={formData.userName}
                        onChange={handleChange} 
                    />
                </label>
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