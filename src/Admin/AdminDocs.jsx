import React,{useEffect,useState} from 'react'
import firebaseDb from '../firebase';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import ListIcon from '@material-ui/icons/List';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import Container from '@material-ui/core/container';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from "@material-ui/core/TextField"
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Nav from "./AdminNAv"

function Alert(props) {
    return <MuiAlert elevation={2} variant="filled" {...props} />;
  }




const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        width: "60%",
        height:"70vh",
        border: '2px solid #000',
        backgroundColor: "white",
        overflow: "scroll"

      },
  });
  


  

export default function AdminDocs() {


  const[initcategory,updacategory] = useState("products");
  const[relode,relode2]=useState(true)
  const[alertinit,alertUpda]= React.useState("block")
  const[init,upda]=useState({});
  const classes = useStyles();
  const [opensnac, setOpenscac] = useState(false);
  const [open, setOpen] = useState(false);
  const[initialId,updatedId]=useState("");
  const [initi, updai] = useState(
      (initcategory == "products") ?
    {
    
      image:"",
      image2:"",
      item:" ",
      writer:" ",
      price: " ",
      off:" ",
      description:" ",
      author:" "

  }

  :

  {
    
    image:"",
    image2:"",
    item:" ",
    sellers:" ",
    price: " ",
    off:" ",
    description:" ",
    about_seller:" "

}

)
 


const cateChange = (e) =>{
  updacategory(e.target.value);
}


    //update change
    const changes=(event)=>{
        updai({...initi,[event.target.name] : event.target.value})
    }
    const updat=()=>{
      return new Promise((resolve,reject)=>{
          const regi=
      (initcategory == "products") ?
        
        {
            image:initi.image,
            image2:initi.image2,
            item:initi.item,
            writer:initi.writer,
            price:initi.price,
            off:initi.off,
            description:initi.description,
            author:initi.author
        }  :

        {
          image:initi.image,
          image2:initi.image2,
          item:initi.item,
          sellers:initi.sellers,
          price:initi.price,
          off:initi.off,
          description:initi.description,
          about_seller:initi.about_seller
      
        }
         firebaseDb.child(`${initcategory}/${initialId}`).set(
            regi,
            err=>{
                if(err)
                    console.log("This is the error")
                }
        )
        
        resolve();
      }).then(()=>{        
            setOpen(false);
      })
      

     



    }
    //update change

    // console.log(initi);


// console.log(Array.isArrayinit);

// Object.keys(init).map(id=>{
// console.log(id)
// console.log(id['image']);
// })

// console.log(Object.keys(init));


const editclicked=(id)=>{

   new Promise((resolve, reject)=>{
      updatedId(id);
    setOpen(true);
    resolve();
  }).then(()=>{
    
setTimeout(()=>{
  alertUpda("none");
              },1000)




  })
  

}

const handleClose=()=>{
    setOpen(false);
    }

var a=33;
const delet=(id)=>{

        firebaseDb.child(`${initcategory}/${id}`).remove(
            err=>{
                if(err)
                console.log(err);
            }
        )
        setOpenscac(true);
     
        a+=20;

}



useEffect(()=>{

  if(initcategory == "products"){

 if(init[initialId]!=undefined){
  initi.image=init[initialId].image
  initi.image2=init[initialId].image2
  initi.item=init[initialId].item
  initi.writer=init[initialId].writer
  initi.price=init[initialId].price
  initi.off=init[initialId].off
  initi.description=init[initialId].description
  initi.author=init[initialId].author
 }
}else{
  if(init[initialId]!=undefined){
    initi.image=init[initialId].image
    initi.image2=init[initialId].image2
    initi.item=init[initialId].item
    initi.sellers=init[initialId].sellers
    initi.writer=init[initialId].writer
    initi.price=init[initialId].price
    initi.off=init[initialId].off
    initi.description=init[initialId].description
    initi.about_seller=init[initialId].about_seller
   }
}


},[initialId,open,relode])


React.useEffect(() => {
  alertUpda("block");
},[open]);



    useEffect(()=>{
        firebaseDb.child(initcategory).on("value",snapshot=>{
      
            if(snapshot.val() !=null){
                    // upda({...snapshot.val()})
                    // setOpen(true);

                     upda({...snapshot.val()});                      
            }
    })

},[initcategory])





//snackbar
const handleCloser = (event, reason) => {
 if (reason === 'clickaway') {
      return;
    }
    setOpenscac(false);
  };








  var valInc=0;



return (
<>
<Nav/>




<div class="dropdown" style={{position:"absolute",top:"100px",left:"170px",cursor:"pointer"}}>
  <button type="button" class="btn btn-primaryk" data-toggle="dropdown" style={{float:"left",boxShadow:"2px 2px 4px 2px grey",borderRadius:"10px"}} >
    <ListIcon/>
  </button>
  <div class="dropdown-menu" style={{boxShadow:"1px 1px 4px 1px grey"}}>
    <option  class="dropdown-item" onClick={cateChange} value="products">Books</option>
    <option  class="dropdown-item" onClick={cateChange}  value="Mobile">Mobile</option>
    <option  class="dropdown-item" onClick={cateChange}  value="Television">Television</option>
    <option  class="dropdown-item" onClick={cateChange}  value="Cothes">Clothes</option>
  </div>
  
  
</div>  







    <h1 style={{textAlign:"center",textDecoration:"underline",marginBottom:"0px"}}>All Item Details</h1>
    <p style={{textAlign:"center"}}>You can manage all the items from here</p>
    <Container>
    <h6 style={{backgroundColor:"transparent",boxShadow:"2px 2px 4px 2px grey",color:"#000",padding:"10px 10px 10px 10px",borderRadius:"10px",marginLeft:'50%',transform:"translate(-50%,0)",textAlign:"center",cursor:"none"}}>
  {
    (initcategory=="products")?
    <>
    Books Data ⬇
    </>
    :
    initcategory +" "+ "Data "+ "⬇"
    }
  </h6>
    <div className="table-responsive">
  
    <table class="table table-bordered">
    <thead>
      <tr>
{
      (initcategory == "products") ?
        <>
        <th style={{textAlign:"center"}}>S No.</th>
        <th style={{textAlign:"center"}}>Image1</th>
        <th style={{textAlign:"center"}}>Image2</th>
        <th style={{textAlign:"center"}}>Item Name</th>
        <th style={{textAlign:"center"}}>Writer Name</th>
        <th style={{textAlign:"center"}}>Item Price</th>
        <th style={{textAlign:"center"}}>Item Off</th>
        <th style={{textAlign:"center"}}>Product Description</th>
        <th style={{textAlign:"center"}}>About Author</th>
        <th style={{textAlign:"center"}}>Actions</th>
        </>
        :
        <>
        <th style={{textAlign:"center"}}>S No.</th>
        <th style={{textAlign:"center"}}>Image1</th>
        <th style={{textAlign:"center"}}>Image2</th>
        <th style={{textAlign:"center"}}>Item Name</th>
        <th style={{textAlign:"center"}}>Seller's Name</th>
        <th style={{textAlign:"center"}}>Item Price</th>
        <th style={{textAlign:"center"}}>Item Off</th>
        <th style={{textAlign:"center"}}>Product Description</th>
        <th style={{textAlign:"center"}}>about_seller</th>
        <th style={{textAlign:"center"}}>Actions</th>
        </>
}
      </tr>
    </thead>
    <tbody>

    {Object.keys(init) && Object.keys(init).length>1 && Array.isArray(Object.keys(init))?
    Object.keys(init).map((val)=>(

      <tr>
{     
   (initcategory == "products") ?
<>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"100px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{valInc+=1}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].image}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].image2}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].item}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].writer}</div></td> 
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].price}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].off}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].description}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].author}</div></td> 
        <td>
        <EditIcon style={{float:"left",marginRight:"10px",color:"green"}} onClick={()=>editclicked(val)}/>
        <DeleteIcon style={{float:"left",color:'rgb(177, 39, 4)'}} onClick={()=>delet(val)}/>
        </td>
        </>
