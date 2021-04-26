import React,{useState,useEffect} from 'react'
import firebaseDb from "./firebase";
import Grid from "@material-ui/core/Grid";
import ProductCarousel from "./ProductCarousel"
import DoneIcon from '@material-ui/icons/Done'
import Nav from "./ProductNav";
import CircularProgress from '@material-ui/core/CircularProgress';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useHistory} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

export default function Cart() {
const classes = useStyles();
  const [openmodel, setOpenmodel] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const[subTotal,updateTotal] = React.useState([])
    const[subTotal1,updateTotal1] = React.useState([])
    const[subTotal2,updateTotal2] = React.useState([])
    const[init,upda]=useState({});



    const History=useHistory();

    React.useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    useEffect(()=>{
        firebaseDb.child('cart').on("value",snapshot=>{
      
            if(snapshot.val() !=null){
                    // upda({...snapshot.val()})
                    // setOpen(true);
                    
                     upda({...snapshot.val()});                      
            }
    })

},[])


var delet=(val)=>{
    window.location.reload();

    firebaseDb.child(`cart/${val}`).remove(
        err=>{
            if(err)
            console.log(err);
        }
    )
    setOpen(true);
}


const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);

}

useEffect(()=>{
    new Promise((resolve, reject) =>{
        Object.keys(init).map((row) => (
            subTotal.push(Number(init[row].price))
        ))
        resolve();
    }).then(()=>{
        updateTotal1(subTotal);
    })
})
var aaaa=0;


useEffect(()=>{
    var uniqueArray = subTotal1.filter((item, pos)=>{
        return subTotal1.indexOf(item) == pos;
        })
        uniqueArray.forEach((val)=>{
            aaaa+=val
        })
        updateTotal2(aaaa)
})

//useHistory for buy now 

const clickii=(total,value)=>{
    History.push("./cart/address",{total,init,subTotal2,"id":Object.keys(init)});
}

const deleteAll=()=>{
    window.location.reload();
    firebaseDb.child(`cart`).remove(
        err=>{
            if(err)
            console.log(err);
        }
    )
}

const clicki=(val)=>{
    History.push("/insideproduct",val);
  }
  

    return (
        <>
        <Nav/>

        <h2 style={{margin:"20px 0 0 20px",textDecoration:"underline"}}><b>Shopping Cart</b></h2>
        <hr/>
             {
            Object.keys(init) && Object.keys(init).length > 0 && Array.isArray(Object.keys(init))?
              Object.keys(init).map((row) => (

                <>
              

                    <div style={{padding:"0 100px",marginTop:"40px"}}>

<Grid container spacing={1}>
<Grid item xs={3} style={{backgroundColor:"rgb(240, 240, 240)",display:"flex",height:"220px",justifyContent:"center",borderTop:"2px solid #ddd",borderBottom:"2px solid #ddd"}}>
    
    
    
     
            <div style={{position:"relative",right:"26px",overflow:"hidden"}}>
     <ProductCarousel
     image1={init[row].image}
     image2={init[row].image2}
     />
            </div>       

</Grid>

<Grid item xs={6} style={{padding:"20px 0 0 10px",borderTop:"2px solid #ddd",borderBottom:"2px solid #ddd"}}>
<p className="jjj" style={{marginBottom:"0px",cursor:"pointer"}}  onClick={()=>clicki({
        id:row,
        image:init[row].image,
        image2:init[row].image2,
        item:init[row].item,
        writer:init[row].writer,
        price: init[row].price,
        off:init[row].off,
        description:init[row].description,
        author:init[row].author
        })} >{init[row].item}</p>
<span style={{color:"silver",marginTop:"0px"}}>{init[row].writer}</span>
<h3  style={{color:"#B12704",margin:"10px 0 0 0px"}}><span>Total worth: </span><sup>₹</sup>{init[row].price} </h3>
<p style={{marginTop:"10px"}}> <DoneIcon style={{color:"#B12704"}}/> <span  style={{color:"#B12704"}}><b>Express</b></span> Get it by Tomorrow,<br></br> <b> March {new Date().getDate()+1}</b> </p>

    <span style={{color:"silver",marginTop:"0px"}}>FREE Delivery over ₹499.Fulfilled by PerfectLegal. <span><DeleteIcon onClick={()=>delet(row)} style={{color:"rgb(177, 39, 4)",fontSize:"30px",cursor:"pointer",position:"relative",bottom:"6px",left:"6px"}}/></span></span>

</Grid>
<Grid item xs={3}> </Grid>
 </Grid>
</div>

</>

          ))
          :
          <>
       <h1 style={{textAlign:"center",marginBottom:"30px"}}>Cart is Empty</h1>
       <button style={{position:'relative',left:"50%",transform:"translate(-50%,0)",backgroundColor:" rgb(177, 39, 4)",border:"none",width:"100px",height:"40px",border:'1px solid darkgreen',borderRadius:"10px",color:"white"}} onClick={()=>History.goBack()}> GoBack </button>
         </>
          }  


          <Grid item xs={3} style={{position: "absolute",top:"180px",right:"40px",marginBottom:"200px"}}>
<div style={{width:"270px",border:"1px solid silver",marginLeft:"30px",borderRadius:"6px",padding:"20px"}}>
<p style={{fontSize:"14px",marginBottom:"6px"}}>Inclusive of all taxes :</p>

<h5 style={{float:"left",marginRight:"10px"}}>Subtotal</h5>
<h5 style={{color:"rgb(177, 39, 4)"}}><b>{subTotal2}</b></h5>        

<p  style={{fontSize:"15px"}}>Sold by <span style={{color:"#007185"}}>PerfectLegal India</span> and Fulfilled by <span style={{color:"#007185"}}>Perfect Legal.</span></p>



<button onClick={()=>clickii(subTotal2,init)}  style={{width:"100%",border:"1px solid transparent",backgroundColor:"#CDBA6D",color:"white",height:"40px",borderRadius:"4px"}}>But Now</button>

</div>
<button onClick={deleteAll} style={{backgroundColor:"rgb(177, 39, 4)",color:"white",border:"none",borderRadius:"4px",position:"relative",left:'120px',top:"30px",height:"40px"}}>Delete All</button>
</Grid>

<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        Item has been deleted and reload if necessary
        </Alert>
      </Snackbar>
        </>
    )
}
