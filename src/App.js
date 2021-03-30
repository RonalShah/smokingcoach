import logo from './logo.svg';
import './App.css';
import Diary from './components/diary/Diary';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import LogIn from './components/login/login'
import SignUp from './components/login/signup';
import InputForm from './components/diary/InputForm'

function App() {
  return (

      <Grid className="App">
        <InputForm/>
      </Grid>

  );
}

export default App;
