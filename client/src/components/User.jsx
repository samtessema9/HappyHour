import * as React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Divider} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { PrimaryContext } from "../context/PrimaryContext";
import axios from 'axios';
import "./index.css"

const User = () => {

    const navigate = useNavigate()
    const {loggedInUser, setIsLoggedIn, setLoggedInUser} = useContext(PrimaryContext)

    if (Object.keys(loggedInUser).length === 0) {
        return (
            <p>Log in to view user page.</p>
        )
    }

    const deleteAccount = async () => {
      try {
        const response = await axios({
          url: `http://localhost:3001/users/${loggedInUser._id}`,
          method: 'DELETE'
        })
        setLoggedInUser({})
        setIsLoggedIn(false)
        localStorage.clear();
        navigate('/')
      }
      catch (err) {
        console.log(err.message)
      }
    }

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
        
        onClick={deleteAccount}    
      >
        Delete Account
      </Button>
    </List>
  );
}


export default User;





