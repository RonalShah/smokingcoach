import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Box, FormControl, Grid, InputLabel, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root: {
    width: '20ch',
    textAlign: 'center',
    
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '25ch',
  },
}));

const marks = [
  {
    value: 0,
    label: '1',
  },
  {
    value: 25,
    label: '2',
  },
  {
    value: 50,
    label: '3',
  },
  {
    value: 75,
    label: '4',
  },
  {
    value: 100,
    label: '5',
  },
];


function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function NeedSlider() {
  const classes = useStyles();

  return (
    <Grid container>
    <div className={classes.root}>

    <FormControl variant="outlined" className={classes.formControl}>

      <InputLabel >Need</InputLabel>
      <Slider
        defaultValue={50}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        name = "need"
        style={{alignContent:'center', color: "darkgreen", }}
      />
      </FormControl>
    </div></Grid>
  );
}