:
<>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"100px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{valInc+=1}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].image}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].image2}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].item}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].sellers}</div></td> 
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].price}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].off}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].description}</div></td>
        <td data-toggle="tooltip" title="scroll right to see more!"><div class="barrr" style={{width:"300px",height:'30px',overflow:'scroll',cursor:"pointer",whiteSpace:"nowrap",textAlign:"center"}}>{init[val].about_seller}</div></td> 
        <td>
        <EditIcon  style={{float:"left",marginRight:"10px",color:"green"}} onClick={()=>editclicked(val)}/>
        <DeleteIcon style={{float:"left",color:'rgb(177, 39, 4)'}} onClick={()=>delet(val)}/>

        </td>
</>
} 
     </tr>
   )
   
   )
    
    :
    
    "no Items"
    
    }
     
  </tbody>
  </table>
  </div>
    </Container>
    
    <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 400,
        }}
      >


{/* model editing */}






        <Fade in={open}>
          <div className={classes.paper} style={{position:"relative"}}>
            <h2 id="spring-modal-title" style={{textAlign:"center",marginBottom:"0"}}>Edit your details</h2>
            <p id="spring-modal-description" style={{textAlign:"center"}}>You can easily edit from here</p>
<button onClick={()=>{relode2(!relode)}} style={{position:"absolute",top:"20px",left:"20px",boxShadow:"1px 1px 4px 1px grey",border:"none",borderRadius:"10px"}}>Refresh</button>
<ArrowBackIcon  style={{position:"absolute",top:"16px",left:"100px",fontSize:"40px",color:"#f50057",textShadow:"1px 1px 4px grey",display:alertinit,borderRadius:"10px"}} className="breathingEffect" />


            <Grid container >
