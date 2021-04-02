import './App.css';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import SignIn from './components/login/signin';
import SignUp from './components/login/signup';
import InputForm from './components/diary/InputForm'
import Dashboard from './components/dashboard/DashBoard';
import {BrowserRouter as Router,Route, Switch,} from "react-router-dom";
import React, { useEffect } from 'react';
import { useInput } from './mainProvider';
import { auth } from './firebase';
import ProtectedRoute from './ProtectedRoute';
import NeedSlider from './components/diary/menuselectors/NeedSlider'




function App() {

  const { smokingData, dispatch } = useInput();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // setLoading(false);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // setLoading(false);
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);


  return (

    <Grid container>
        <NeedSlider/>
        <InputForm/>
    </Grid>

      // <Grid className="App">
      //   <Router>
      //     <Switch>
      //       <Route exact path="/" component={SignIn} />
      //       <Route path="/Sign_Up" component={SignUp} />
      //       <Route
      //         exact={true}
      //         path="/DashBoard"
      //         component={Dashboard}
      //       />
      //       <Route
      //         exact={true}
      //         path="/Input_Page"
      //         component={InputForm}
      //       />
      //     </Switch>
      //   </Router>
      // </Grid>

  );
}

export default App;
