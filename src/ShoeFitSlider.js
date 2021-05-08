import React from 'react';
import Slider from '@material-ui/core/Slider';

const marks = [
  {
    value: -1,
    label: 'Small',
  },
  {
    value: -.5,
    label: '',
  },
  {
    value: 0,
    label: 'True to Size',
  },
  {
    value: .5,
    label: '',
  },
  {
    value: 1,
    label: 'Large',
  },
];

function ShoeFitSlider(props) {

  return (
    <div style={{ width: '90%', margin: 'auto'}}>
      <Slider
          defaultValue={props.sizesOff}
          aria-labelledby="discrete-slider"
          step={null}
          marks={marks}
          min={-1}
          max={1}
          track={false}
      />
    </div>
  );
}

export default ShoeFitSlider;
