import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryContext } from '../context/PrimaryContext';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const DropDownItems = ( {array} ) => {
  const navigate = useNavigate()
  const {setCurrentVenue} = useContext(PrimaryContext)

  const handleClick = (e) => {
    const currentVenue = array.filter(venue => {
      return venue.name == e.target.textContent
    })
    setCurrentVenue(currentVenue[0])
    navigate('/details')
  }

  return (
    <List 
      sx={style} 
      component="nav" 
      aria-label="mailbox folders"
      onClick={handleClick}
    >
      {array.map(venue => {
        return (
            <>
                <ListItem button key={venue._id}>
                    <ListItemText primary={venue.name} />
                </ListItem>  
                <Divider />
            </> 
        )
      })}
    </List>
  );
}

export default DropDownItems