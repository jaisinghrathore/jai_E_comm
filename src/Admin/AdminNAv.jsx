import React from 'react'
import logo from "../Image/loggo.png";
import Button from '@material-ui/core/Button'
import {useHistory,Link} from "react-router-dom"

export default function AdminNAv() {
const history=useHistory();


    const logout=()=>{
        localStorage.setItem("login","");
        history.push("/adminlogin");
    window.location.reload();
    }



    return (
        <>
         <nav class="navbar navbar-expand-md navbar-dark" style={{backgroundColor:"#0F1111",height:"80px"}}>
         <Link to="products"> <img src={logo} height="80px" style={{position:"relative",bottom:"4px"}}/></Link>  
  <button class="navbar-toggler" type="button" data-toggle="collapse1 " data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse1 navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav  ml-auto">
     
    {localStorage.getItem("login")=="423485479543945438594358" && localStorage.getItem("login")?
        <>
        <li class="nav-item mr-4">
        <Link class="nav-link" to="/products">Products</Link>
      </li>
      <li class="nav-item mr-4">
        <Link class="nav-link" to="/add_data">Add_products</Link>
      </li>  
      <li class="nav-item mr-4">
        <Link class="nav-link" to="/add_banner">Add_Banner</Link>
      </li>
      <li class="nav-item mr-4">
        <Link class="nav-link" to="/admindocs">Product details</Link>
      </li> 
      <li class="nav-item mr-4">
        <Link class="nav-link" to="/enquiry">Enquiry</Link>
      </li> 
   
      <li  class="nav-item mr-4">
         <Button  onClick={logout} color="secondary" variant="contained" style={{marginTop:"4px"}}>log-out</Button>
      </li> 
       </>
      :
      <>
      <li class="nav-item mr-4">
        <a class="nav-link" href="/adminlogin">AdminLogin</a>
      </li>
      </>
    }
    </ul>
  </div>  
</nav>   
        </>
    )
} 