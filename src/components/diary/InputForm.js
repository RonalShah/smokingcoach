import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from '@material-ui/core';
import SmokingRooms from '@material-ui/icons/SmokingRooms';

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

  formControl: {
    margin: theme.spacing(1),
    minWidth: '25ch',
  },
  button: {
    margin: 5,
    marginBottom: 10
  }
}));

export default function InputForm() {
  const classes = useStyles();

  const [need, setNeed] = useState('');


  var date = new Date()
  var hh = date.getHours()
  var mm = date.getMinutes()
  


  return (
    <Grid container 
    direction = "column"
    style={{alignItems:"center", backgroundColor:"#333", padding: 20}}>

    < Paper className={classes.paper}>
    
      <Box>
        <h4>Ronal Shah  |  31st March  | 10.40</h4>
      </Box>

    </Paper>



    < Paper className={classes.paper} >

    <form className={classes.root} noValidate autoComplete="off">

      <div>


        <div>
          <TextField
              id="outlined-read-only-input"
              label="Time"
              defaultValue={hh + `:` + mm}
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
        </div>

        <div>
          <TextField
            required
            id="outlined-required"
            label="Feeling"
            defaultValue="Feeling"
            variant="outlined"
          />
        </div>

        <div>
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Need Rating</InputLabel>
            <Select
              required
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={need}
              onChange={(e)=>setNeed(e.target.value)}
              label="Need"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </div>



        <div>
          <TextField
            required
            id="outlined-required"
            label="With"
            defaultValue="With"
            variant="outlined"
          />
        </div>
        
        
        <div>
          <TextField
            required
            id="outlined-required"
            label="Location"
            defaultValue="Location"
            variant="outlined"
          />
        </div>


        <div>
          <TextField
            required
            id="outlined-required"
            label="Trigger"
            defaultValue="Trigger"
            variant="outlined"
          />
        </div>
              
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<SmokingRooms/>}
          >Save</Button>
      </div>

    
    </div>

    </form>

    </Paper>
    </Grid>
  );
}