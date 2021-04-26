import React,{useState} from 'react'
import Button from "@material-ui/core/Button"
import {useHistory} from "react-router-dom"
import{ Grid,Container,TextField,makeStyles} from "@material-ui/core"
import firebaseDb from '../firebase';
import Nav from "./AdminNAv";
import ListIcon from '@material-ui/icons/List';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export default function AdminData() {


    const history = useHistory();

    const[initcategory,updacategory] = useState("products");
    const cateChange = (e) =>{
      updacategory(e.target.value);
    }

    console.log(initcategory);

      
    const[init,upda]=useState(
    (initcategory == "products")?
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
    const[init1,upda1]=useState({});


   


    const changi=(e)=>{
        const namee=e.target.name;
        const value=e.target.value;

        upda({...init,[namee]:value})
    }
// //validation
// if(initcategory == "products"){
//   return{
// var len=[init.image.length,init.image2.length,init.item.length,init.writer.length,init.price.length,init.off.length,init.description.length,init.author.length];
//   }
// }else{
// var len=[init.image.length,init.image2.length,init.item.length,init.sellers.length,init.price.length,init.off.length,init.description.length,init.about_seller.length];
// }
// //validation



    const submi=()=>{
        if(init.image.length >=3 && init.image2.length >=3 && init.item.length >=3 && init.price.length >=3  && init.description.length >=3 && init.off.length >=3){
        const promise=new Promise((resolve, reject)=>{
            const reg=
          (initcategory == "products")?
            
            {
                image:init.image,
                image2:init.image2,
                item:init.item,
                writer:init.writer,
                price:init.price,
                off:init.off,
                description:init.description,
                author:init.author
            } :

            {
              image:init.image,
              image2:init.image2,
              item:init.item,
              sellers:init.sellers,
              price:init.price,
              off:init.off,
              description:init.description,
              about_seller:init.about_seller
          };
            
            upda1(reg);
                //firebase

              firebaseDb.child(initcategory).push(
                reg,
                  err=>{
                      if(err){
                          console.log(err);
                      }
                  }
              )

                //firebase
            resolve();
        }).then((a) =>{ 
          (initcategory == "products")?

            upda({...init,["image"]:"",["image2"]:"",["item"]:"",["writer"]:"",["price"]:"",["off"]:"",["description"]:"",["author"]:""})
            :
            upda({...init,["image"]:"",["image2"]:"",["item"]:"",["sellers"]:"",["price"]:"",["off"]:"",["description"]:"",["about_seller"]:""})
            
          })
    }else{
        alert('Fill every details');
    }
      
    }


    const classes = useStyles();



    return (

        <div>
        <Nav/>
        
            <h1 style={{textAlign:"center",textDecoration:"underline",marginBottom:"0px"}}>Perfect Legal Admin</h1>
            <p style={{textAlign:"center"}}>You can add your new products</p>

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



                {/* INPUT ITEMS */}

                <Container>
  <Grid container >

  <Grid item xs={1} sm={3}>

  </Grid>
    
    <Grid xs={10} sm={6}>
  <form className={classes.root}  noValidate autoComplete="off">
  <Grid container >
  <h6 style={{backgroundColor:"transparent",boxShadow:"2px 2px 4px 2px grey",color:"#000",padding:"10px 10px 10px 10px",borderRadius:"10px",marginLeft:'50%',transform:"translate(-50%,0)",textAlign:"center",cursor:"none"}}>

  {
    (initcategory=="products")?
    <>
    Books Data ⬇ 
    </>
    :
    initcategory +" "+ "Data " + "⬇"
    }
  </h6>
{
  (initcategory == "products" ) ?
  <>
       <Grid item xs={12}>

        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Upload image address"
          name="image"
          value={init.image}
          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Upload Another image address"
          name="image2"
          value={init.image2}
          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Item Name"
          name="item"
          value={init.item}
          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="writer name"
          value={init.writer}
          name="writer"
          variant="outlined"
        />
       </Grid>
       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Item Price"
          value={init.price}
          name="price"
   type="number"
          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
   type="number"
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Item Off"
          value={init.off}
          name="off"
          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Product Description"
          name="description"
          value={init.description}

          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="About Authon"
          value={init.author}

          name="author"
          variant="outlined"
        />
   
       </Grid>

       <Button onClick={submi} color="secondary" variant="contained" style={{margin:"20px 0",marginLeft:"50%",transform:"translate(-50%,0)"}}>Send Data</Button>
</>  :
<>
       <Grid item xs={12}>

        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Upload image address"
          name="image"
          value={init.image}
          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Upload Another image address"
          name="image2"
          value={init.image2}
          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Item Name"
          name="item"
          value={init.item}
          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Company name"
          value={init.sellers}
          name="sellers"
          variant="outlined"
        />
       </Grid>
       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Item Price"
          value={init.price}
          name="price"
   type="number"
          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
   type="number"
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Item Off"
          value={init.off}
          name="off"
          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="Product Description"
          name="description"
          value={init.description}

          variant="outlined"
        />
       </Grid>

       <Grid item xs={12}>
        <TextField
        onChange={changi}
        style={{width:"100%"}}
          required
          id="outlined-required"
          label="About Seller"
          value={init.about_seller}

          name="about_seller"
          variant="outlined"
        />
   
       </Grid>

       <Button onClick={submi} color="secondary" variant="contained" style={{margin:"20px 0",marginLeft:"50%",transform:"translate(-50%,0)"}}>Send Data</Button>
</>
}
</Grid>
 <Grid item xs={1} sm={3}>

</Grid>
    </form>
    
    </Grid>
          </Grid>  
          </Container>
          
        </div>
    )
}
