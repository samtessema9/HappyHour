// import {useState, useContext, useRef} from 'react'
// import { PrimaryContext } from '../context/PrimaryContext';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import { Popover } from '@mui/material';
// import DropDownItems from './Dropdown';


// const Filter = () => {
//     const [searchText, setSearchText] = useState('')
//     const { venues } = useContext(PrimaryContext)

//     const filteredVenues = venues.filter(venue => {
//         return venue.name.toLowerCase().startsWith(searchText.toLowerCase())
//     })
//     console.log({filteredVenues})

//     const anchorElement = useRef(null)

//     const [anchorEl, setAnchorEl] = useState(true); 

//     const handlePopoverClose = () => {
//         setAnchorEl(null);
//       };

//     return ( 
//         <Paper
//             component="form"
//             sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//         >
//             <IconButton sx={{ p: '10px' }} aria-label="menu">
//                 <MenuIcon />
//             </IconButton>
//             <InputBase
//                 value={searchText}
//                 onChange={(e) => {
//                     setSearchText(e.target.value)
//                     setAnchorEl(true)
//                 }}
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Search Venues"
//                 inputProps={{ 'aria-label': 'search venues' }}
//                 ref={anchorElement}
//             />
//             <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
//             <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//                 <SearchIcon />
//             </IconButton>
//             {filteredVenues.length > 0 && anchorEl !== null && ( // Add conditional rendering for the Popover
//                 <Popover
//                     open={true}
//                     anchorEl={anchorElement.current}
//                     onClose={handlePopoverClose}
//                     anchorOrigin={{
//                         vertical: 'top',
//                         horizontal: 'left',
//                     }}
//                     transformOrigin={{
//                         vertical: 'top',
//                         horizontal: 'left',
//                     }}
//                 >
//                     <DropDownItems array={filteredVenues} />
//                 </Popover>
//             )}
//         </Paper>
//     );
// }

 
// export default Filter;



import { useState, useContext, useRef, useEffect } from 'react';
import { PrimaryContext } from '../context/PrimaryContext';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Popover } from '@mui/material';
import DropDownItems from './Dropdown';

const Filter = () => {
  const [searchText, setSearchText] = useState('');
  const { venues } = useContext(PrimaryContext);
  const [filteredVenues, setFilteredVenues] = useState(venues); // State for the filtered venues
  const [showPopover, setShowPopover] = useState(false); // State to control popover visibility
  const anchorRef = useRef(null);

  const handlePopoverClose = () => {
    setShowPopover(false); // Close the popover
  };

  useEffect(() => {
    // Update filtered venues when searchText changes
    const filtered = venues.filter(venue =>
      venue.name.toLowerCase().startsWith(searchText.toLowerCase())
    );
    setFilteredVenues(filtered);
    setShowPopover(!!filtered.length); // Show the popover if there are matching venues
  }, [venues, searchText]);

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value);
        }}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Venues"
        inputProps={{ 'aria-label': 'search venues' }}
        ref={anchorRef} // Set the ref for the input element
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {showPopover && anchorRef.current && ( // Show the popover only if it should be visible
        <Popover
          open={showPopover}
          anchorEl={anchorRef.current} // Use the ref as the anchorEl
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <DropDownItems array={filteredVenues} />
        </Popover>
      )}
    </Paper>
  );
};

export default Filter;
