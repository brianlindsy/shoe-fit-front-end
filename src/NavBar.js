import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ShoeCardGrid from './ShoeCardGrid.js';
import ShoeDataJSON from './Top_Nike_Products_Deduped.json';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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

function SearchBar({ onSearch }) {
  const onSub = (e) => {
    onSearch(e.target.value.toLowerCase());
  };

  return (
    <TextField
      id="outlined-basic" label="Search" variant="outlined"
      onChange={onSub}
      className="search-input"
      placeholder="Search"
      name="search"
      style={{width: "50%"}}
    />
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
  const [shoeData, setShoeData] = React.useState([]);
  const [filter, setFilter] = React.useState("");

  const filteredData = React.useMemo(() => { 
     if (filter === "") return shoeData;
     return shoeData.filter(
       (item) =>
         item.Brand.toLowerCase().includes(filter) ||
         item.ProductName.toLowerCase().includes(filter)
       );
  }, [shoeData, filter]);

  useEffect(() => {
    setShoeData(ShoeDataJSON);
  }, [])

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
          <Tab label="adidas" {...a11yProps(1)} />
          <Tab label="New Balance" {...a11yProps(2)} />
          <Tab label="Puma" {...a11yProps(3)} />
          <Tab label="Skechers" {...a11yProps(4)} />
          <Tab label="Under Armour" {...a11yProps(5)} />
          <Tab label="Asics" {...a11yProps(6)} />
          <Tab label="Brooks" {...a11yProps(7)} />
          <Tab label="Saucony" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <Box p={3}>
        <Grid
          container
          spacing={2}
          direction="row">
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <SearchBar onSearch={(searchTerm) => setFilter(searchTerm)}/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <TabPanel value={value} index={0}>
        <ShoeCardGrid brand="Nike" shoeData={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ShoeCardGrid brand="adidas" shoeData={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ShoeCardGrid brand="New Balance" shoeData={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ShoeCardGrid brand="Puma" shoeData={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ShoeCardGrid brand="Skechers" shoeData={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ShoeCardGrid brand="Under Armour" shoeData={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ShoeCardGrid brand="Asics" shoeData={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <ShoeCardGrid brand="Brooks" shoeData={filteredData} />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <ShoeCardGrid brand="Saucony" shoeData={filteredData} />
      </TabPanel>
    </div>
  );
}