<Container>

{

  (initcategory == "products" ) ?
  

    initialId ?
    <>
<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   value={initi.image}
   label="Upload image address"
   onChange={changes}
   id="outlined-required"
   name="image"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   value={initi.image2}
   onChange={changes}
   id="outlined-required"
   label="Upload Another image address"
   name="image2"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   onChange={changes}
   id="outlined-required"
   name="item"
   value={initi.item}
   label="Item Name"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   onChange={changes}
   id="outlined-required"
   label="writer name"
   value={initi.writer}
   name="writer"
   variant="outlined"
 />
</Grid>
<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   label="Item Price"
   onChange={changes}
   id="outlined-required"
   value={initi.price}
   name="price"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   onChange={changes}
   id="outlined-required"
   label="Item Off"
   value={initi.off}

   name="off"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   onChange={changes}
   id="outlined-required"
   name="description"
   value={initi.description}
   label="Product Description"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"2px"}}
   required
   value={initi.author}
   onChange={changes}
   id="outlined-required"
   label="Author"
   name="author"
   variant="outlined"
 />
 
</Grid>
</>
:
"Loading....."

:
initialId ?

  <>
<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   label="Upload image address"
   onChange={changes}
   id="outlined-required"
   name="image"
   value={initi.image}
   
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   onChange={changes}
   id="outlined-required"
   value={initi.image2}
   label="Upload Another image address"
   name="image2"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   onChange={changes}
   id="outlined-required"
   name="item"
   value={initi.item}
   label="Item Name"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   onChange={changes}
   id="outlined-required"
   label="sellers name"
   name="sellers"
   value={initi.sellers}
   variant="outlined"
 />
</Grid>
<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   label="Item Price"
   onChange={changes}
   id="outlined-required"
   value={initi.price}
   name="price"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   onChange={changes}
   id="outlined-required"
   label="Item Off"
   value={initi.off}
   name="off"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"10px"}}
   required
   onChange={changes}
   id="outlined-required"
   name="description"
   value={initi.description}
   label="Product Description"
   variant="outlined"
 />
</Grid>

<Grid item xs={12}>
 <TextField
 style={{width:"100%",marginBottom:"2px"}}
   required
   value={initi.about_seller}
   onChange={changes}
   id="outlined-required"
   label="about_seller"
   name="about_seller"
   variant="outlined"
 />
 
</Grid>
</>
:
"Loading....."

}

       <Button onClick={updat} color="secondary" variant="contained" style={{margin:"20px 0",marginLeft:"50%",transform:"translate(-50%,0)"}}>Update</Button>

</Container>
</Grid>


          </div>
        </Fade>
      </Modal>




      <Snackbar open={opensnac} autoHideDuration={3000} onClose={handleCloser}>
        <Alert onClose={handleCloser} severity="success">
        Your Product has been deleted if necessary please reload the page
        </Alert>
      </Snackbar>
      
    </>
  );
}