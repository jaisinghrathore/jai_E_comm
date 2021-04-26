import React,{useState} from 'react';
import logo from "./Image/loggo.png";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import firebaseDb from "./firebase";
import {Link} from "react-router-dom";



export default function ProductNav() {

  const[init,upda]=React.useState();
  const[init1,upda1]=React.useState(0);
  const[currentAction,updatedAction]=useState("-240px");

React.useEffect(()=>{
  firebaseDb.child('cart').on("value",snapshot=>{
      
    if(snapshot.val() !=null){
            // upda({...snapshot.val()})
            // setOpen(true);
            
             upda({...snapshot.val()});  
             upda1(Object.keys({...snapshot.val()}).length);                    
    }
})

          

},[]);

const clicky=()=>{
  updatedAction("0");
}

const closee=()=>{
  updatedAction("-300px");
}


    return (
        <>
{/* Navigation details */}
          
{/* Navigation details */}

                <nav className="navbar navbar-dark" style={{backgroundColor:"#0F1111",height:"80px"}}>
                <Link to="products"> <img src={logo} height="80px" style={{position:"relative",bottom:"10px"}}/></Link>
 
  <span style={{color:"white",fontSize:"34px",position:"absolute",right:"40px",top:'-4px',fontSize:"30px"}}>{init1}</span>

<Link to="cart"><ShoppingCartIcon style={{color:"white",fontSize:"34px",position:"absolute",right:"15px",top:"-12px"}}></ShoppingCartIcon></Link>
</nav>            
        </>
    )
}
