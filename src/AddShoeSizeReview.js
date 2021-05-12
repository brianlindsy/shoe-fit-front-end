import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ShoeFitSlider from './ShoeFitSlider.js';
import ReCAPTCHA from "react-google-recaptcha";
import { updateReviews, verifyCaptcha } from './utils.js';

export default function AddShoeSizeReview(props) {
  const [open, setOpen] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(0);
  const [captchaSuccess, setCaptchaSuccess] = React.useState(false);

  const handleSliderChange = (event, value) => {
    setSliderValue(value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if(captchaSuccess === true){
      var brand = props.brand;
      var name = props.name;
      var size = sliderValue;
      updateReviews(brand, name, size);
    }
    setOpen(false);
  };

  async function onChange(value){
    var response = await verifyCaptcha(value);
    setCaptchaSuccess(response.isSuccess);
  }

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>How does this shoe fit you?</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Add a review for this shoe!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Have you tried on this shoe before?
            Does this shoe run big, run small or is it true to it's size on the box?
          </DialogContentText>
        </DialogContent>
        <div style={{ width: '90%', margin: 'auto'}}>
            <ShoeFitSlider handleSliderChange={handleSliderChange} />
          </div>
        <DialogActions>
          <ReCAPTCHA sitekey="6LcNe80aAAAAAAoQns8dtC5ZydEPTgw5NHsQ1is5" onChange={onChange}/>
          <Button onClick={handleClose} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}