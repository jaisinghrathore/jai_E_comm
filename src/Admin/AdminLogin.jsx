import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import Nav from "./AdminNAv";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));



export default function AdminLogin() {


    const[init,upda]=useState({
        login:"",
        password:""
    });

      const[verifyData,setData]=React.useState({});

      const[alertInit,alertUpda]=React.useState("none")


        React.useEffect(()=>{
            axios.get("http://localhost:2000/get").then((val)=>{
              setData(val.data);
            })
        },[])

        


        const changi=(event)=>{
            upda({...init,[event.target.name]:event.target.value})
        }
        const history=useHistory();

        const sub=()=>{
            const pass=init.password;
            const login=init.login;

            return new Promise((resolve, reject)=>{
             
              Object.keys(verifyData).map((val)=>{
                if(verifyData[val].login==login && verifyData[val].password ==pass){
                  history.push("./admindocs")    
                  localStorage.setItem("login","423485479543945438594358")
                  window.location.reload();
                }else{
                  alertUpda("block");
                }
                });
              
              resolve();
            }).then(()=>{
              upda({...init,['login']:"",["password"]:""})
            })

       

            

            // console.log(verifyData[val].login)
            // console.log(verifyData[val].password)
            // console.log(login)
            // console.log(pass)
            
            // if(login==="admin" && pass==="admin"){
            //       history.push("./admindata")         
            // localStorage.setItem("login","423485479543945438594358")
            // window.location.reload();
            // }else{
            //     alert("Invalid login details!");             
            // }
            // upda({...init,['login']:"",["password"]:""})
        }


    const classes = useStyles();
    return (
        <>  
        <Nav/>
        <Container>
        <h1 style={{textAlign: "center",marginBottom:"0",textDecoration:"underline"}}>Admin Please Login Here</h1>
  <Grid container >

  <Grid item xs={1} sm={3}>

  </Grid>
    
    <Grid xs={10} sm={6}>
  <form className={classes.root}  noValidate autoComplete="off">
  <Grid container >
  <Grid item xs={12}>
        <TextField
        style={{width:"100%",marginTop:"18%"}}
          required
          id="outlined-required"
          label="Login Id"
          name="login"
          value={init.login}
          onChange={changi}
          variant="outlined"
        />
       </Grid>
  <Grid item xs={12}>
        <TextField
          id="outlined-password-input"
        style={{width:"100%"}}
        name="password"
        onChange={changi}
          label="Password"
          value={init.password}
          type="password"
          autoComplete="current-password"
          variant="outlined"
       />
<p style={{textAlign:"right",marginBottom:"0",color:"red",display:alertInit}}><b>Invalid Login Details!</b></p>
<Button onClick={sub} color="secondary" variant="contained" style={{marginLeft:"10px",marginTop:"10px",marginBottom:"84px"}}>Submit</Button>
       </Grid>

</Grid>
 <Grid item xs={1} sm={3}>

</Grid>
    </form>
    </Grid>
          </Grid>  
          </Container>
        </>
    )
}
