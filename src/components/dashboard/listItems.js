import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ChromeReaderModeTwoToneIcon from '@material-ui/icons/ChromeReaderModeTwoTone';
import { CalendarTodayTwoTone, CancelPresentationTwoTone, HomeTwoTone, HomeWorkTwoTone, SmokingRoomsTwoTone } from '@material-ui/icons';
import { auth } from '../../firebase';




export const mainListItems = (
  
  <div>

    <ListItem button>
      <ListItemIcon>
        <HomeTwoTone/>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button onClick={()=>window.open(`/DashBoard` ,"_self")}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={()=>window.open(`/Input_Page` ,"_self")}>
      <ListItemIcon>
        <SmokingRoomsTwoTone/>
      </ListItemIcon>
      <ListItemText primary="Add Cigarette" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Hypnosis" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ChromeReaderModeTwoToneIcon  />
      </ListItemIcon>
      <ListItemText primary="Blog" />
    </ListItem>
    <ListItem button onClick={()=>auth.signOut}>
      <ListItemIcon>
        <CancelPresentationTwoTone />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>

  </div>
);



export const secondaryListItems = (
  <div>
    <ListSubheader inset>Choose Time Period</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <CalendarTodayTwoTone />
      </ListItemIcon>
      <ListItemText primary="Last 7 Days" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <CalendarTodayTwoTone />
      </ListItemIcon>
      <ListItemText primary="Last Month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <CalendarTodayTwoTone />
      </ListItemIcon>
      <ListItemText primary="Last 3 Months" />
    </ListItem>
  </div>
);
