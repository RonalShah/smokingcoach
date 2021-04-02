import { Button, makeStyles } from '@material-ui/core';
import { NoteTwoTone, SmokingRooms } from '@material-ui/icons';
import React from 'react'
import { db } from '../../../firebase';
import { useInput } from '../../../mainProvider';
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: 5,
      marginBottom: 10
    },
  
  }));


  
function AddButton() {

    const { smokingData, dispatch } = useInput();
    const classes = useStyles();


    const addSmokeData = () => {
      // Add cigarette data

      const thisCig = smokingData.current
      const data = {

        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        trigger : thisCig.trigger,
        need: thisCig.need,
        location: thisCig.location,
        with: thisCig.with,
        feeling: thisCig.feeling,


      };

      const res =  db.collection(`${smokingData.user.uid}`).add(data);
      window.open(`/DashBoard`,`_self`)


    }



    return (
        <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<SmokingRooms/>}
          // onClick={() => dispatch({ type: "ADD_SMOKE_EVENT"})}
          onClick = {addSmokeData}
          >Add</Button>
      </div>
    )
}

export default AddButton
