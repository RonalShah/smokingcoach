import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import dayjs from 'dayjs';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const today = dayjs(Date()).format('DD/MM/YYYY')


export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Annual Cost of Smoking (based on this period) </Title>
      <Typography component="p" variant="h4">
        £3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {today}
      </Typography>

    </React.Fragment>
  );
}