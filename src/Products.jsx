import React,{useEffect,useState} from 'react'
import Carousel from "./Carousel"
import Grid from "@material-ui/core/Grid"
import DoneIcon from '@material-ui/icons/Done'
import ProductCarousel from "./ProductCarousel"
import firebaseDb from './firebase';
import Nav from "./ProductNav";
import { makeStyles } from '@material-ui/core/styles';
import Card from "./Card"
import {useHistory} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import MobileCard from './MobileCard';
import Television from './TelivisionCard'
import Clothes from "./ClothesCard";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




export default function Products() {

 


const[categoryinit, categoryupda]=useState("OlderFirst");

    const[init,upda]=useState({});

    // const[initslider,updaslider]=useState({
    //     max:1000,
    //     min:100,
    // });

    useEffect(()=>{
        firebaseDb.child('products').on("value",snapshot=>{
      
            if(snapshot.val() !=null){
                    // upda({...snapshot.val()})
                    // setOpen(true);
                    
                     upda({...snapshot.val()});                      
            }
    })

},[])




  const [value, setValue] = React.useState(0);
  const[initHide,updaHige]=React.useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
},[value,categoryinit])


const clickyu = () =>{
  updaHige(!initHide);
}

const clicky=(value)=>{
  categoryupda(value)
}

// slider js


// const changi=(e)=>{
//   updaslider({...initslider,[e.target.name]:e.target.value});
// }


//slider js



    return (
        <>
          <Nav/>
          <Carousel/>


          <AppBar style={{backgroundColor:"black",position:"sticky",bottom:"80px"}}>

      <MenuOpenIcon onClick={clickyu} style={{position:"absolute",right:"40px",top:"6px",borderRadius:"10px",zIndex:"99",fontSize:"36px"}}/>

        <div style={{position:"absolute",right:"46px",top:"40px",width:"160px",height:"170px",backgroundColor:"grey",borderRadius:"10px",cursor:"pointer",padding:"10px",boxShadow:"2px 2px 4px 2px rgba(1,1,1,0.6)",display:initHide?"block":"none"}}>
        <p className="boxx" style={{textAlign:"center"}} onClick={()=>clicky("NewerFirst")} >Newer First</p>
        <p className="boxx" style={{textAlign:"center"}} onClick={()=>clicky("OlderFirst")}  >Older First</p>
        <p className="boxx" style={{textAlign:"center"}} onClick={()=>clicky("LowHigh")}  >Low to High</p>
        <p className="boxx" style={{textAlign:"center",marginBottom:"6px"}}  onClick={()=>clicky("HighLow")} >High to Low</p>  

        {/* slider */}

      {/* <span style={{float:"left",fontSize:"10px",marginBottom:"10px"}}>High:{initslider.max}</span>
        <input type="range" min={initslider.min} max="100000" name="max"  onChange={changi} class="slider" style={{width:"140px",marginBottom:"20px"}}/>
        <input type="range" min="1" max="100000" name="min" onChange={changi}  class="slider" style={{width:"140px"}}/>
      <span style={{float:"right",fontSize:"10px"}}>Low: {initslider.min}</span> */}


        {/* slider */}

       
              
        </div>





      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
        

        
        <Tab label="Books" {...a11yProps(0)}  />
          <Tab label="Mobile" {...a11yProps(1)} />
          <Tab label="Television" {...a11yProps(2)} />
          <Tab label="Clothes" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Card categoryAction={categoryinit}  />    
      </TabPanel>
      <TabPanel value={value} index={1}>
      <MobileCard  categoryAction={categoryinit} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Television  categoryAction={categoryinit} />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Clothes  categoryAction={categoryinit} />
      </TabPanel>



        </>
    )
}
