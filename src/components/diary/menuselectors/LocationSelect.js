import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useInput } from '../../../mainProvider';
import {locationData} from '../menudata/LocationData'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '25ch',
    },
  }));


function LocationSelect() {

    const { smokingData, dispatch } = useInput();
    const classes = useStyles();

    const locationMenu = locationData.map((val)=><MenuItem value={val}>{val}</MenuItem>)
  


    return (

        <div>
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Location</InputLabel>
            <Select
              required
              value={smokingData.current.location}
              onClick={(e) => dispatch({ type: "SET_LOCATION", payload:e.target.value})}
              label="Location"
            > 
              {locationMenu}
            </Select>
          </FormControl>
        </div>

    )
}

export default LocationSelect
