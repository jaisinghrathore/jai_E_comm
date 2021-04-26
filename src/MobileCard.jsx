import React,{useEffect,useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done'
import Grid from "@material-ui/core/Grid"
import firebaseDb from './firebase';
import ProductCarousel from "./ProductCarousel"
import {useHistory} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    gridy: {
    [theme.breakpoints.down('sm')]: {
       margin:'20px 0 0 50%',
       transform:"translate(-50%,0)"
          },
          "&:hover": {
            transform:"scale(1.001)",
            transition:"all 0.5s"
          },
        }
  }));

export default function MobileCard(props) {
    const classes = useStyles();


    const history=useHistory();


    const[init,upda]=useState({});


    useEffect(()=>{
        firebaseDb.child('Mobile').on("value",snapshot=>{
      
            if(snapshot.val() !=null){
                    // upda({...snapshot.val()})
                    // setOpen(true);
                    
                     upda({...snapshot.val()});                      
            }
    })

},[])



        const clicki=(a)=>{
            a.valll="Mobile"
            history.push("/insideproduct",a);
        }


    return (
        <>
        <Grid container style={{marginBottom:"50px",paddingLeft:"20px"}}>

        

    

{/* ternary start */}
{
            Object.keys(init) && Object.keys(init).length > 0 && Array.isArray(Object.keys(init))?



            props.categoryAction == "LowHigh" ?


//ternary start
              Object.keys(init).sort((a, b) => init[a].price - init[b].price).map((row) => (

                <>
        <Grid className={classes.gridy} item lg={3} md={4} xs={12} style={{marginBottom:"20px"}}>
        <div style={{width:"300px"}}>
        <div style={{backgroundColor:"white",height:"355px",width:"290px",overflow:"hidden"}}>

         <div style={{height:"50px",marginBottom:"8px"}}>
         <Avatar style={{position:"relative",top:"6px",left:"20px",backgroundColor:"red"}}><span style={{fontSize:"12px"}}>-{100-((Number(init[row].price)/(Number(init[row].price)+Number(init[row].off))*100).toFixed(0))}% </span></Avatar>
         </div>

        <div style={{position:"relative",right:"28px"}}>
        <ProductCarousel
        width="220px!important"
     image1={init[row].image}
     image2={init[row].image2}

     />
        </div>
        <p onClick={()=>clicki({
        id:row,
        image:init[row].image,
        image2:init[row].image2,
        item:init[row].item,
        sellers:init[row].sellers,
        price: init[row].price,
        off:init[row].off,
        description:init[row].description,
        about_seller:init[row].about_seller
        })} className="jjj" style={{margin:"16px 0 0 0",cursor:"pointer"}}>{init[row].item}</p>

       </div>   
        <span style={{color:"silver",marginTop:"0px"}}>{init[row].sellers}</span>
        <h3 style={{color:"#B12704",margin:"10px 0 0 0px"}}><sup>₹</sup>{init[row].price} <span style={{color:"silver",fontSize:"16px",textDecoration:"line-through"}}>  ₹{Number(init[row].price)+Number(init[row].off)}  </span> <span style={{color:"silver",fontSize:"16px",textDecoration:"none",marginLeft:"10px"}}> save({init[row].off}) {100-((Number(init[row].price)/(Number(init[row].price)+Number(init[row].off))*100).toFixed(0))}%</span></h3>
<p style={{marginTop:"10px"}}> <DoneIcon style={{color:"#B12704"}}/> <span  style={{color:"#B12704"}}><b>Express</b></span> Get it by Tomorrow, <b> March {new Date().getDate()+1}</b> </p>

    <span style={{color:"silver",marginTop:"0px"}}>FREE Delivery over ₹499.Fulfilled by PerfectLegal.</span>
        </div>
        </Grid>

                </>
              ))


        :

//trenery Start

props.categoryAction == "HighLow" ?

        Object.keys(init).sort((a, b) => init[a].price - init[b].price).reverse().map((row) => (

<>
<Grid className={classes.gridy} item lg={3} md={4} xs={12} style={{marginBottom:"20px"}}>
<div style={{width:"300px"}}>
<div style={{backgroundColor:"white",height:"355px",width:"290px",overflow:"hidden"}}>

<div style={{height:"50px",marginBottom:"8px"}}>
<Avatar style={{position:"relative",top:"6px",left:"20px",backgroundColor:"red"}}><span style={{fontSize:"12px"}}>-{100-((Number(init[row].price)/(Number(init[row].price)+Number(init[row].off))*100).toFixed(0))}% </span></Avatar>
</div>

<div style={{position:"relative",right:"28px"}}>
<ProductCarousel
width="220px!important"
image1={init[row].image}
image2={init[row].image2}

/>
</div>
<p onClick={()=>clicki({
id:row,
image:init[row].image,
image2:init[row].image2,
item:init[row].item,
sellers:init[row].sellers,
price: init[row].price,
off:init[row].off,
description:init[row].description,
about_seller:init[row].about_seller
})} className="jjj" style={{margin:"16px 0 0 0",cursor:"pointer"}}>{init[row].item}</p>

</div>   
<span style={{color:"silver",marginTop:"0px"}}>{init[row].sellers}</span>
<h3 style={{color:"#B12704",margin:"10px 0 0 0px"}}><sup>₹</sup>{init[row].price} <span style={{color:"silver",fontSize:"16px",textDecoration:"line-through"}}>  ₹{Number(init[row].price)+Number(init[row].off)}  </span> <span style={{color:"silver",fontSize:"16px",textDecoration:"none",marginLeft:"10px"}}> save({init[row].off}) {100-((Number(init[row].price)/(Number(init[row].price)+Number(init[row].off))*100).toFixed(0))}%</span></h3>
<p style={{marginTop:"10px"}}> <DoneIcon style={{color:"#B12704"}}/> <span  style={{color:"#B12704"}}><b>Express</b></span> Get it by Tomorrow, <b> March {new Date().getDate()+1}</b> </p>

<span style={{color:"silver",marginTop:"0px"}}>FREE Delivery over ₹499.Fulfilled by PerfectLegal.</span>
</div>
</Grid>

</>
))

:
//trenery Start

props.categoryAction == "OlderFirst" ?

Object.keys(init).map((row) => (

<>
<Grid className={classes.gridy} item lg={3} md={4} xs={12} style={{marginBottom:"20px"}}>
<div style={{width:"300px"}}>
<div style={{backgroundColor:"white",height:"355px",width:"290px",overflow:"hidden"}}>

<div style={{height:"50px",marginBottom:"8px"}}>
<Avatar style={{position:"relative",top:"6px",left:"20px",backgroundColor:"red"}}><span style={{fontSize:"12px"}}>-{100-((Number(init[row].price)/(Number(init[row].price)+Number(init[row].off))*100).toFixed(0))}% </span></Avatar>
</div>

<div style={{position:"relative",right:"28px"}}>
<ProductCarousel
width="220px!important"
image1={init[row].image}
image2={init[row].image2}

/>
</div>
<p onClick={()=>clicki({
id:row,
image:init[row].image,
image2:init[row].image2,
item:init[row].item,
sellers:init[row].sellers,
price: init[row].price,
off:init[row].off,
description:init[row].description,
about_seller:init[row].about_seller
})} className="jjj" style={{margin:"16px 0 0 0",cursor:"pointer"}}>{init[row].item}</p>

</div>   
<span style={{color:"silver",marginTop:"0px"}}>{init[row].sellers}</span>
<h3 style={{color:"#B12704",margin:"10px 0 0 0px"}}><sup>₹</sup>{init[row].price} <span style={{color:"silver",fontSize:"16px",textDecoration:"line-through"}}>  ₹{Number(init[row].price)+Number(init[row].off)}  </span> <span style={{color:"silver",fontSize:"16px",textDecoration:"none",marginLeft:"10px"}}> save({init[row].off}) {100-((Number(init[row].price)/(Number(init[row].price)+Number(init[row].off))*100).toFixed(0))}%</span></h3>
<p style={{marginTop:"10px"}}> <DoneIcon style={{color:"#B12704"}}/> <span  style={{color:"#B12704"}}><b>Express</b></span> Get it by Tomorrow, <b> March {new Date().getDate()+1}</b> </p>

<span style={{color:"silver",marginTop:"0px"}}>FREE Delivery over ₹499.Fulfilled by PerfectLegal.</span>
</div>
</Grid>

</>
))

:

// TERNARY START

props.categoryAction == "NewerFirst" ?





Object.keys(init).reverse().map((row) => (

<>
<Grid className={classes.gridy} item lg={3} md={4} xs={12} style={{marginBottom:"20px"}}>
<div style={{width:"300px"}}>
<div style={{backgroundColor:"white",height:"355px",width:"290px",overflow:"hidden"}}>

<div style={{height:"50px",marginBottom:"8px"}}>
<Avatar style={{position:"relative",top:"6px",left:"20px",backgroundColor:"red"}}><span style={{fontSize:"12px"}}>-{100-((Number(init[row].price)/(Number(init[row].price)+Number(init[row].off))*100).toFixed(0))}% </span></Avatar>
</div>

<div style={{position:"relative",right:"28px"}}>
<ProductCarousel
width="220px!important"
image1={init[row].image}
image2={init[row].image2}

/>
</div>
<p onClick={()=>clicki({
id:row,
image:init[row].image,
image2:init[row].image2,
item:init[row].item,
sellers:init[row].sellers,
price: init[row].price,
off:init[row].off,
description:init[row].description,
about_seller:init[row].about_seller
})} className="jjj" style={{margin:"16px 0 0 0",cursor:"pointer"}}>{init[row].item}</p>

</div>   
<span style={{color:"silver",marginTop:"0px"}}>{init[row].sellers}</span>
<h3 style={{color:"#B12704",margin:"10px 0 0 0px"}}><sup>₹</sup>{init[row].price} <span style={{color:"silver",fontSize:"16px",textDecoration:"line-through"}}>  ₹{Number(init[row].price)+Number(init[row].off)}  </span> <span style={{color:"silver",fontSize:"16px",textDecoration:"none",marginLeft:"10px"}}> save({init[row].off}) {100-((Number(init[row].price)/(Number(init[row].price)+Number(init[row].off))*100).toFixed(0))}%</span></h3>
<p style={{marginTop:"10px"}}> <DoneIcon style={{color:"#B12704"}}/> <span  style={{color:"#B12704"}}><b>Express</b></span> Get it by Tomorrow, <b> March {new Date().getDate()+1}</b> </p>

<span style={{color:"silver",marginTop:"0px"}}>FREE Delivery over ₹499.Fulfilled by PerfectLegal.</span>
</div>
</Grid>

</>
))




:


alert("select some category")


     :
     
     "Loading Items..."

        }



</Grid>
        </>
    )
}
