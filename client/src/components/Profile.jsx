import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { PrimaryContext } from '../context/primaryContext';

const Profile = () => {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const { setIsLoggedIn } = useContext(PrimaryContext)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Profile</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}
            onClick={() => {navigate('/user')}}
          >
            View Profile
          </MenuItem>
          <MenuItem value={20}>Edit profile</MenuItem>
          <MenuItem value={30} 
            onClick={() => {
                localStorage.clear();
                setIsLoggedIn(false)
                navigate('/')
            }}
          >Logout</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


export default Profile