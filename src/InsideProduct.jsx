import React from 'react';
import Nav from "./ProductNav";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Cara from "./ProductCarousel";
import DoneIcon from '@material-ui/icons/Done'
import Slider from "./Slider.jsx";
import Delivery from "./Delivery";
import {useLocation,useHistory} from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import firebaseDb from "./firebase";
import Recommend from "./Recommend";
import Success from "./Success";


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }



const InsideProduc=()=>{

    

    const Location = useLocation();
    const History = useHistory();
  


    const [open, setOpen] = React.useState(false);

    const[init,upda]=React.useState(Location.state.price);
    
        console.log(init);

   React.useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    var changii =(e)=>{
        upda(Location.state.price*e.target.value);
    }
        
            var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

            var buyNow=(val,val2)=>{
                val.price=val2;
                val.id=Location.state.id
                    History.push("./cart/address",val);

            }

            //adding value to the database through the cart.

            const cart=(a,b)=>{

                a.price=b;
                

                

                firebaseDb.child(`cart`).push(
                    
                    a,
                    err=>{
                        if(err)
                            console.log("This is the error")
                        }

                )
                setOpen(true);
               
                   }

                 

        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
        
            setOpen(false);
          };

          const clicki=(val)=>{
            History.push("/insideproduct",val);
          }
          
        
console.log(Location.state);
   

    return (
        <>
        <div style={{width:"100%",overflow:"hidden"}}>
        <Nav/>
                <Container>
        <Grid container style={{marginTop:"30px"}}>
        <Grid item xs={3} style={{width:"340px",overflow:"hidden"}}>
        <div style={{position:"relative",right:"16px"}}>
        <Cara
            width="220px!important"
            image1={Location.state.image}
            image2={Location.state.image2}
        />
        </div>
            <h6 style={{marginTop:"40px",textAlign:"center",cursor:"pointer"}}>{Location.state.item}</h6>
            <p style={{color:"grey",marginTop:"0px",paddingLeft:"46px"}}>{Location.state.writer?Location.state.writer:Location.state.sellers} -</p>


            </Grid>
            <Grid  item xs={6} style={{padding:"20px"}}>
            <h5 className="jjj"  style={{cursor:"pointer"}} onClick={()=>clicki(
                Location.state.sellers && Location.state.about_seller ?
                {
        image:Location.state.image,
        image2:Location.state.image2,
        item:Location.state.item,
        sellers:Location.state.sellers,
        price: Location.state.price,
        off:Location.state.off,
        description:Location.state.description,
        about_seller:Location.state.about_seller
                }
        :
                {
        image:Location.state.image,
        image2:Location.state.image2,
        item:Location.state.item,
        writer:Location.state.writer,
        price: Location.state.price,
        off:Location.state.off,
        description:Location.state.description,
        author:Location.state.author
                }
        
        
        )}>{Location.state.item}</h5>
            <p style={{color:"grey",marginTop:"0px"}}>{Location.state.writer?Location.state.writer:Location.state.sellers} -</p>
            <hr/>
<p style={{marginTop:"10px",fontSize:"15px"}}> <DoneIcon style={{color:"#B12704"}}/> <span  style={{color:"#B12704"}}><b>Express</b></span> Get it by Tomorrow, <b> March {new Date().getDate()+1}</b> on orders over ₹ 499.00 shipped by PerfectLegal. </p>
<p>Fastest delivery: <b>Tomorrow</b></p>
<p>Order within 2 hrs and 21 mins</p>
        {/* dsdfsdfdsfsdfsf */}
        <Slider/>
        <Delivery/>
        {/* dsdfsdfdsfsdfsf */}
        <hr/>
        <p style={{textAlign:"left",lineHeight:"30px"}}>{Location.state.description}</p>
        
        </Grid>
        <Grid item xs={2}>

                    <div style={{width:"270px",height:"384px",border:"1px solid silver",marginLeft:"30px",borderRadius:"6px",padding:"16px"}}>

                            <h5 style={{color:"rgb(177, 39, 4)"}}><b>₹ {init}</b></h5>        
                            <p style={{fontSize:"14px",marginBottom:"4px"}}>M.R.P.: ₹ {Number(Location.state.price)+Number(Location.state.off)} for each.</p>
                            <p  style={{fontSize:"15px",marginBottom:"4px"}}>You Save: ₹ {Number(Location.state.off)}  ({100-((Number(Location.state.price)/(Number(Location.state.price)+Number(Location.state.off))*100).toFixed(0))}%)</p>
                        <p style={{fontSize:"14px"}}>Inclusive of all taxes :</p>

                            <h6 style={{color:"#007600",fontSize:"18px"}}>In stock.</h6>

                            <p  style={{fontSize:"15px"}}>Sold by <span style={{color:"#007185"}}>PerfectLegal India</span> and Fulfilled by <span style={{color:"#007185"}}>Perfect Legal.</span></p>

                            <p style={{fontSize:"15px",float:"left",marginRight:"14px"}}>Quantity:</p>
                            <select onChange={changii} className="quantity" style={{width:"50px"}}>
                            {arr.map((val,index)=>(
                                <>
                                <option value={val}>{val}</option>
                                </>
                            ))}
                            </select>
                            
      
                      <button onClick={()=>cart(Location.state,init)} style={{width:"100%",border:"1px solid transparent",backgroundColor:"#CDBA6D",color:"white",height:"40px",borderRadius:"4px",marginBottom:"14px"}}>Add to Cart</button>
                            <button onClick={()=>buyNow(Location.state,init)} style={{width:"100%",border:"1px solid transparent",backgroundColor:"#CDBA6D",color:"white",height:"40px",borderRadius:"4px"}}>But Now</button>
                                                        </div>

            </Grid>
        <div style={{backgroundColor:"rgb(240, 240, 240)",padding:"14px"}}>
            <h3>{Location.state.author?"About the Author":"About the Seller"}</h3>
            <p style={{lineHeight:"40px"}}>{Location.state.author?Location.state.author:Location.state.about_seller}</p>
        </div>

        <h3 style={{margin:"30px",textDecoration:"underline"}}>Recommended Item's</h3>

        </Grid>

                </Container>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Added to cart
        </Alert>
        </Snackbar>


                                    <Recommend target={Location.state.valll} writer={Location.state.writer?Location.state.writer:Location.state.sellers}/>
</div>
        </>
    )
}

export default InsideProduc;