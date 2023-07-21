import {useState} from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Divider} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { PrimaryContext } from "../context/PrimaryContext";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import "./index.css"

const User = () => {

    const navigate = useNavigate()
    const [error, setError] = useState('')
    const {loggedInUser, setIsLoggedIn, setLoggedInUser} = useContext(PrimaryContext)
    const queryClient = useQueryClient()

    if (Object.keys(loggedInUser).length === 0) {
        return (
            <p>Log in to view user page.</p>
        )
    }

    const deleteUserRequest = useMutation({
      mutationFn: async () => {
        const response = await axios({
          url: `https://happyhour-api.onrender.com/users/${loggedInUser._id}`,
          method: 'DELETE'
        })
        return response.data
      },
      onSuccess: () => {
        setLoggedInUser({})
        setIsLoggedIn(false)
        localStorage.clear();
        navigate('/')
      },
      onError: (err) => {
        setError('Could not delete user')
        console.log(err)
      }
    })

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        paddingLeft: '30em',
        paddingTop: '5em'
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary={loggedInUser.name} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Username" secondary={loggedInUser.userName} />
      </ListItem>
      <Divider variant="inset" component="li" />
       <Button
        style={{marginTop: "2em"}}
        variant='contained'
        onClick={() => {deleteUserRequest.mutate()}}    
      >
        Delete Account
      </Button>
      {error && <p>{error}</p>}
    </List>
  );
}


export default User;





