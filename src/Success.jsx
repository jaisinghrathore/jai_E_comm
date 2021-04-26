import React from 'react';
import Nav from "./ProductNav";
import Button from '@material-ui/core/Button';
import {useHistory,useLocation} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function Success() {
    const location = useLocation();
    const history = useHistory();



        const click=()=>{

                const pre=new Promise((res,rej)=>{
                   history.push("/products");
                        res();
                })}

        

    return (
        <div>
        <Nav/>
        <Paper style={{display:"grid",placeItems:"center",position:"absolute",top:"0",zIndex:"999999",height:"100vh",width:"100%",overflow:"hidden"}}>
           {/* <div className="container p-5" >
            <div className="row">
                <div className="col-2"></div>

                <div className="col-8">
                <h5 style={{color:"red",marginTop:"10px"}}>Hello {location.state.state.init.namee},</h5>
                <p>Thank you for shopping with us. You ordered <span style={{color:"skyblue"}}>"Faster, Higher, Stronger...".</span><br/>We'll send a confirmation when your item shipped.</p>
                
                
                <div style={{width:"70%",margin:"30px 0 0 0",height:"200px",backgroundColor:"rgb(204, 200, 200)",borderTop:"6px solid grey"}} className="container">
                                  <div className="row mt-4">


                                  <div className="col-6">
                                      <p style={{fontSize:"14px"}}>Estimated delivary Date:<br/><br/><span style={{color:"green"}}>Thursday, December 23,2014 -<br/>Monday, December 29, 2014 -</span></p>
                                  </div>
                                  <div className="col-6">
                                     <p >Ship to <br></br>
                                     <span style={{color:"red"}}>{location.state.state.init.line1}, {location.state.state.init.line2}</span>
                                     </p> 

                                     <p style={{color:"green",textDecoration:"underline"}}>Order Total: {location.state.state.value}</p>

                                  </div>


                                  </div>
                </div>
                
                
                
                </div>



                 
                <div className="col-2">
                <Button variant="contained" color="secondary" style={{width:"400px",position:"absolute",top:"160px",height:"50px",right:"-50px"}} onClick={click}>
        Continue Shopping
      </Button>
                </div>

           </div>q
        </div> */}

            <CheckCircleIcon style={{color:"green",fontSize:"80px"}}/>
            <h3>Thank You for your purchase!</h3>
{
    location.state.id && Array.isArray(location.state.id) && location.state.id.length ?
            <span style={{backgroundColor:"rgba(1,1,1,0.2)",padding:"5px",borderRadius:"10px"}}>Items_Id: [ {location.state.id.map((val)=>(val+","))}].</span>
            :
            <span style={{backgroundColor:"rgba(1,1,1,0.2)",padding:"5px",borderRadius:"10px"}}>Items_Id:  {location.state.id}</span>

}            
            <h4 style={{color:"grey",textAlign:"center"}}>Thanks for being awesome,<br/>we hope you enjoy your purchase</h4>




            <p >Ship to, <br></br>
                                     <span>{location.state.init.line1}, {location.state.init.line2} on {new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString()} </span>
                                     </p> 

                                     <h5 style={{textDecoration:"underline"}}>Order Total: {location.state.value}</h5>
 

            <p style={{marginBottom:"2px"}}>If you have any questions or conserns reguarding this ,do not hesitate to contact us at <br></br>
            e_commerce@perfectLegal.net</p>

        <span onClick={click} style={{backgroundColor:"#f50057",color:"white",padding:"10px",borderRadius:"10px",marginBottom:"10px",cursor:"pointer"}}>Continue Shopping</span>

        </Paper>
        </div>
    )
}
