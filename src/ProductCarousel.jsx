import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images-na.ssl-images-amazon.com/images/I/51NcIBUnokL._SX321_BO1,204,203,200_.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
 
];


function ProductCarousel(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  
const useStyles = makeStyles((theme) => ({
  root: {
        flexGrow: 1,
    
  },

  img: {
    height:"210px",
    overflow: 'hidden',
    width:props.width
  },
}));

const classes = useStyles();


  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
          <div style={{marginLeft:"64px"}}>
              <img  style={{height:props.height,width:props.width}} className={classes.img} src={props.image1}/>
          </div>
          <div style={{marginLeft:"64px"}}>
              <img  style={{height:props.height,width:props.width}}  className={classes.img} src={props.image2}/>
          </div>
      </AutoPlaySwipeableViews>
      
    </div>
  );
}

export default ProductCarousel;
