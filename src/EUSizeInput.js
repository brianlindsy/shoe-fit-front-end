import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '10ch',
      },
    },
}));

const labels = [
    {
      value: 'EU'
    },
    {
      value: 'Converse'
    },
];

export default function EUSizeInput(props) {

  const handleInputChange = (event) => {
    props.handleInputChange(event.target.value);
  };

  const handleSelectChange = (event, child) => {
    props.handleSelectChange(event.target.value);
  };

  const labelMenuItems = labels.map((label) => (
    <MenuItem key={label.value} value={label.value}>
      {label.value}
    </MenuItem>
  ));

  const classes = useStyles();

  return (
    <>
    <FormControl>
      <Input
        onChange={handleInputChange}
        aria-describedby="standard-helper-text"/>
    </FormControl>
    <FormControl>
      <Select value={props.convertFrom} onChange={handleSelectChange}>
        {labelMenuItems}
      </Select>
    </FormControl>
    </>
  );
}
