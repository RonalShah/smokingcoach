import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useInput } from '../../../mainProvider';
import {withData} from '../menudata/WithData'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '25ch',
    },
  }));


function WithSelect() {

    const { smokingData, dispatch } = useInput();
    const classes = useStyles();

    const withMenu = withData.map((val)=><MenuItem value={val}>{val}</MenuItem>)
  


    return (

        <div>
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">With</InputLabel>
            <Select
              required
              value={smokingData.current.with}
              onClick={(e) => dispatch({ type: "SET_WITH", payload:e.target.value})}
              label="With"
            > 
              {withMenu}
            </Select>
          </FormControl>
        </div>

    )
}

export default WithSelect
