import {useState, useContext, useRef, useEffect} from 'react'
import { PrimaryContext } from '../context/PrimaryContext';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DropDownItems from './Dropdown';


const Filter = () => {
    const [searchText, setSearchText] = useState('')
    const [showDropDown, setShowDropDown] = useState(false)
    const searchBarRef = useRef(null); 
    const { venues } = useContext(PrimaryContext)

    const filteredVenues = venues.filter(venue => {
        if (!searchText.length) {
            return false
        }
        return venue.name.toLowerCase().startsWith(searchText.toLowerCase())
    })

    useEffect(() => {
        const handleOutsideClick = event => {
          if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
            setShowDropDown(false);
          }
        };
    
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);
    
    console.log({filteredVenues})

    return ( 
        <div id="searchArea">
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    ref={searchBarRef}
                    value={searchText}
                    onChange={(e) => {
                        console.log(showDropDown)
                        setSearchText(e.target.value)
                    }}
                    onClick={() => {setShowDropDown(true)}}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Venues"
                    inputProps={{ 'aria-label': 'search venues' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                
            </Paper>
            {
                filteredVenues.length > 0 && showDropDown &&
                <DropDownItems array={filteredVenues} id="dropdown"/>
            }
        </div>
    );
}

 
export default Filter;


