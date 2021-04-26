import React,{useState} from 'react'
import Button from "@material-ui/core/Button"
import {useHistory} from "react-router-dom"
import{ Grid,Container,TextField,makeStyles} from "@material-ui/core"
import firebaseDb from "../firebase";
import Nav from "./AdminNAv";
import ListIcon from '@material-ui/icons/List';






export default function AddBanner() {

    const[init,upda] = useState({
        Banner1:"",
        Banner2:"",
        Banner3:"",
        Banner4:""
    });

    const changi=(e)=>{
        upda({...init,[e.target.name]:e.target.value})
    }

    const submi=()=>{



        const promise=new Promise((resolve, reject)=>{
            const reg=
            {
                Banner1:init.Banner1,
                Banner2:init.Banner2,
                Banner3:init.Banner3,
                Banner4:init.Banner4 
            }

                //firebase

            firebaseDb.child("banner").push(
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
            upda({...init,["Banner1"]:"",["Banner2"]:"",["Banner3"]:"",["Banner4"]:""})
          }).then(()=>{
            alert("added successfully");
          })




    }


    return (

        <div>
        <Nav/>
        
            <h1 style={{textAlign:"center",textDecoration:"underline",marginBottom:"0px"}}>Perfect Legal Admin</h1>
            <p style={{textAlign:"center"}}>You can add your new Banner</p>

  


                {/* INPUT ITEMS */}

                <Container>
  <Grid container >

  <Grid item xs={1} sm={3} style={{padding:"20px"}}></Grid>
    
    <Grid xs={10} sm={6}>
  <form noValidate autoComplete="off">
  <Grid container >

    
    
     <Grid item xs={12}>

<TextField
onChange={changi}
style={{width:"100%",marginBottom:"16px"}}
  required
  id="outlined-required"
  label="Upload banner1 address"
  name="Banner1"
  value={init.Banner1}
  variant="outlined"
/>
</Grid>


<Grid item xs={12}>

<TextField
onChange={changi}
style={{width:"100%",marginBottom:"16px"}}
  required
  id="outlined-required"
  label="Upload banner2 address"
  name="Banner2"
  value={init.Banner2}
  variant="outlined"
/>
</Grid>



<Grid item xs={12}>

<TextField
onChange={changi}
style={{width:"100%",marginBottom:"16px"}}
  required
  id="outlined-required"
  label="Upload banner3 address"
  name="Banner3"
  value={init.Banner3}
  variant="outlined"
/>
</Grid>



<Grid item xs={12}>

<TextField
onChange={changi}
style={{width:"100%",marginBottom:"16px"}}
  required
  id="outlined-required"
  label="Upload banner4 address"
  name="Banner4"
  value={init.Banner4}
  variant="outlined"
/>
</Grid>





<Button onClick={submi} color="secondary" variant="contained" style={{margin:"20px 0",marginLeft:"50%",transform:"translate(-50%,0)",width:"260px"}}>Then Send Data</Button>
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
