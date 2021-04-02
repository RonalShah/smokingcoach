import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import React from 'react'
import { useInput } from '../../../mainProvider';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '25ch',
    },
  }));


  const explainArray = ["1. Not important - would have been fine without it\n",
  "2. Mildly important – wouldn’t have missed it too much\n",
  "3. Quite important - would have missed it a bit\n",
  "4. Very important - would have been a struggle not to\n",
  "5. Hugely important - couldn’t have gone without\n"]


function NeedSelect() {

    const { smokingData, dispatch } = useInput();
    const classes = useStyles();



    const explainNeed = () => {return(alert(explainArray))}

    var needMenu = [1,2,3,4,5].map((val)=><MenuItem value={val}>{val}</MenuItem>)
    needMenu.push(<MenuItem style={{fontStyle:"italic"}} onClick={()=>explainNeed()}>Explanation</MenuItem>)
  


    return (

        <div>
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Need</InputLabel>
            <Select
              required
              value={smokingData.current.need}
              onClick={(e) => dispatch({ type: "SET_NEED", payload:e.target.value})}
              label="Need"
            > 
              {needMenu}

            </Select>
          </FormControl>

        </div>

    )
}

export default NeedSelect
