import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import { Button } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { PrimaryContext } from "../context/primaryContext";
import "./index.css"

const User = () => {

    const {loggedInUser, setIsLoggedIn} = useContext(PrimaryContext)

    if (Object.keys(loggedInUser).length === 0) {
        return (
            <p>Log in to view user page.</p>
        )
    }

    const navigate = useNavigate()

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
        
        onClick={() => {
            localStorage.clear();
            setIsLoggedIn(false)
            navigate('/')
        }}
        
      >
        Logout
      </Button>
      {/*<Button
        style={{marginTop: "2em"}}
        variant='contained'
        
        onClick={() => {
            localStorage.clear();
            setIsLoggedIn(false)
            navigate('/')
        }}
        
      >
        Logout
      </Button>
      <Button
        style={{marginTop: "2em"}}
        variant='contained'
        
        onClick={() => {
            localStorage.clear();
            setIsLoggedIn(false)
            navigate('/')
        }}
        
      >
        Logout
      </Button> */}
      {/* <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem> */}
    </List>
  );
}


export default User;





