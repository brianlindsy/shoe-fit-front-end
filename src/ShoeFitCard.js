import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoeFitSlider from './ShoeFitSlider';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from '@material-ui/lab/Skeleton';

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
      <Skeleton animation={false} className={classes.skeleton}/>
    );
  }
}

function renderSizesOffText(classes, sizesOff){
  if(sizesOff === -1){
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        This shoe runs about 1 size small.
      </Typography>
    );
  } else if (sizesOff === -.5){
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        This shoe runs about half a size small.
      </Typography>
    );
  } else if (sizesOff === 0){
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        This shoe runs about true to size.
      </Typography>
    );
  } else if (sizesOff === .5){
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        This shoe runs about half a size large.
      </Typography>
    );
  } else{
    return (
      <Typography className={classes.sizesOffText} color="textSecondary" variant="body1">
        This shoe runs about 1 size large.
      </Typography>
    );
  }
}

function ShoeFitCard(props) {

  const classes = useStyles();

  return (
    <Grid key={props.shoe.ProductName} item>
    <Card className={classes.root} >
      {renderImage(classes, props.shoeImage)}
        <CardContent>
          <Tooltip title={props.shoe.ProductName} placement="top-start">
            <Typography variant="h6" component="h2" noWrap>
              {props.shoe.ProductName}
            </Typography>
          </Tooltip>
          <Typography className={classes.pos} color="textSecondary" variant="h6">
            {props.shoe.Brand}
          </Typography>
          {renderSizesOffText(classes, props.shoe.SizesOff)}
          <ShoeFitSlider sizesOff={props.shoe.SizesOff}/>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">Add Rating</Button>
        </CardActions>
        <div style={{ width: '90%', margin: 'auto'}}>
          <Typography className={classes.sizesOffText} color="textSecondary" variant="caption">
            {props.shoe.NumberOfSizeReviews} people have reviewed this shoe.
          </Typography>
        </div>
    </Card>
    </Grid>
  );
}

export default ShoeFitCard
