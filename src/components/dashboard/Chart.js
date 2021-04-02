import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { Button } from '@material-ui/core';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}


var data = [
  createData('Monday', 3020),
  createData('Tuesday', 2000),
  createData('Wednesday', 2600),
  createData('Thursday', 3800),
  createData('Friday', 4500),
  createData('Saturday', 3000),
  createData('Sunday', 4200),
];

export default function Chart() {

    const handleClick = () => { 
        data.shift()
    
        data.push(  createData('24:00', Math.floor(Math.random()*3000)))
        setChart1(prevState=>!prevState)
    }
    

    const [chart1, setChart1] = useState(true)

  const theme = useTheme();

  return (
    <React.Fragment onClick={()=> {setChart1(false)}}>
    

      <Button onClick={()=> handleClick()} >{chart1 ? "Today" : "Tomorrow"}</Button>
      <ResponsiveContainer>
        <LineChart
          data = {data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Annualised Cost
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>


    </React.Fragment>
  );
}