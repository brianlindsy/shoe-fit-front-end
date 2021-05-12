import React, { useState } from 'react';
import EUSizeInput from './EUSizeInput.js';
import Typography from '@material-ui/core/Typography';
import GlobalAppBar from './GlobalAppBar.js';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const mensUSSizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11.5, 12, 13, 14, 15, 16];
const mensEUSizes = [40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 47, 48, 49, 50];
const mensConverseSizes = [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, -1];

const womensUSSizes = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];
const womensEUSizes = [35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43];
const womensConverseSizes = [-1, -1, -1, -1, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, -1, -1, -1];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    height: 300,
    width: 500
  },
}));

function convertEUtoUS(euValue){
  var index = mensEUSizes.indexOf(Number(euValue));
  var converted = mensUSSizes[index];

  return converted;
}

export default function Calculator() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [convertFrom, setConvertFrom] = useState('EU');

  const handleInputChange = (event) => {
    setValue(event);
  };

  const handleSelectChange = (event, child) => {
    setConvertFrom(event);
  };

  return (
      <Box>
        <GlobalAppBar />
        <Card className={classes.card}>
        <FormControl>
  	      <Typography variant="h3">What size is </Typography>
        </FormControl>
        <FormControl>
          <EUSizeInput handleSelectChange={handleSelectChange} value={value} convertFrom={convertFrom} handleInputChange={handleInputChange}/>
        </FormControl>
        <FormControl>
          <Typography variant="h3"> in US?</Typography>
        </FormControl>
        <Typography variant="h4">EU Size {value} is {convertEUtoUS(value)} US.</Typography>
        </Card>
      </Box>
  );
}
