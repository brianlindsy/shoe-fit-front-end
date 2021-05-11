import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ShoeFitCard from './ShoeFitCard.js';
import { getData } from './utils.js';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

function renderBrand(shoeData, shoeBrandToRender){
  return shoeData.map(shoe => {
    if(shoe.Brand === shoeBrandToRender){
      var shoeImage = '';
      if(shoe.Images !== ''){
        var imageArray = JSON.parse(shoe.Images);
        shoeImage = imageArray[0];
      }
      return(
        <ShoeFitCard shoeImage={shoeImage} key={shoe.ProductName} shoe={shoe} />
      );
    }
  })
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

function ShoeCardGrid(props) {
  const [shoeData, setShoeData] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
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
    getData(props.brand)
      .then((result) => {
        setShoeData(result);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
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
    <Grid
      container
      spacing={2}
      direction="row">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {isLoaded ? renderBrand(filteredData, props.brand) : <CircularProgress />}
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default ShoeCardGrid;
