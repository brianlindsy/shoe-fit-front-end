import React from 'react';
import Grid from '@material-ui/core/Grid';
import ShoeFitCard from './ShoeFitCard.js';

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

function ShoeCardGrid(props) {
  return (
    <Grid
      container
      spacing={2}
      direction="row">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {renderBrand(props.shoeData, props.brand)}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ShoeCardGrid;
