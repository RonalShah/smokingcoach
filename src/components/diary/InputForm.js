import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Divider, Fade, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from '@material-ui/core';
import SmokingRooms from '@material-ui/icons/SmokingRooms';
import dayjs from 'dayjs';
import TriggerSelect from './menuselectors/TriggerSelect';
import LocationSelect from './menuselectors/LocationSelect';
import { useInput } from '../../mainProvider';
import WithSelect from './menuselectors/WithSelect';
import FeelingSelect from './menuselectors/FeelingSelect';
import TimeSelect from './menuselectors/TimeSelect';
import NeedSelect from './menuselectors/NeedSelect';
import AddButton from './menuselectors/AddButton';
import NeedSlider from './menuselectors/NeedSlider';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      minWidth: '25ch',
      
    },
  },
  paper: {
    backgroundColor:"lightgreen",
    justifyContent:"center", 
    textAlign:"center",
    alignContent:"center",
    width: '30ch',
    margin: 5

  },
  textField: {
    textAlign: "center",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: '25ch',
  },
  button: {
    margin: 5,
    marginBottom: 10
  },

}));

export default function InputForm() {

  const { smokingData, dispatch } = useInput();
  const classes = useStyles();



  const userName = "Ronal Shah"
  const today = dayjs(Date()).format("DD-MMM")
  var cost = 10.40

  return (
    <Grid container 
    direction = "column"
    style={{alignItems:"center", backgroundColor:"#333", padding: 20}}>

    < Paper className={classes.paper}>
      <Box>
        <h4>{userName} |  {today} | {`$`+cost} </h4>
      </Box>
    </Paper>



    < Paper className={classes.paper} >

      <form className={classes.root} noValidate autoComplete="off">
      
          <Box>

              <TimeSelect/>

              <TriggerSelect/>

              <NeedSelect/>

              <LocationSelect/>

              <WithSelect/>

              <FeelingSelect/>

              <AddButton/>

          </Box>

      </form>

    </Paper>
    </Grid>
  );
}