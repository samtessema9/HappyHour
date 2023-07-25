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
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
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