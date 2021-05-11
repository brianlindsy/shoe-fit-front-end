import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ShoeCardGrid from './ShoeCardGrid.js';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example">
          <Tab label="Nike" {...a11yProps(0)} />
          <Tab label="Adidas" {...a11yProps(1)} />
          <Tab label="New Balance" {...a11yProps(2)} />
          <Tab label="Puma" {...a11yProps(3)} />
          <Tab label="Skechers" {...a11yProps(4)} />
          <Tab label="Under Armour" {...a11yProps(5)} />
          <Tab label="Asics" {...a11yProps(6)} />
          <Tab label="Brooks" {...a11yProps(7)} />
          <Tab label="Saucony" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ShoeCardGrid brand="Nike" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ShoeCardGrid brand="Adidas" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ShoeCardGrid brand="New Balance" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ShoeCardGrid brand="Puma" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ShoeCardGrid brand="Skechers" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ShoeCardGrid brand="Under Armour" />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ShoeCardGrid brand="Asics" />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <ShoeCardGrid brand="Brooks" />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <ShoeCardGrid brand="Saucony" />
      </TabPanel>
    </div>
  );
}