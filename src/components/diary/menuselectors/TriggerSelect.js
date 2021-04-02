import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useInput } from '../../../mainProvider';
import { triggerLabels, triggerSet, triggerTable } from '../menudata/TriggerData';
import { Menu, MenuList } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '25ch',
  },
}));



export default function TriggerSelect() {

    const { smokingData, dispatch } = useInput();
    const classes = useStyles();
 

    const [triggerIndex, setTriggerIndex] = useState(-1)

    var triggerHead
    var triggerMenu

    if (triggerIndex===-1) {

        triggerHead = <ListSubheader>Major Categories</ListSubheader>
        triggerMenu = triggerLabels.map((val)=>(<MenuItem value={null} onClick={()=>setTriggerIndex(triggerLabels.indexOf(val))}>{val}</MenuItem>))

    }
    else {

        triggerHead = <ListSubheader>{triggerLabels[triggerIndex]}</ListSubheader>
        triggerMenu = triggerSet[triggerIndex].map((val)=>(<MenuItem value={val}>{val}</MenuItem>))
        triggerMenu.push(<MenuItem value={"Categories"} onClick={()=>(setTriggerIndex(-1))} style={{fontStyle:"italic"}}>Back to Major Categories</MenuItem>)

    }
    

  return (
    <div>


      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel htmlFor="grouped-select">Trigger</InputLabel>
        <Select value={smokingData.current.trigger}
                id="grouped-select"
                label="Trigger"
                onClick={(e) => dispatch({ type: "SET_TRIGGER", payload:e.target.value})}
                >


          {triggerHead}
          {triggerMenu}




        </Select>
      </FormControl>
    </div>
  );
}