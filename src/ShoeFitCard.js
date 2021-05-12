import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ShoeFitSlider from './ShoeFitSlider';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from '@material-ui/lab/Skeleton';
import AddShoeSizeReview from './AddShoeSizeReview.js';
import NumberPeopleReviewedText from './NumberPeopleReviewedText.js';
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles({
  root: {
    height: 450,
    width: 300
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 10
  },
  media: {
    height:175
  },
  skeleton: {
    height: 175
  }
});

function renderImage(classes, shoeImage){
  if(shoeImage !== ''){
    return (
      <CardMedia image={shoeImage} className={classes.media} />
    );
  } else {
    return (
      <Skeleton animation={false} variation="rect" className={classes.skeleton}/>
    );
  }
}

function renderSizesOffText(classes, sizesOff){
  const closest = [-1, -0.5, 0, .5, 1].reduce((a, b) => {
    return Math.abs(b - sizesOff) < Math.abs(a - sizesOff) ? b : a;
  });
  if(closest === -1){
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        This shoe runs about 1 size small.
      </Typography>
    );
  } else if (closest === -.5){
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        This shoe runs about half a size small.
      </Typography>
    );
  } else if (closest === 0){
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        This shoe runs about true to size.
      </Typography>
    );
  } else if (closest === .5){
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        This shoe runs about half a size big.
      </Typography>
    );
  } else if (closest === 1){
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        This shoe runs about 1 size big.
      </Typography>
    );
  } else {
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        We do not have enough data for this shoe.
      </Typography>
    );
  }
}

function ShoeFitCard(props) {

  const classes = useStyles();
  const sum = props.shoe.ShoeSizeSum;
  const numReviews = props.shoe.NumberOfShoeSizeReviews;
  const sizesOff = sum / numReviews;

  const closest = [-1, -0.5, 0, .5, 1].reduce((a, b) => {
    return Math.abs(b - sizesOff) < Math.abs(a - sizesOff) ? b : a;
  });

  return (
    <Grid key={props.shoe.ProductName} item>
    <Card className={classes.root} >
      <LazyLoad height={200}>
      {renderImage(classes, props.shoeImage)}
      </LazyLoad>
        <CardContent>
          <Tooltip title={props.shoe.ProductName} placement="top-start">
            <Typography variant="h6" component="h2" noWrap>
              {props.shoe.ProductName}
            </Typography>
          </Tooltip>
          <Typography className={classes.pos} color="textSecondary" variant="h6">
            {props.shoe.Brand}
          </Typography>
          {renderSizesOffText(classes, closest)}
          <ShoeFitSlider isDisabled={true} sizesOff={closest} name={props.shoe.ProductName}/>
        </CardContent>
        <CardActions>
          <AddShoeSizeReview brand={props.shoe.Brand} name={props.shoe.ProductName} />
        </CardActions>
        <NumberPeopleReviewedText numReviews={numReviews}/>
    </Card>
    </Grid>
  );
}

export default ShoeFitCard
