import React from 'react';
import {fireDb} from "./firebase";
import {useLocation} from "react-router-dom"
import firebaseDb from './firebase';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import Success from "./Success";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    inpu: {
             width:"60%",
            height:"36px",
            marginLeft:"50%",
            marginTop:"30px",
            borderRadius:"30px",
            border:"none",
            transform:"translate(-50%,0)",
            "boxShadow":"1px 1px 1px 1px rgba(1,1,1,0.6)",

            '&:hover': {
                width:"90%",
                transition:'all .4s',
            "boxShadow":"3px 3px 3px 3px rgba(1,1,1,0.6)",

            }
    },
  });



const BuyNow=()=>{

    const classes = useStyles();
    const history=useHistory();
     const Location= useLocation();
        const[init,upda]=React.useState({
            namee:"",
            line1:"",
            line2:"",
            pincode:"",
            email:"",
            phone:""
        });
                const datassubmit=(e)=>{
                    
                        upda({...init,[e.target.name]:e.target.value});
                }


                const clicky=()=>{

             new Promise((res,rej)=>{
                 init.propductsId=JSON.stringify(Location.state.id);
                        firebaseDb.child("productsAddress").push(
                            init,
                             err=>{
                                 if(err){
                                     console.log(err);
                                 }
                             }
                         )

                         res();
                    }).then(()=>{
                        firebaseDb.child(`cart`).remove(
                            err=>{
                                if(err)
                                console.log(err);
                            }
                        )
                    }).then(()=>{
                      
                        upda({["namee"]:"",["line1"]:"",["line2"]:"",["pincode"]:"",["phone"]:"",["email"]:""});

                        Location.state.init && Location.state.total ? history.push("/Success",{init,"value":Location.state.total,"id":Location.state.id}) :  history.push("/Success",{init,"value":Location.state.price,"id":Location.state.id})       
                        

                    }).catch(()=>{
                        alert("There are some errors");
                    });
              

                }


                    const inpu = {
                        width:"90%",
                        height:"36px",
                        marginLeft:"50%",
                        marginTop:"30px",
                        borderRadius:"30px",
                        border:"none",
                        transform:"translate(-50%,0)"
                    }

                    

                 

return (
<>
<div style={{width:"100%",height:'100vh',backgroundImage:"url(https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)",backgroundRepeat:"no-repeat",backgroundSize:"100% 100vh"}}>
<h1 style={{textAlign:"center",paddingTop:"20px",color:"white",textShadow:"4px 4px 4px rgba(1,1,1,1)"}}>Add your Personal details</h1>
<div style={{width:'350px',height:"460px",boxShadow:"2px 2px 2px 2px rgba(1,1,1,0.6)",marginTop:'25px',marginBottom:"50px",marginLeft:"50%",transform:'translate(-50%,0)',borderRadius:'20px'}}>
<input type="text" placeholder="Full Name" className={classes.inpu}    onChange={datassubmit} name="namee"  value={init.namee}></input>
<input type="text" placeholder="Address (Line 1)"  className={classes.inpu} onChange={datassubmit} name="line1" value={init.line1}></input>
<input type="text" placeholder="Address (Line 2)"  className={classes.inpu} onChange={datassubmit} name="line2" value={init.line2}></input>
<input type="text" placeholder="Pin_Code"  className={classes.inpu} onChange={datassubmit} name="pincode" value={init.pincode}></input>
<input type="text" placeholder="email"  className={classes.inpu} onChange={datassubmit} name="email" value={init.email}></input>
<input type="number" placeholder="Phone"  className={classes.inpu} onChange={datassubmit} name="phone" value={init.phone}></input>
<Button variant="contained" style={{marginLeft:"50%",transform: "translate(-50%,16px)","boxShadow":"3px 3px 3px 3px rgba(1,1,1,0.6)",backgroundColor:"transparent"}} onClick={clicky}>confirm</Button>
</div>
</div>
</>
    )   
}
export default BuyNow;