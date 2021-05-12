import React from 'react';
import Typography from '@material-ui/core/Typography';

function NumberPeopleReviewedText(props) {
  const numReviews = props.numReviews;

  return (
    <div style={{ width: '90%', margin: 'auto'}}>
      <Typography color="textSecondary" variant="caption">
        {numReviews === undefined ? 0 : numReviews} {numReviews === 1  ? "person has" : "people have"} reviewed this shoe.
      </Typography>
    </div>
  );
}

export default NumberPeopleReviewedText;
