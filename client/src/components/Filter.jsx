import {useState, useContext, useRef} from 'react'
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
    const { venues } = useContext(PrimaryContext)

    const filteredVenues = venues.filter(venue => {
        if (!searchText.length) {
            return false
        }
        return venue.name.toLowerCase().startsWith(searchText.toLowerCase())
    })
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
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
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
                filteredVenues.length > 0 && 
                <DropDownItems array={filteredVenues} id="dropdown"/>
            }
        </div>
    );
}

 
export default Filter;


