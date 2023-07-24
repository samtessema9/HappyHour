import {useState, useContext} from 'react'
import { PrimaryContext } from '../context/PrimaryContext';
import { Input } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';

const Filter = () => {
    const [searchText, setSearchText] = useState('')
    const { venues } = useContext(PrimaryContext)
    console.log(Object.keys(venues).length)

    return ( 
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Autocomplete
                options={venues}
                getOptionLabel={(venue) => {
                    console.log(venue)
                    return venue.name || 'No match'
                }}
                filterOptions={(venues, searchText ) =>
                    venues.filter((venue) =>
                    venue.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                }
                value={venues}
                onChange={(event, newValue) => setValue(newValue)}
                renderInput={(params) => (
                    <InputBase
                        {...params}
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value)}}
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Venues"
                        inputProps={{ 'aria-label': 'search venues' }}
                    />
                )}
            />
            {/* <InputBase
                value={searchText}
                onChange={(e) => {setSearchText(e.target.value)}}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Venues"
                inputProps={{ 'aria-label': 'search venues' }}
            /> */}
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
 
export default Filter;