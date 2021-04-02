import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React from 'react'
import { useInput } from '../../../mainProvider';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '25ch',
    },
  }));


function FeelingSelect() {

    const { smokingData, dispatch } = useInput();
    const classes = useStyles();

    var feelMenu = [1,2,3,4,5,6,7,8,9,10]
    feelMenu = feelMenu.map((val)=><MenuItem value={val}>{val}</MenuItem>)
  


    return (

        <div>
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Feeling</InputLabel>
            <Select
              required
              value={smokingData.current.feeling}
              onClick={(e) => dispatch({ type: "SET_FEELING", payload:e.target.value})}
              label="Feeling"
            > 
              {feelMenu}
            </Select>
          </FormControl>
        </div>

    )
}

export default FeelingSelect
