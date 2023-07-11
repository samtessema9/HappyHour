import {useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import './index.css'

const AddVenue = () => {

  const [formData, setFormData] = useState({
      name: '',
      address1: '',
      city: '',
      state: '',
      zip: '',
      img: '',
      hours: {
        start: '',
        end: ''
      }
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    if (name !== 'start' && name !== 'end') {
      setFormData({
        ...formData,
        [name]: value
      })
    } else {
      setFormData({
        ...formData,
        hours: {
          ...formData.hours,
          [name]: value
        }
      })
    }
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formattedData = {
      name: formData.name,
      img: formData.img,
      hours: formData.hours,
      address: `${formData.address1}, ${formData.city}, ${formData.state} ${formData.zip}`
    }

    const response = await axios({
      url: 'http://localhost:3001/venues',
      method: 'POST',
      data: formattedData
    })

    console.log(response.data)

  }

  return (
    <form id="add-form" onSubmit={handleSubmit}>
      <h3>Add Venue</h3>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="name"
            name="name"
            label="Name of Venue"
            fullWidth
            autoComplete="name"
            variant="standard"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="startTime"
            name="start"
            label="start time (00:00)"
            fullWidth
            autoComplete="00:00"
            variant="standard"
            value={formData.hours.start}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="endTime"
            name="end"
            label="end time (00:00pm)"
            fullWidth
            autoComplete="00:00pm"
            variant="standard"
            value={formData.hours.end}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={formData.address1}
            onChange={handleChange}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={formData.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={formData.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={formData.zip}
            onChange={handleChange}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            id="img"
            name="img"
            label="Image Link"
            fullWidth
            autoComplete="link"
            variant="standard"
            value={formData.img}
            onChange={handleChange}
          />
        </Grid>
        
        <Button
            variant="contained"
            type='submit'
            onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
}


export default AddVenue